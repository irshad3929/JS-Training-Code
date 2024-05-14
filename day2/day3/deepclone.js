var obj = {
  name: "irshad",
  age: 27,
  social: {
    facebook: {
      acc1: "some1@gmail.com",
      acc2: "some2@gmail.com",
    },
    twitter: {
      free: {
        acc1: "twit1@gmail.com",
      },
      paid: {
        acc2: "twit2@gmail.com",
      },
    },
  },
};

var obj2 = {...obj};

// console.log(obj);
// console.log(obj2);

//obj2.social.facebook.acc1 = "changed";

// console.log(obj.social.facebook.acc1); //changed
// console.log(obj2.social.facebook.acc1); //changed  this is called shallow copied

//  console.log(obj);
//  console.log(obj2);

//we create a deep copy

//method 1

//  var obj2 = JSON.parse(JSON.stringify(obj));
    

//   obj2.social.facebook.acc1 = "changed";

//      console.log(obj);
//      console.log(obj2);


//method 2

// function makeDeepCopy(obj) {
//   if (typeof obj !== "object" || obj == null) {
//     return obj;
//   }

//   var copiedval = Array.isArray(obj) ? [] : {};
//   var keys = Object.keys(obj);  //array

//   for (var i = 0; i < keys.length; i++) {
//     copiedval[keys[i]] = makeDeepCopy(obj[keys[i]]); //recursive call
//   }
//   return copiedval;
// }

// const result = makeDeepCopy(userInfo);
// console.log(result);
