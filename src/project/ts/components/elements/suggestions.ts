import { el } from "../../index_export.js";
import { type Game } from "../../types/index.js";

export function createSuggestions(props: Game | null): HTMLElement {
  const name = el("div", { className: "" }, [
    el("span", {
      className: "suggestion-title",
      textContent: props?.name ?? "",
    }),
  ]);
  const card = el("div", { className: "suggestion-item" }, [
    el("img", {
      src: props?.background_image || "dist/project/css/images/none-img.jpg",
      className: "suggestion-thumb",
      alt: "",
    }),
    el("div", { className: "suggestion-body" }, [name]),
  ]);

  card.addEventListener("click", () => {
    window.location.hash = `#game/${props?.id}`;
  });

  return card;

  /*   const bodyChildren: HTMLElement[] = [
    el("span", {
      className: "suggestion-title",
      textContent: props?.name ?? "",
    }),
  ];
  if (props?.released) {
    bodyChildren.push(
      el("span", {
        className: "suggestion-meta",
        textContent: props.released,
      }),
    );
  }

  const row = el("div", { className: "suggestion-item", role: "option" }, [
    el("img", {
      src: props?.background_image || "dist/project/css/images/none-img.jpg",
      className: "suggestion-thumb",
      alt: "",
    }),
    el("div", { className: "suggestion-body" }, bodyChildren),
  ]);

  row.addEventListener("click", () => {
    window.location.hash = `#game/${props?.id}`;
  });

  return row;*/
}
