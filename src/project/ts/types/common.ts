// ==================== ОСНОВНЫЕ ТИПЫ ====================

import type { GameSort, SortOrder, GameSortField } from "./index.js";

export interface RawgApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  ordering: GameSort;
  results: T[];
}

export interface Dates {
  tba: boolean;
  coming_soon: boolean;
  exclusive: boolean;
  exact: boolean;
  human: string;
  three_months: string;
  year_month: string;
  month: string;
  day: string;
  date: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
  platform?: Platform;
  released_at?: string;
  requirements?: Requirements;
}

export interface Requirements {
  minimum: string;
  recommended: string;
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
  name_en: string;
  name_ru: string;
}

export interface ParentPlatform {
  platform: Platform;
}

export interface Screenshot {
  id: number;
  image: string;
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

export interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

export interface State<G, D> {
  games: G[];
  isLoading: boolean;
  error: string | null;
  selectedGame: D | null;
  searchGames: G[] | null;
  count: number;
  countAll: number;
  page: number;
  next: string | null;
  previous: string | null;
  gameSort: GameSortField;
  backgroundImage: string | null;
}
