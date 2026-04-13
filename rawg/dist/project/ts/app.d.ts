import type { GameDetails, GamesResponse, GamesState, GameSortField } from "./types/index.js";
import { RawgApi, Store } from "./index_export.js";
export declare const store: Store<GamesState>;
export declare const API: RawgApi<GamesResponse, GameDetails>;
export declare const getPageFromHash: () => number;
export declare function defaultFetch(): Promise<void>;
export declare function fetchGames(page?: number, ordering?: GameSortField): Promise<void>;
export declare function selectGame(id: number): Promise<void>;
export declare function searchGames(query?: string, page?: number, size?: number): Promise<void>;
export declare function suggestionsSearchGames(query: string): Promise<void>;
//# sourceMappingURL=app.d.ts.map