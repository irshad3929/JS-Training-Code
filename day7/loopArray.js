/**
 * Looping Through JSON Arrays
 * JSON arrays can be iterated over using various looping constructs such as for, for...of, forEach, and more
 */

const jsonArray = `[
    {"name":"irshad", "age":26},
    {"name":"vishal", "age":25},
    {"name":"ankit", "age":24}

]`

const jsonParse = JSON.parse(jsonArray);

//for loop
for(let i = 0; i < jsonParse.length; i++){
   console.log(`Name : ${jsonParse[i].name}, Age : ${jsonParse[i].age} `);
}

//for of loop
console.log("--------------------------");

for(let item of jsonParse){
    console.log(`Name : ${item.name} Age : ${item.age}`);
}

//for-each
console.log("----------------------");
jsonParse.forEach(element => {
    console.log(`Name : ${element.name} Age : ${element.age}`)
});