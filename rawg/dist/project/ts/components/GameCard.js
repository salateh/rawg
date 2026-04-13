import { el } from "../index_export.js";
import {} from "../types/index.js";
export function createCard(props) {
    const card = el("div", { className: "game-card" }, [
        el("img", {
            src: props?.background_image || "dist/project/css/images/none-img.jpg",
            className: "game-image",
        }),
        el("h3", {
            textContent: props?.name ?? "—×✕×✕×✕×—",
            className: "game-name montserrat",
        }),
        el("div", { className: "hidden-element" }, [
            el("dl", { className: "game-meta-dl" }, [
                el("dt", {
                    textContent: "Release date: ",
                    className: "release-date",
                }, [
                    el("dd", {
                        textContent: props?.released ?? "—×✕×✕×✕×—",
                        className: "released pixelify-sans",
                    }),
                ]),
                el("div", { className: "hr" }),
            ]),
            el("dl", { className: "game-meta-dl" }, [
                el("dt", { textContent: "Genres: ", className: "genres" }, [
                    el("dd", {
                        textContent: props?.genres.map((a) => a.name ?? "—×✕×✕×✕×—"),
                        className: "genres-name pixelify-sans",
                    }),
                ]),
            ]),
            el("div", { className: "hr" }),
        ]),
    ]);
    card.addEventListener("click", () => {
        window.location.hash = `#game/${props?.id}`;
    });
    return card;
}
//# sourceMappingURL=GameCard.js.map