export type GameStatus = "yet" | "owned" | "beaten" | "toplay" | "dropped" | "playing";
export type PlatformType = "pc" | "playstation" | "xbox" | "nintendo" | "android" | "ios" | "mac" | "linux";
export type SortOrder = "asc" | "desc";
export interface ApiError {
    status: number;
    statusText: string;
    message: string;
    error?: string;
}
export interface PaginationParams {
    page?: number;
    pageSize?: number;
    totalPages: number;
    totalItems?: number;
}
export interface GameFilters {
    platforms?: number[];
    genres?: number[];
    tags?: number[];
    stores?: number[];
    developers?: number[];
    publishers?: number[];
    dates?: {
        from: Date;
        to: Date;
    };
    metacritic?: {
        min: number;
        max: number;
    };
    rating?: number;
    playtime?: {
        min: number;
        max: number;
    };
}
export type GameSortField = "name" | "released" | "added" | "created" | "updated" | "rating" | "metacritic" | "popularity";
export interface GameSort {
    field: GameSortField;
}
//# sourceMappingURL=utilits.d.ts.map