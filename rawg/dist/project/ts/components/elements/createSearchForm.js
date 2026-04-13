import { API, getPageFromHash } from "../../app.js";
import { debounce } from "../../debounce.js";
import { el, fetchGames, searchGames, store, suggestionsSearchGames, renderSuggestions, createCard, } from "../../index_export.js";
export function createSearchForm() {
    const input = el("input", {
        type: "text",
        placeholder: ` Search ${store
            .getState()
            .countAll.toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`,
        id: "search-input",
        className: "search-input",
    });
    const searchIcon = el("i", {
        className: "fa-solid fa-magnifying-glass",
    });
    const submitButton = el("div", { className: "search-button pixelify-sans" }, [
        el("span", {
            textContent: "alt",
            className: "alt",
        }),
        el("span", {
            textContent: "+",
            className: "plus",
        }),
        el("span", {
            textContent: "f4",
            className: "f4",
        }),
    ]);
    const suggestions = el("div", {
        className: "suggestions",
        id: "suggestions",
    });
    const form = el("form", {
        className: "search-form",
        id: "search-form",
    }, [searchIcon, input, submitButton]);
    const handleSuggestions = (params) => {
        suggestionsSearchGames(params);
    };
    const debouncedSugg = debounce(handleSuggestions, 300);
    form.addEventListener("input", () => {
        const query = input.value.trim();
        if (query)
            (suggestions.replaceChildren(), debouncedSugg(query));
        else if (query.length == 0) {
            suggestions.replaceChildren();
        }
    });
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = input.value.trim();
        if (query) {
            window.location.hash = `#search/${encodeURIComponent(query)}/page/1`;
        }
    });
    const searchWrapper = el("div", { className: "search-wrapper" }, [
        form,
        suggestions,
    ]);
    return searchWrapper;
}
//# sourceMappingURL=createSearchForm.js.map