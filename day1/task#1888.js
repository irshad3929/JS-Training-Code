
function assertObjectsEqual(actual, expect, message){
    const actualString = JSON.stringify(actual);   //object into JSON string
    const expectString = JSON.stringify(expect);

    if(actualString === expectString){
        console.log("Passed")
    }else{
        console.log(`Failed Expected ${expectString}, but go ${actualString}`)
    }
}


//test case
var expected1 = { foo: 5, bar: 6 };
var actual1 = { foo: 5, bar: 6 };
assertObjectsEqual(actual1, expected1, 'detects that two objects are equal');

var expected2 = { foo: 6, bar: 5 };
var actual2 = { foo: 5, bar: 6 };
assertObjectsEqual(actual2, expected2, 'detects that two objects are equal');