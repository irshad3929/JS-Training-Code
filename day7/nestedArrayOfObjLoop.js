// Nested array of objects
const nestedArrayOfObjects = [
    {
      "name": "John",
      "age": 30,
      "address": {
        "city": "New York",
        "country": "USA"
      },
      "hobbies": ["reading", "traveling"]
    },
    {
      "name": "Jane",
      "age": 25,
      "address": {
        "city": "Chicago",
        "country": "USA"
      },
      "hobbies": ["dancing", "drawing"]
    },
    {
      "name": "Mike",
      "age": 35,
      "address": {
        "city": "Los Angeles",
        "country": "USA"
      },
      "hobbies": ["cycling", "hiking"]
    }
  ];
  
  // Recursive function to loop through the nested structure
  function loopThrough(obj, prefix = '') {
    if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        console.log(`${prefix}[${index}]:`);
        loopThrough(item, `${prefix}[${index}]`);
      });
    } else if (typeof obj === 'object' && obj !== null) {
      Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
          loopThrough(value, `${prefix}${key}.`);
        } else {
          console.log(`${prefix}${key}: ${value}`);
        }
      });
    } else {
      console.log(`${prefix} : ${obj} `);
    }
  } 
  nestedArrayOfObjects.forEach((obj,index)=>{
     loopThrough(obj);
  });
  