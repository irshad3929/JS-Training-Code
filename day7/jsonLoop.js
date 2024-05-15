const jsonString = `
{
  "name": "irshad",
  "age": 25,
  "address": {
    "street": "123 Main St",
    "city": "Delhi",
    "zipcode": {
      "primary": "12345",
      "secondary": "67890"
    }
  },
  "courses": ["Math", "Science"]
}
`;

const jsObject = JSON.parse(jsonString);

function printNestedData(obj, indent = 0) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]; //check value is object or array or normal string or number
      const padding = ' '.repeat(indent);
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        console.log(`${padding}${key}:`);
        printNestedData(value, indent + 2); // Recursively print nested objects
      } else {
        console.log(`${padding}${key}: ${value}`);
      }
    }
  }
}

printNestedData(jsObject);

