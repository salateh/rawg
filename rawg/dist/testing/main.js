// // type ApiResponse<T> = {
// //   data: T | null;
// //   error: string | null;
// //   status: number;
// // };
// // interface IProduct {
// //   id: number;
// //   title: string;
// //   price: number;
// //   description: string;
// //   category: string;
// //   image: string;
// // }
export {};
// // async function apiCall<T>(url: string): Promise<ApiResponse<T>> {
// //   try {
// //     const resp = await fetch(url);
// //     if (!resp.ok) {
// //       return { data: null, status: resp.status, error: resp.statusText };
// //     }
// //     const data = await resp.json();
// //     return { data: data as T, status: resp.status, error: null };
// //   } catch (err) {
// //     if (err instanceof Error) {
// //       return { status: 0, data: null, error: err.message };
// //     }
// //     return { data: null, status: 0, error: "Unknown error" };
// //   }
// // }
// // apiCall<IProduct[]>("https://fakestoreapi.com/products");
// // /* /////////////////
// // interface Pending {
// //   status: "pending";
// //   createdAt: string;
// // }
// // interface Shipped {
// //   status: "shipped";
// //   deliveryDate: string;
// //   courierName: string;
// // }
// // interface Cancelled {
// //   status: "cancelled";
// //   reason: string;
// // }
// // type OrderStatus = Pending | Shipped | Cancelled;
// // const order: OrderStatus = {
// //   status: "shipped",
// //   deliveryDate: "10.10.25",
// //   courierName: "Bob",
// // };
// // function processOrder(order: OrderStatus): string {
// //   // Указываем, что всегда ждем строку
// //   switch (order.status) {
// //     case "shipped":
// //       return `Доставлено курьером: ${order.courierName}`;
// //     case "cancelled":
// //       return `Отменено по причине: ${order.reason}`;
// //     case "pending":
// //       return `Заказ в обработке с ${order.createdAt}`;
// //     default:
// //       // Это защита на случай, если в будущем добавятся новые статусы
// //       return "Неизвестный статус";
// //   }
// // }
// // console.log(processOrder(order));
// // */
// // /* //////////////
// // interface IUser {
// //   id: string;
// //   name: string;
// //   email: string;
// //   avatar: string;
// //   role: "admin" | "user";
// //   createdAt: number;
// // }
// // type TUpdateProfilePayload = Partial<Omit<IUser, "id" | "role" | "createdAt">>;
// // const test: TUpdateProfilePayload = {avatar:"Asda"};
// // */
// // /*////////
// // interface ICartItem {
// //   id: number;
// //   title: string;
// //   price: number;
// //   description: string;
// //   category: string;
// //   quantity: number;
// //   image: string;
// // }
// // const cart: ICartItem[] = [
// //   {
// //     id: 1213,
// //     category: "sadasd",
// //     description: "sdaad",
// //     image: "sdada",
// //     price: 200,
// //     quantity: 2,
// //     title: "sdada",
// //   },
// // ];
// // type TotalResult = {
// //   totalPrice: number;
// //   totalQuantity: number;
// // };
// // function calculateTotal(items: ICartItem[]): TotalResult {
// //   const test = items.reduce<TotalResult>(
// //     (acc, curr) => {
// //       return {
// //         totalPrice: acc.totalPrice + curr.price * curr.quantity,
// //         totalQuantity: acc.totalQuantity + curr.quantity,
// //       };
// //     },
// //     { totalPrice: 0, totalQuantity: 0 },
// //   );
// //   return test;
// // }
// // calculateTotal(cart);
// // console.log(calculateTotal(cart));
// // */
// // /*//////
// // interface IBook {
// //   id: string;
// //   title: string;
// //   author: string;
// //   price: number;
// //   image: string;
// // }
// // interface ICartItem extends IBook {
// //   quantity: number;
// // }
// // type AppState = {
// //   readonly books: IBook[];
// //   readonly cart: ICartItem[];
// //   readonly favorites: IBook[];
// // };
// // interface IStore {
// //   state: AppState;
// //   init(): void;
// //   addBook(obj:IBook):void;
// //   deleteFromCart(id:string):void;
// //   getTotalPrice():number
// // }
// // */
// // //# sourceMappingURL=main.js.map
// // /*// interface Main {
// // //   init(): Promise<ApiResponse<IGame>>;
// // // }
// // // type Endpoint =
// // //   | "games"
// // //   | "creator-roles"
// // //   | "developers"
// // //   | "creators"
// // //   | "creator-roles"
// // //   | "stores"
// // //   | "publishers"
// // //   | "platforms"
// // //   | "genres";
// // // class MainFunc implements Main {
// // //   constructor(private item: Endpoint) {}
// // //   (INIT) async init(): Promise<ApiResponse<IGame>> {
// // //     const data = await fetchProducts<IGame>(
// // //       `https://api.rawg.io/api/${this.item}?key=c3e1ddbcd8a04771b1072d02ee51872c`,
// // //     );
// // //     return data;
// // //   }
// // // }
// // // const mainFunc = new MainFunc(`games`);
// // // mainFunc.init();
// // ////////////////////////////////////////////////////////////////////////
// // // type Listener = (arg: T) => void;
// // */
// // type Unsubscribe = () => void;
// // interface IStore<T> {
// //   getState(): T;
// //   subscribe(listener: (state: T) => void): Unsubscribe;
// //   stateSet(newState: Partial<T>): void;
// // }
// // export class Store<T extends object> implements IStore<T> {
// //   constructor(initialState: T) {
// //     this.state = initialState;
// //   }
// //   private listeners: ((state: T) => void)[] = [];
// //   private state: T;
// //   private notify(): void {
// //     this.listeners.forEach((sub) => sub(this.state));
// //   }
// //   getState(): T {
// //     return this.state;
// //   }
// //   subscribe(listener: (states: T) => void): Unsubscribe {
// //     this.listeners.push(listener);
// //     return () =>
// //       (this.listeners = this.listeners.filter((a) => a !== listener));
// //   }
// //   stateSet(newState: Partial<T>): void {
// //     Object.assign(this.state, newState);
// //     this.notify();
// //   }
// // }
// // interface User {
// //   id: number;
// //   name: string;
// //   email: string;
// // }
// // interface State<T> {
// //   data: T[] | null;
// //   isLoading: boolean;
// //   error: string | null;
// // }
// async function fetchUsers() {
//   store.stateSet({ isLoading: true });
//   try {
//     const data = await fetchProducts<User>(
//       `https://jsonplaceholder.typicode.com/users`,
//     );
//     store.stateSet({ data, isLoading: false });
//   } catch (err) {
//     store.stateSet({
//       error: err instanceof Error ? err.message : "unknown error",
//       isLoading: false,
//     });
//   }
// }
// // export const store = new Store<State<User>>({
// //   data: null,
// //   error: null,
// //   isLoading: false,
// // });
// // const user_list = document.getElementById("user-list");
// // console.log(user_list);
// // const unsubscribe = store.subscribe(() => {
// //   console.log("Render triggered");
// //   renderUsers(user_list);
// // });
// function renderUsers(container: HTMLElement | null) {
//   const fragment = document.createDocumentFragment();
//   if (!container) return;
//   if (container) container.innerHTML = "";
// //   const state = store.getState();
// //   console.log("Rendering with state:", state);
// //   console.log("Fragment children count:", fragment.children.length);
// //   if (state.isLoading) {
// //     fragment.append(
// //       el("div", {}, [
// //         el("img", { src: "dist/project/css/images/loading-12.gif" }),
// //       ]),
// //     );
// //   } else if (state.error) {
// //     fragment.append(el("div", {}, [el("h1", { textContent: state.error })]));
// //   } else if (state.data) {
// //     state.data.forEach((user) => fragment.append(createCard(user)));
// //   }
// //   if (container) container.append(fragment);
// // }
// // function createCard(props: User): HTMLElement {
// //   return el("div", {}, [
// //     el("h2", { textContent: props.name }),
// //     el("h3", { textContent: props.email }),
// //   ]);
// // }
// // fetchUsers();
// // export function el(
// //   tagName: string,
// //   attributes: Record<string, any> = {},
// //   children: (Node | string)[] = [],
// // ): HTMLElement {
// //   const element = document.createElement(tagName);
// //   Object.assign(element, attributes);
// //   children.forEach((child) => {
// //     if (typeof child === "string") {
// //       element.append(child);
// //     } else {
// //       element.appendChild(child);
// //     }
// //   });
// //   return element;
// // }
//# sourceMappingURL=main.js.map