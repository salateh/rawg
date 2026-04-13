export interface PaginationParams {
    page?: number;
    page_size?: number;
}
export interface DatesRange {
    from?: string;
    to?: string;
}
export interface CommonFilters extends PaginationParams {
    dates?: string | DatesRange;
    ordering?: string;
    search?: string;
    search_precise?: boolean;
    search_exact?: boolean;
    parent_platforms?: string;
    platforms?: string;
    stores?: string;
    developers?: string;
    publishers?: string;
    genres?: string;
    tags?: string;
    creators?: string;
}
export interface ParentPlatform {
    id: number;
    name: string;
    slug: string;
}
export interface Platform {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    image?: string;
    year_start?: number;
    year_end?: number;
}
export interface PlatformDetails {
    id: number;
    name: string;
    slug: string;
    image: string | null;
    year_end: number | null;
    year_start: number | null;
    games_count: number;
    image_background: string;
}
export interface Store {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
}
export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}
export interface Tag {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
}
export interface Creator {
    id: number;
    name: string;
    slug: string;
    image: string | null;
    image_background: string;
    games_count: number;
    positions?: CreatorPosition[];
}
export interface CreatorPosition {
    id: number;
    name: string;
    slug: string;
}
export interface Developer {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}
export interface Publisher {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}
export interface EsrbRating {
    id: number;
    name: string;
    slug: string;
    name_en?: string;
}
export interface Image {
    id: number;
    image: string;
    width: number;
    height: number;
    is_deleted: boolean;
}
export interface Screenshot {
    id: number;
    image: string;
    width: number;
    height: number;
    is_deleted: boolean;
}
export interface Trailer {
    id: number;
    name: string;
    preview: string;
    data: {
        480: string;
        max: string;
    };
}
export interface Clip {
    clip: string;
    clips: {
        320: string;
        640: string;
        full: string;
    };
    video: string;
    preview: string;
}
export interface PaginatedResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}
//# sourceMappingURL=types.d.ts.map