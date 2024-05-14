
function flattenObject(jsonData, parent) {
  const finalObj = {};

  const generateFlatObj = (jsonData, parent) => {
    for (let key in jsonData) {
      const newParent = parent + key;
      const value = jsonData[key];   //value,array,object
      if (typeof value === "object") {
        generateFlatObj(value, newParent + "."); //recursive call for check
      } else {
        finalObj[newParent] = value;
      }
    }
  };
  generateFlatObj(jsonData, parent);
  return finalObj;
}

const jsonData = {
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
    "keyFour": {
      "keyA": true,
      "keyB": false,
      "keyC": {
        "keyCOne": "key C one value",
        "keyCTwo": "key C two value",
        "keyCThree": 1234
       // "keyCFour" : [7,8,9] //own test case
      }
    }
  }
  

const ans = flattenObject(jsonData, "");

console.log(JSON.stringify(ans, null, 2));
