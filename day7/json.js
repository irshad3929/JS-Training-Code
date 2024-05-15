/**
 * Limitations of JSON
 * 
    Limited Data Types: JSON does not support all JavaScript data types, such as functions, dates, undefined, and more.
   
     No Comments: JSON does not allow comments, which can be a drawback for configuration files that benefit from documentation.
 */

//1- JSON.parse() :- it convert javascript string into JSON object

const jsonString = `{
    "name":"irshad",
    "age":26,
    "city":"gorakhpur"
}`

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

//2- JSON.stringify() :- JavaScript object into a JSON string

const obj = {
    fruit:"banana",
    animal:"lion",
    legs:2
};

const jString = JSON.stringify(obj);
console.log(jString);

/**
 * 3. How can you handle nested JSON objects?
Question: How do you access values within a nested JSON object?

Answer: Use dot notation or bracket notation. (first parse the json object using JSON.parse())
 */
const jsonPerson = `{
    "name":"irshad",
    "age" : 27,
    "address": {
        "city":"gkp",
        "zip":274402
    }
}`
const jsonParse = JSON.parse(jsonPerson);
console.log(jsonParse);

console.log(jsonParse.address.city);
console.log(jsonParse["address"]["zip"]);

/**
 * 4. How do you update values in a JSON object?
Question: How can you update a value in a JSON object and convert it back to a JSON string?

Answer: Convert the JSON string to an object, update the value, then convert it back to a string.
 */

jsonParse.name="IP";
jsonParse.address.city="delhi";
console.log(jsonParse.name);
console.log(jsonParse);

/**
 * 5. How can you handle JSON arrays?
Question: How do you parse and access elements in a JSON array?

Answer: Use JSON.parse() to parse the JSON string and access elements using array indexing.
 */
const jsonFruit = `["apple","banana","grapes"]`;

const jsonObj = JSON.parse(jsonFruit);

console.log(jsonObj[0]);
console.log(jsonObj[1]);
console.log(jsonObj[2]);

/**
 * 6. How do you add a new property to a JSON object?
Question: How can you add a new property to a JavaScript object derived from JSON and convert it back to a JSON string?

Answer: Convert the JSON string to an object, add the property, then convert it back to a string.
 */

let str2 = `{"name":"vishal"}`;

let str3 = JSON.parse(str2);

str3.age = 25;
str2 = JSON.stringify(str3);

console.log(str2);

//delete property :- delete keyword used
delete str3.age;
console.log(str3);

/**
 * 10. How do you pretty-print JSON?
Question: How can you pretty-print a JSON string for better readability?

Answer: Use JSON.stringify with additional arguments for indentation.
 */

const jsObject = { name: "Alice", age: 25, address: { city: "Wonderland", zip: "12345" } };
const jsonStringg = JSON.stringify(jsObject, null, 2);

console.log(jsonStringg);
// Output:
// {
//   "name": "Alice",
//   "age": 25,
//   "address": {
//     "city": "Wonderland",
//     "zip": "12345"
//   }
// }


