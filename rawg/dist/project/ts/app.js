import { RawgApi, RAWG_API_KEY, Store, renderApp, handleRoute, renderSuggestions, } from "./index_export.js";
export const store = new Store({
    games: [],
    error: null,
    isLoading: true,
    selectedGame: null,
    searchGames: null,
    page: 1,
    count: 0,
    countAll: 0,
    next: "2",
    previous: "",
    gameSort: "popularity",
    backgroundImage: null,
});
export const API = new RawgApi(RAWG_API_KEY);
export const getPageFromHash = () => {
    const hash = window.location.hash.slice(1); // "#search/god of war/page/3"
    console.log(hash);
    const parts = hash.split("/");
    console.log(parts);
    const pageIndex = parts.indexOf("page");
    if (pageIndex !== -1 && parts[pageIndex + 1]) {
        const pageValue = parseInt(parts[pageIndex + 1], 10);
        return isNaN(pageValue) ? 1 : pageValue;
    }
    return 1;
};
console.log(getPageFromHash());
export async function defaultFetch() {
    try {
        const response = await API.default();
        store.stateSet({
            isLoading: false,
            countAll: response.count,
        });
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "unknown error";
        store.stateSet({ error: errorMessage, isLoading: false });
    }
}
export async function fetchGames(page = 1, ordering = store.getState().gameSort) {
    try {
        store.stateSet({ isLoading: true, searchGames: null });
        const response = await API.games(page, ordering);
        store.stateSet({
            games: response.results,
            isLoading: false,
            count: response.count,
            page: getPageFromHash(),
            next: response.next,
            previous: response.previous,
        });
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "unknown error";
        store.stateSet({ error: errorMessage, isLoading: false });
    }
}
export async function selectGame(id) {
    try {
        store.stateSet({ isLoading: true, selectedGame: null });
        const game = await API.details(id);
        store.stateSet({
            selectedGame: game,
            searchGames: null,
            isLoading: false,
            backgroundImage: game.background_image,
        });
        // document.documentElement.style.setProperty(
        //   "--bg-image",
        //   `url(${game.background_image})`,
        // );
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "unknown error";
        store.stateSet({ error: errorMessage, isLoading: false });
    }
}
export async function searchGames(query = "", page = 1, size = 39) {
    try {
        store.stateSet({ isLoading: true, searchGames: null });
        const response = await API.search(query, page);
        store.stateSet({
            searchGames: response.results,
            isLoading: false,
            count: response.count,
            page: getPageFromHash(),
            next: response.next,
            previous: response.previous,
        });
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "unknown error";
        store.stateSet({ error: errorMessage, isLoading: false });
    }
}
export async function suggestionsSearchGames(query) {
    try {
        // store.stateSet({ isLoading: true, searchGames: null });
        const response = await API.suggestions(query);
        renderSuggestions(response.results);
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "unknown error";
        store.stateSet({ error: errorMessage, isLoading: false });
    }
}
const game_list = document.getElementById("game-list");
function subscribe(func, el) {
    return store.subscribe(() => func(el));
}
subscribe(renderApp, game_list);
handleRoute();
window.addEventListener("hashchange", handleRoute);
//# sourceMappingURL=app.js.map