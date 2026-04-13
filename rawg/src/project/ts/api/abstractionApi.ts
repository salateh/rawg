import { RAWG_BASE_URL } from "../index_export.js";
import type { GameSortField } from "../types/index.js";

export interface RawgApi_endpoint<Response, Details> {
  default(): Promise<Response>;
  games(): Promise<Response>;
  details(id: number): Promise<Details>;
  search(query: string, page: number): Promise<Response>;
  suggestions(query: string): Promise<Response>;
}

export class RawgApi<Response, Details> implements RawgApi_endpoint<
  Response,
  Details
> {
  private baseUrl;
  private key;

  constructor(key: string, baseUrl: string = RAWG_BASE_URL) {
    this.baseUrl = baseUrl;
    this.key = key;
  }

  async default(): Promise<Response> {
    try {
      const resp = await fetch(
        `${this.baseUrl}games?key=${this.key}&page=1&ordering=-popularity`,
      );

      if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
      return resp.json();
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : "unknown error");
    }
  }

  async games(
    page: number = 1,
    ordering: GameSortField = "popularity",
  ): Promise<Response> {
    try {
      const resp = await fetch(
        `${this.baseUrl}games?key=${this.key}&page=${page}&ordering=-${ordering}`,
      );

      if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
      return resp.json();
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : "unknown error");
    }
  }

  async details(id: number): Promise<Details> {
    try {
      const resp = await fetch(`${this.baseUrl}games/${id}?key=${this.key}`);
      if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
      return resp.json();
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : "unknown error");
    }
  }
  async search(query: string, page: number = 1): Promise<Response> {
    try {
      const resp = await fetch(
        `${RAWG_BASE_URL}games?key=${this.key}&page=${page}&search=${encodeURIComponent(query)}`,
      );

      if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
      return resp.json();
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : "unknown error");
    }
  }
   async suggestions(query: string): Promise<Response> {
    try {
      const resp = await fetch(
        `${RAWG_BASE_URL}games?key=${this.key}&page=1&search=${encodeURIComponent(query)}&page_size=4`,
      );

      if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
      return resp.json();
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : "unknown error");
    }
  }
}
