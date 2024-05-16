const jsonObj = {
  name: "ip",
  city: "gkp",
  pin: 274402,
};

for (let key in jsonObj) {
  //console.log(`${key} -> ${jsonObj[key]}` );
}

//nested loop
const nestedJson = {
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

function loopNestedJson(nestedObj, prefix = " ") {
  for (let key in nestedObj) {
    //console.log(key);
    if (typeof nestedObj[key] === "object") {
      loopNestedJson(nestedObj[key], prefix + key + ".");
    } else {
      console.log(prefix + key + " : " + nestedObj[key]);
    }
  }
}

loopNestedJson(nestedJson);
