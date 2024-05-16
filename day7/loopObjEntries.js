//sample object

const obj = {
  name: "irshad",
  age: 26,
  city: "delhi",
};

Object.entries(obj).forEach(([key, value]) => {
  //console.log(key,value);
});

//nested obj

const nestedObj = {
  person: {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      country: "USA",
    },
  },
  company: {
    name: "ABC Inc.",
    location: "San Francisco",
  },
};

function nestingLoop(obj, prefix = "") {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "object") {
      nestingLoop(value, prefix + key + ".");    //value:- nested whole object key :- city,country,location,name
    } else {
      console.log(prefix + key + " : " + value);
    }
  });
}
nestingLoop(nestedObj);
