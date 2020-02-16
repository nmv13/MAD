export function qs(query) {
    return document.querySelector(query);
}

export function qsa(query) {
    return document.querySelectorAll(query);
}

export function readFromLS(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function writeToLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function removeFromLS(key, data) {
    localStorage.removeItem(key, JSON.stringify(data));
}

export function bindTouch(selector, callback) {
    qs(selector).addEventListener("touchend", (e) => {
        e.preventDefault(); // don't do what you normally do, do this instead
        callback();
    });
    qs(selector).addEventListener("click", (e) => {
        callback();
    });
}


