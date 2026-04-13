export type { Requirements } from "./common";
import type { Platform, ParentPlatform, Genre, Store, Tag, Developer, Publisher, EsrbRating, Clip, Screenshot, Trailer, AddedByStatus, RawgApiResponse, Requirements, State } from "./common";
export interface Game {
    id: number;
    slug: string;
    name: string;
    name_original: string;
    description: string;
    description_raw: string;
    metacritic: number | null;
    metacritic_platforms: MetacriticPlatform[];
    released: string;
    tba: boolean;
    updated: string;
    background_image: string;
    background_image_additional: string;
    website: string;
    rating: number;
    rating_top: number;
    ratings: Rating[];
    reactions: Record<string, number>;
    added: number;
    added_by_status: AddedByStatus;
    playtime: number;
    screenshots_count: number;
    movies_count: number;
    creators_count: number;
    achievements_count: number;
    parent_achievements_count: number;
    reddit_url: string;
    reddit_name: string;
    reddit_description: string;
    reddit_logo: string;
    reddit_count: number;
    twitch_count: number;
    youtube_count: number;
    reviews_text_count: number;
    ratings_count: number;
    suggestions_count: number;
    alternative_names: string[];
    metacritic_url: string;
    parents_count: number;
    additions_count: number;
    game_series_count: number;
    user_game: string | null;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    platforms: GamePlatform[];
    parent_platforms: ParentPlatform[];
    genres: Genre[];
    stores: GameStore[];
    tags: Tag[];
    developers: Developer[];
    publishers: Publisher[];
    esrb_rating: EsrbRating | null;
    clip: Clip | null;
}
export interface GamesResponse extends RawgApiResponse<Game> {
}
export interface GamesState extends State<Game, GameDetails> {
}
export interface GamePlatform {
    platform: Platform;
    released_at: string;
    requirements: Requirements | null;
}
export interface GameStore {
    id: number;
    store: Store;
    url: string;
}
export interface Rating {
    id: number;
    title: string;
    count: number;
    percent: number;
}
export interface MetacriticPlatform {
    metascore: number;
    url: string;
    platform: Platform;
}
export interface GameDetails extends Game {
    achievements: Achievement[];
    developers: Developer[];
    description_raw: string;
    esrb_rating: EsrbRating;
    publishers: Publisher[];
    ratings: Rating[];
    short_screenshots: Screenshot[];
    trailers: Trailer[];
    website: string;
}
export interface Achievement {
    id: number;
    name: string;
    description: string;
    image: string;
    percent: number;
}
export interface GameAddRequest {
    status: "yet" | "owned" | "beaten" | "toplay" | "dropped" | "playing";
}
//# sourceMappingURL=games.d.ts.map