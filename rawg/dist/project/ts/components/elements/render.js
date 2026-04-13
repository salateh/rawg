import { store, createCard, el, createSearchForm, renderGameDetails, createPagination, } from "../../index_export.js";
import { filter } from "../../filter/filterGames.js";
import { createSuggestions } from "./suggestions.js";
function renderGames(container, games) {
    const fragment = document.createDocumentFragment();
    if (!container)
        return;
    fragment.append(createSearchForm());
    fragment.append(filter());
    games.forEach((game) => fragment.append(createCard(game)));
    const pagination = createPagination();
    if (pagination)
        fragment.append(pagination);
    container.append(fragment);
}
function renderLoading(container) {
    const fragment = document.createDocumentFragment();
    if (!container)
        return;
    fragment.append(el("div", { className: "center" }, [el("div", { className: "loading" })]));
    container.append(fragment);
}
function renderError(container, errorMessage) {
    const fragment = document.createDocumentFragment();
    if (!container)
        return;
    fragment.append(el("div", {}, [el("h1", { textContent: errorMessage })]));
    container.append(fragment);
}
function renderSearch(container, games) {
    const fragment = document.createDocumentFragment();
    if (!container)
        return;
    fragment.append(createSearchForm());
    games.forEach((game) => fragment.append(createCard(game)));
    const pagination = createPagination();
    if (pagination)
        fragment.append(pagination);
    container.append(fragment);
}
export function renderSuggestions(games) {
    const fragment = document.createDocumentFragment();
    const suggestions = document.getElementById("suggestions");
    if (!suggestions)
        return;
    suggestions.replaceChildren();
    games?.forEach((game) => fragment.append(createSuggestions(game) ?? el("div", { textContent: "Empty" })));
    suggestions.append(fragment);
}
export function renderApp(container) {
    const state = store.getState();
    if (container)
        container.replaceChildren();
    console.log(state.isLoading);
    if (state.selectedGame)
        renderGameDetails(container, state.selectedGame);
    else if (state.isLoading)
        renderLoading(container);
    else if (state.error)
        renderError(container, state.error);
    else if (state.searchGames)
        renderSearch(container, state.searchGames);
    else if (state.games)
        renderGames(container, state.games);
}
//# sourceMappingURL=render.js.map