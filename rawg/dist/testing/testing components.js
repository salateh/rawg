// function createButton(text: string, color: string): HTMLElement {
//   const el = document.createElement("button") as HTMLButtonElement;
//   el.classList.add("className");
//   el.textContent = text;
//   el.style.backgroundColor = color;
//   return el;
// }
// console.log(createButton("1", "#ff00a"));
//<------------------------------------------------------------------------------------->
const div = document.querySelector("#div");
const games = [
    { title: "Игра 1", price: 1001, id: 3, imgUrl: "imgUrl" },
    { title: "Игра 2", price: 1030, id: 12, imgUrl: "imgUrl" },
    { title: "Игра 3", price: 1050, id: 3, imgUrl: "imgUrl" },
];
games.forEach((a) => {
    const card = createGameCard(a);
    return div?.append(card);
});
// с фрагментами:
// const fragment = document.createDocumentFragment();
// games.forEach((game) => {
//   const card = createGameCard(game);
//   fragment.append(card);  // добавляем во фрагмент (в памяти)
// });
// div?.append(fragment); // один раз в реальный DOM
export function el(tagName, attributes = {}, children = []) {
    const element = document.createElement(tagName);
    Object.assign(element, attributes);
    children.forEach((child) => {
        if (typeof child === "string") {
            element.append(child);
        }
    });
    return element;
}
function createGameCard(props) {
    /* const h3 = document.createElement("h3");
    h3.textContent = props.title;
    const span = document.createElement("span");
    span.textContent = `Цена: ${props.price} руб.`;
    const container = document.createElement("div");
    container.classList.add("game-card");
    const description = document.createElement("button");
    description.textContent = "more details";
    description.addEventListener("click", () => {
      console.log(props.id);
    });
    container.append(h3, span, description);
  
    return container;
    */
    return el("div", {}, [
        el("h3", { textContent: `${props.title}` }),
        el("img", { src: `${props.imgUrl}` }),
        el("button", { textContent: "Buy", onclick: () => console.log(props.id) }),
    ]);
}
function transformGame(raw) {
    const test = { name: raw.name, id: raw.id };
    return test;
}
const rawResponse = {
    count: 100,
    next: "url",
    previous: null,
    results: [
        {
            id: 1,
            name: "Game 1",
            description: "",
            domain: "",
            games_count: 1,
            image_background: "",
            slug: "",
        },
        {
            id: 2,
            name: "Game 2",
            description: "",
            domain: "",
            games_count: 1,
            image_background: "",
            slug: "",
        },
    ],
};
function useArrayDate(rawg) {
    const apiGame = rawg.results.map((a) => transformGame(a));
    return apiGame;
}
useArrayDate(rawResponse);
const testing = {
    games_count: 12,
    id: 123,
    image: "",
    name: "",
};
function mapper(obj, mapperObj) {
    const arr = Object.keys(mapperObj);
    let result = arr.reduce((acc, key) => {
        acc[key] = obj[mapperObj[key]];
        return acc;
    }, {});
    return result;
}
class Store {
    constructor(initialState) {
        this.state = initialState;
    }
    listeners = [];
    state;
    notify() {
        this.listeners.forEach((sub) => sub(this.state));
    }
    getState() {
        return this.state;
    }
    subscribe(listener) {
        this.listeners.push(listener);
        return () => (this.listeners = this.listeners.filter((a) => a !== listener));
    }
    stateSet(newState) {
        Object.assign(this.state, newState);
        this.notify();
    }
}
const store = new Store({
    games: [],
    error: null,
    isLoading: false,
});
const unsubscribe = store.subscribe((states) => {
    console.log("Состояние изменилось:", states);
});
store.stateSet({ isLoading: true }); // подписчик получит уведомление
unsubscribe(); // теперь этот подписчик больше не будет получать уведомления
// export type ApiResponse<T> = {
//   data: T | null;
//   error: string | null;
//   status: number;
// };
export async function fetchProducts(url) {
    const resp = await fetch(url);
    if (!resp.ok)
        throw new Error(resp.statusText);
    return await resp.json();
}
//# sourceMappingURL=testing%20components.js.map