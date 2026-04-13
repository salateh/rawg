import type { GameDetails } from "../types/index.js";
import { el, store, createSearchForm, fetchGames } from "../index_export.js";
// import { backgroundForCurrentPage } from "../backgroundForCurrentPage.js";

export function renderGameDetails(
  container: HTMLElement | null,
  game: GameDetails,
): void {
  const fragment = document.createDocumentFragment();

  fragment.append(createSearchForm());

  if (!container) return;

  const GAMES = el("span", {
    textContent: "GAMES",
    className: "breadcrumbs-games",
  });

  const breadcrumbs__separator = el("span", {
    textContent: "/",
    className: "breadcrumbs-separator",
  });

  const HOME = el("span", {
    textContent: "HOME",
    className: "breadcrumbs-home",
  });

  GAMES.addEventListener("click", () => {
    store.stateSet({ selectedGame: null });
    window.location.hash = "";
  });
  HOME.addEventListener("click", () => {
    store.stateSet({ selectedGame: null });

    // window.location.hash = "#ordering=raiting"; // !!! testing !!!
    fetchGames(1, "rating");
  });
  const breadcrumbs = el("div", { className: "breadcrumbs" }, [
    breadcrumbs__separator,
    HOME,
    breadcrumbs__separator,
    GAMES,
  ]);

  fragment.append(
    // el("div", { className: "game-details" }, [
    el("dl", { className: "info" }, [
      el("dt", {}, [breadcrumbs]),
      el("dt", { textContent: game.name, className: "game-title" }),

      el("dt", { textContent: "About", className: "about" }, [
        el("dd", {
          textContent: game.description_raw,
          className: "game-description",
        }),
      ]),
    ]),
    // ]),
  );

  container.append(fragment);
}
