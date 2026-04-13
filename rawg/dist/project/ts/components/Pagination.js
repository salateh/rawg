import { el, Store, store } from "../index_export.js";
function get_a_Page(respPagination) {
    const urlString = `${respPagination}`;
    const queryString = urlString.split("?")[1] || "";
    // Создаем объект URL
    const urlPag = new URLSearchParams(queryString);
    const PAGE = urlPag.get("page") ? urlPag.get("page") : "1";
    return PAGE;
}
export function createPagination() {
    const state = store.getState();
    const hash = window.location.hash.slice(1);
    const { next, count, previous, page } = state;
    const pagination = {
        totalPages: Math.ceil(Number(count) / 20),
    };
    console.log(page);
    if (page < 1)
        return null;
    const isSearchMode = hash.startsWith("search/");
    console.log("isSearchMode:", isSearchMode);
    let searchQuery = "";
    if (isSearchMode) {
        // hash вида: "search/matrix/page/2" или "search/matrix"
        const parts = hash.split("/");
        console.log("parts:", parts);
        searchQuery = decodeURIComponent(`${parts[1]}`); // второй сегмент — это query
        console.log("searchQuery: ", searchQuery);
    }
    const prevBtn = el("button", {
        textContent: "Назад",
        classList: "pagination-btn",
    });
    prevBtn.disabled = state.page === 1;
    prevBtn.addEventListener("click", () => {
        if (page > 1) {
            if (isSearchMode) {
                window.location.hash = `#search/${searchQuery}/page/${get_a_Page(previous)}`;
                console.log(`prev hash: ${window.location.hash}`);
            }
            else {
                window.location.hash = `#page/${get_a_Page(previous)}`;
                console.log(`prev hash: ${window.location.hash}`);
            }
        }
    });
    const pageSpan = el("span", {
        textContent: `${page} / ${pagination.totalPages}`,
        classList: "pagination-info",
    });
    const nextBtn = el("button", {
        textContent: "Вперёд →",
        classList: "pagination-btn",
    });
    nextBtn.disabled = page === pagination.totalPages;
    nextBtn.addEventListener("click", () => {
        if (page < pagination.totalPages) {
            if (isSearchMode) {
                window.location.hash = `#search/${searchQuery}/page/${get_a_Page(next)}`;
                console.log(`next hash: ${window.location.hash}`);
            }
            else {
                window.location.hash = `#page/${get_a_Page(next)}`;
                console.log(`next hash: ${window.location.hash}`);
            }
        }
    });
    const container = el("div", { classList: "pagination" }, [
        prevBtn,
        pageSpan,
        nextBtn,
    ]);
    return container;
}
//# sourceMappingURL=Pagination.js.map