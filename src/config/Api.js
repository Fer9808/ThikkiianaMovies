const url = "https://wookie.codesubmit.io/movies"

export const ApiClient = {
    getMovies,
    getSearchMovies
}

function getMovies() {
    return fetch(url, getRequestConfig()).then(responseHandler);
}

function getSearchMovies(search) {
    return fetch(url + "?q=" + search, getRequestConfig()).then(responseHandler);
}

function getRequestConfig() {
    const headers = {
        "Authorization": "Bearer Wookie2019"
    }
    return {
        method: 'GET',
        headers: headers,
    }
}

function responseHandler(response) {
    return response.json();
}