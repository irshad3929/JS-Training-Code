function generateQueryString(object, url) {
    const keys = Object.keys(object);
    const values = Object.values(object);

    let queryString = '';

    for (let i = 0; i < keys.length; i++) {
        const key = encodeURIComponent(keys[i]);
        const value = encodeURIComponent(values[i]);
        queryString += key + '=' + value;

        if (i !== keys.length - 1) {
            queryString += '&';
        }
    }

    return `${url}?${queryString}`;
}

// Example usage:
const inputObject = {
    keyOne: "value One",
    keyTwo: "value Two",
    keyThree: "value Three",
};

const url = "https://localhost:400";

console.log(generateQueryString(inputObject, url));
