/**
 * 
 * @param {*} url 
 * @returns 
 * resuable nested api call
 */

function fetchData(url){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`${url}`);
        }, 2000);
    })
}

fetchData("https//api.com").then((data1)=>{
    console.log(data1);
    return fetchData("https//google/api");
})

.then((data2)=>{
    console.log(data2);

    return fetchData("https/api/facbook");
})

.then((data3)=>{
    console.log(data3);
})

.catch((error)=>{
    console.log(error);
})