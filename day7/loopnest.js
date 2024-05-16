// Complex nested array of objects
const complexData = [
  {
    "name": "John",
    "details": {
      "age": 30,
      "address": {
        "city": "New York",
        "zipcode": "10001"
      },
      "hobbies": ["reading", "travelling"]
    }
  },
  {
    "name": "Jane",
    "details": {
      "age": 25,
      "address": {
        "city": "Chicago",
        "zipcode": "60601"
      },
      "hobbies": ["music", "sports"]
    }
  },
  {
    "name": "Mike",
    "details": {
      "age": 35,
      "address": {
        "city": "Los Angeles",
        "zipcode": "90001"
      },
      "hobbies": ["cooking", "hiking"]
    }
  }
];

// Recursive function to process nested objects and arrays
function processEntry(entry, prefix = '') {
  if (Array.isArray(entry)) {
    entry.forEach((item, index) => {
      processEntry(item, `${prefix}[${index}]`);
    });
  } else if (typeof entry === 'object' && entry !== null) {
    Object.entries(entry).forEach(([key, value]) => {
      processEntry(value, `${prefix}${prefix ? '.' : ''}${key}`);
    });
  } else {
    console.log(`${prefix}: ${entry}`);
  }
}

// Loop through the main array
complexData.forEach((obj, index) => {
  console.log(`Object ${index + 1}:`);
  processEntry(obj);
});
