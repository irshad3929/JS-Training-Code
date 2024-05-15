// const promise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let success = true;
//         if(!success){
//             reject("data rejected")
//         }else{
//             resolve("data succesfull")
//         }
        
//     }, 2000);

// })
// promise.then((data)=>{
//     console.log(data);
// })


//for finally
function testFinally(){
   return new Promise((resolve,reject)=>{
    try {
         let result= true;
         if(!result){
            console.log("error response");
         }else{
            resolve("result sucessfully passed")
         }
        
    } catch (error) {
        console.log("error occured",error)
    }finally{
       console.log("this is print always");
    }
   })
}
testFinally().then((ans)=>{
    console.log(ans);
})

