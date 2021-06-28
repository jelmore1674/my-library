export function getLibrary(url) {
    return fetch(url).then((data) => data.json());
}