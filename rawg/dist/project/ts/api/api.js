export async function fetchPopularMovies(url) {
    const resp = await fetch(url);
    if (!resp.ok)
        throw new Error(resp.statusText);
    return await resp.json();
}
//# sourceMappingURL=api.js.map