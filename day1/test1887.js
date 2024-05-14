function generateQueryString(object, url) {
    let queryString = '';

    for (const key in object) {
        const value = object[key].replace(/ /g, '');
        queryString += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
    }

    queryString = queryString.slice(0, -1); // Remove the trailing "&"

    return `${url}?${queryString}`;
}


const inputObject = {
    keyOne: "value One",
    keyTwo: "value Two",
    keyThree: "value Three",
};

const url = "https://localhost:400";

console.log(generateQueryString(inputObject, url));
