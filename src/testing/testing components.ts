// function createButton(text: string, color: string): HTMLElement {
//   const el = document.createElement("button") as HTMLButtonElement;
//   el.classList.add("className");
//   el.textContent = text;
//   el.style.backgroundColor = color;
//   return el;
// }
// console.log(createButton("1", "#ff00a"));
//<------------------------------------------------------------------------------------->

interface IGameProps {
  title: string;
  price: number;
  id: number;
  imgUrl: string;
}

const div = document.querySelector("#div");

const games: IGameProps[] = [
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

export function el(
  tagName: string,
  attributes: Record<string, any> = {},
  children: (Node | string)[] = [],
): HTMLElement {
  const element = document.createElement(tagName);
  Object.assign(element, attributes);

  children.forEach((child) => {
    if (typeof child === "string") {
      element.append(child);
    }
  });
  return element;
}
function createGameCard(props: IGameProps): HTMLElement {
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

type RawgGame = {
  id: number;
  name: string;
  domain: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
};

type APIGame = {
  id: number;
  name: string;
};
type APIResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: RawgGame[];
};

function transformGame(raw: RawgGame): APIGame {
  const test: APIGame = { name: raw.name, id: raw.id };
  return test;
}
const rawResponse: APIResponse = {
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

function useArrayDate(rawg: APIResponse): APIGame[] {
  const apiGame = rawg.results.map((a) => transformGame(a));

  return apiGame;
}
useArrayDate(rawResponse);

//////////////////
type RawGame = {
  id: number;
  name: string;
  description: string;
  background_image: string;
  // ... ещё куча полей
};

type RawPlatform = {
  id: number;
  name: string;
  games_count: number;
  image: string | null;
  // ... свои поля
};
type Game = {
  id: number;
  name: string;
};

type Platform = {
  id: number;
  name: string;
};
const testing: RawPlatform = {
  games_count: 12,
  id: 123,
  image: "",
  name: "",
};

function mapper<T, M extends Record<string, keyof T>>(
  obj: T,
  mapperObj: M,
): { [Key in keyof M]: T[M[Key]] } {
  const arr = Object.keys(mapperObj);
  let result = arr.reduce(
    (acc, key: keyof M) => {
      acc[key] = obj[mapperObj[key]];
      return acc;
    },
    {} as { [Key in keyof M]: T[M[Key]] },
  );
  return result;
}

interface StoreState {
  games: Game[];
  isLoading: boolean;
  error: string | null;
}
// type Listener = (arg: T) => void;

type Unsubscribe = () => void;

interface IStore<T> {
  getState(): T;
  subscribe(listener: (state: T) => void): Unsubscribe;
  stateSet(newState: Partial<T>): void;
}

class Store<T extends object> implements IStore<T> {
  constructor(initialState: T) {
    this.state = initialState;
  }
  private listeners: ((state: T) => void)[] = [];
  private state: T;
  private notify(): void {
    this.listeners.forEach((sub) => sub(this.state));
  }

  getState(): T {
    return this.state;
  }
  subscribe(listener: (state: T) => void): Unsubscribe {
    this.listeners.push(listener);
    return () =>
      (this.listeners = this.listeners.filter((a) => a !== listener));
  }
  stateSet(newState: Partial<T>): void {
    Object.assign(this.state, newState);
    this.notify();
  }
}
const store = new Store<StoreState>({
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

export async function fetchProducts<T>(url: string): Promise<T[]> {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(resp.statusText);

  return await resp.json();
}
