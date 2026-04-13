import type { GameSortField } from "../types/index.js";
export interface RawgApi_endpoint<Response, Details> {
    default(): Promise<Response>;
    games(): Promise<Response>;
    details(id: number): Promise<Details>;
    search(query: string, page: number): Promise<Response>;
    suggestions(query: string): Promise<Response>;
}
export declare class RawgApi<Response, Details> implements RawgApi_endpoint<Response, Details> {
    private baseUrl;
    private key;
    constructor(key: string, baseUrl?: string);
    default(): Promise<Response>;
    games(page?: number, ordering?: GameSortField): Promise<Response>;
    details(id: number): Promise<Details>;
    search(query: string, page?: number): Promise<Response>;
    suggestions(query: string): Promise<Response>;
}
//# sourceMappingURL=abstractionApi.d.ts.map