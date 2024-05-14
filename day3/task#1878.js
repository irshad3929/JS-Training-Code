function convertData(jsonData) {
  const groupedData = {};

  for (const item of jsonData) {
    const { batch_id, ...rest } = item;
    if (!groupedData[batch_id]) {
      groupedData[batch_id] = [];
    }
    groupedData[batch_id].push(rest);
  }

  const result = Object.keys(groupedData).map((key) => ({
    [key]: groupedData[key],
  }));
  return result;
}

// Example usage:
const jsonData = [
  {
    batch_id: "123",
    name: "Tony",
    contact: "9872276210",
  },
  {
    batch_id: "231",
    name: "Steve",
    contact: "7876543210",
  },
  {
    batch_id: "123",
    name: "Bruce",
    contact: "6776543210",
  },
  {
    batch_id: "321",
    name: "Clint",
    contact: "8954643210",
  },
  {
    batch_id: "123",
    name: "Peter",
    contact: "7666543210",
  },
  {
    batch_id: "231",
    name: "Phil",
    contact: "8896543210",
  },
  {
    batch_id: "321",
    name: "Nick",
    contact: "9876521210",
  },
];

const convertedData = convertData(jsonData);

// Print all objects
console.log(JSON.stringify(convertedData, null, 2));
