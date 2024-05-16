const arrayOfObj = [
    {id:1 , name:"A"},
    {id:2 , name:"B"},
    {id:3 , name:"C"},
    {id:4 , name:"D"},
    {id:5 , name:"E"},
    {id:6 , name:"F"},
    {id:7 , name:"G"},
    {id:8 , name:"H"},
    {id:9 , name:"I"},
    {id:10 , name:"J"}
];

const additionalProp = {
   6:{dob:2020, address:"delhi",phone:12345},
   7:{dob:2021, address:"gkp",phone:45867},
   8:{dob:2022, address:"lucknow",phone:665874},
   9:{dob:2023, address:"agra",phone:185254},
   10:{dob:2024, address:"mathura",phone:198562}
}

const addressList =['delhi','gorkphadsf','adfasdfsd','khalilabad','skn']

const arrayOfObjectWithAdditional = arrayOfObj.map(item=>{
    return {
        ...item,
        ... (item.id>=5 && {dob:2020, address:"delhi",phone:12345})
    }
})

console.log(arrayOfObjectWithAdditional);



























// for(let key of arrayOfObj){
//     //console.log(key)
// }

// for(let i = 0 ; i<arrayOfObj.length ;i++){
//     if(i<5){
//         console.log(arrayOfObj[i].id);
//     }
// }





