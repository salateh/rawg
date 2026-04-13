import { RAWG_BASE_URL } from "../index_export.js";
export class RawgApi {
    baseUrl;
    key;
    constructor(key, baseUrl = RAWG_BASE_URL) {
        this.baseUrl = baseUrl;
        this.key = key;
    }
    async default() {
        try {
            const resp = await fetch(`${this.baseUrl}games?key=${this.key}&page=1&ordering=-popularity`);
            if (!resp.ok)
                throw new Error(`HTTP error! status: ${resp.status}`);
            return resp.json();
        }
        catch (err) {
            throw new Error(err instanceof Error ? err.message : "unknown error");
        }
    }
    async games(page = 1, ordering = "popularity") {
        try {
            const resp = await fetch(`${this.baseUrl}games?key=${this.key}&page=${page}&ordering=-${ordering}`);
            if (!resp.ok)
                throw new Error(`HTTP error! status: ${resp.status}`);
            return resp.json();
        }
        catch (err) {
            throw new Error(err instanceof Error ? err.message : "unknown error");
        }
    }
    async details(id) {
        try {
            const resp = await fetch(`${this.baseUrl}games/${id}?key=${this.key}`);
            if (!resp.ok)
                throw new Error(`HTTP error! status: ${resp.status}`);
            return resp.json();
        }
        catch (err) {
            throw new Error(err instanceof Error ? err.message : "unknown error");
        }
    }
    async search(query, page = 1) {
        try {
            const resp = await fetch(`${RAWG_BASE_URL}games?key=${this.key}&page=${page}&search=${encodeURIComponent(query)}`);
            if (!resp.ok)
                throw new Error(`HTTP error! status: ${resp.status}`);
            return resp.json();
        }
        catch (err) {
            throw new Error(err instanceof Error ? err.message : "unknown error");
        }
    }
    async suggestions(query) {
        try {
            const resp = await fetch(`${RAWG_BASE_URL}games?key=${this.key}&page=1&search=${encodeURIComponent(query)}&page_size=4`);
            if (!resp.ok)
                throw new Error(`HTTP error! status: ${resp.status}`);
            return resp.json();
        }
        catch (err) {
            throw new Error(err instanceof Error ? err.message : "unknown error");
        }
    }
}
//# sourceMappingURL=abstractionApi.js.map