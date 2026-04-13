import {
  selectGame,
  fetchGames,
  searchGames,
  store,
  defaultFetch,
} from "./index_export.js";
import type { GameSortField } from "./types/index.js";
type Route = {
  path: string; // 'game/:id'
  handler: (params: Record<string, string>) => void;
  page: string;
};

const routes: Route[] = [
  {
    path: "",
    handler: () => {
      fetchGames(1);
      defaultFetch();
    },
    page: "main",
  },
  {
    path: "game/:id",
    handler: (params) => {
      (selectGame(Number(params.id)), defaultFetch());
    },
    page: "game",
  },
  {
    path: "search/:query/page/:page",
    handler: (params) => {
      searchGames(
        decodeURIComponent(params.query ? params.query : ""),
        Number(params.page),
      );
      defaultFetch();
    },
    page: "search",
  },
  {
    path: "search/:query",
    handler: (params) => {
      searchGames(decodeURIComponent(params.query ? params.query : ""), 1);
      defaultFetch();
    },
    page: "search",
  },
  {
    path: "page/:page",
    handler: (params) => {
      fetchGames(Number(params.page));
      defaultFetch();
    },
    page: "search",
  },
];

function matchRoute(pathname: string, routes: Route[]) {
  const pathParts = pathname.split("/"); // "game", "1290821"
  console.log("pathParts: ", pathParts);

  for (const route of routes) {
    const routeParts = route.path.split("/"); // "game", ":id"
    console.log(routeParts);

    if (routeParts.length !== pathParts.length) continue;

    const params: Record<string, string> = {};

    let match = true;
    for (let i = 0; i < routeParts.length; i++) {
      const routePart = routeParts[i];
      console.log("routeParts", routeParts[i]);

      const pathPart = pathParts[i];
      console.log("pathParts", pathParts[i]);

      if (routePart?.startsWith(":")) {
        const paramName = routePart.slice(1);
        params[paramName] = pathPart!;
        console.log("params: ", params);
      } else if (routePart !== pathPart) {
        match = false;
        break;
      }
    }

    if (match) {
      return { route, params };
    }
  }

  return null;
}
export let page: string = "none";
export function handleRoute() {
  const hash = window.location.hash.slice(1);
  console.log("hash:", hash);

  const result = matchRoute(hash, routes);

  if (result) {
    result.route.handler(result.params);
  } else {
    console.log("404 — маршрут не найден");
  }
}
