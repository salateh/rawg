import { el } from "./elements/el.js";
import {} from "../types/index.js";
export function createCard(props) {
    const card = el("div", {}, [
        el("hr", {}),
        el("h3", { textContent: `${props.name}` }),
    ]);
    return card;
}
//# sourceMappingURL=MovieCard.js.map