const jsonData = [
    {
      "batch_id": "123",
      "name": "Tony",
      "contact": "9872276210"
    },
    {
      "batch_id": "231",
      "name": "Steve",
      "contact": "7876543210"
    },
    {
      "batch_id": "123",
      "name": "Bruce",
      "contact": "6776543210"
    },
    {
      "batch_id": "321",
      "name": "Clint",
      "contact": "8954643210"
    },
    {
      "batch_id": "123",
      "name": "Peter",
      "contact": "7666543210"
    },
    {
      "batch_id": "231",
      "name": "Phil",
      "contact": "8896543210"
    },
    {
      "batch_id": "321",
      "name": "Nick",
      "contact": "9876521210"
    }
  ];
  
  const groupedData = {};
  for (const item of jsonData) {
    if (!groupedData[item.batch_id]) {
      groupedData[item.batch_id] = [];
    }
    groupedData[item.batch_id].push({ name: item.name, contact: item.contact });
  }
  
  const result = Object.keys(groupedData).map(key => ({ [key]: groupedData[key] }));


  
 console.log(JSON.stringify(result, null, 2));
  