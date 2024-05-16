const arrayOfObjects = [
    {
      "name": "John",
      "age": 30,
      "city": "New York"
    },
    {
      "name": "Jane",
      "age": 25,
      "city": "Chicago"
    },
    {
      "name": "Mike",
      "age": 35,
      "city": "Los Angeles"
    }
  ];

  arrayOfObjects.forEach((obj,index)=>{
    //console.log(index);
    //console.log(obj)
    console.log(`Object ${index + 1}`);
    Object.entries(obj).forEach(([key,val])=>{
        //console.log(val);
        //console.log(key);
        console.log(`${key}-> ${val}`)

    })
  })