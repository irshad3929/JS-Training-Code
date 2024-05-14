// function generateQueryString(object, url) {
//     const queryString = Object.entries(object)
//         .map(([key, value]) => `${key}=${value}`)
//         .join('&');

//     return `${url}?${queryString}`;
// }

// // Example usage:
// const obj = {
//     "keyOne": "value One",
//     "keyTwo": "value Two",
//     "keyThree": "value Three",
// };

// const url = "https://localhost:400";

// console.log(generateQueryString(obj, url));



function generateQueryString(object, url) {
    let queryString = '';

    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            queryString += `${key}=${object[key]}&`;
        }
    }

    queryString = queryString.slice(0, -1); // Remove the last '&'

    return `${url}?${queryString}`;
}


const obj = {
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
};

const url = "https://localhost:400";

console.log(generateQueryString(obj, url));



