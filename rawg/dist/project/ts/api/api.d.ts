export interface TmdbResponse<T> {
    page: number;
    results: T[];
    total_pages: number;
    total_results: number;
}
export declare function fetchPopularMovies<T>(url: string): Promise<TmdbResponse<T>>;
//# sourceMappingURL=api.d.ts.map