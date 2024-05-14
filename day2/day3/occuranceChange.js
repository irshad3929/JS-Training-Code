let obj = {
  name: "raj",
  roll: 987,
  id: {
    name: "raj",
  },
  class: {
    name: "raj",
    67: {
      name: "raj",
    },
  },
};

//change all occurance of "raj" to "abhishek"

let changeName = (obj) => {
  for (let i in obj) {
    if (obj[i] == "raj") {
      obj[i] = "abhishek";
    } else {
      changeName(obj[i]);
    }
  }
};

changeName(obj);
console.log(obj);
