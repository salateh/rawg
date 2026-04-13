import { el, store, fetchGames } from "../index_export.js";
import type { GameSortField, GameSort } from "../types/index.js";


export function filter(): HTMLElement {
  const currentSort = store.getState().gameSort;

  const order = el("select", { className: "filters-hidden filter-select" }, [
    el("option", {
      value: "popularity",
      selected: currentSort === "popularity" ? true : false,
      textContent: "Popularity",
    }),
    el("option", {
      value: "name",
      selected: currentSort === "name" ? true : false,
      textContent: "Name",
    }),
    el("option", {
      value: "released",
      selected: currentSort === "released" ? true : false,
      textContent: "Release Date",
    }),
    el("option", {
      value: "added",
      selected: currentSort === "added" ? true : false,
      textContent: "Date Added",
    }),
    el("option", {
      value: "rating",
      selected: currentSort === "rating" ? true : false,
      textContent: "Rating",
    }),
  ]);

  order.addEventListener("change", (event) => {
    const target = event.target as HTMLSelectElement;
    const targetField = target.value as GameSortField;
    store.stateSet({ gameSort: targetField });
    //   window.location.hash = `#page/1`;

    fetchGames(1, targetField);
  });

  const filter = el(
    "div",
    {
      className: "filter-panel",
    },
    [
      el("span", {
        textContent: "test",
        className: "button-filter",
      }),
      order,
    ],
  );
  return filter;
}
// function changeHashFromFilterData(query: string | number | boolean) {
//   if (query)
//     window.location.hash = `#filters?ordering=${query}`;
// }
