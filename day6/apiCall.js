//there are two method fetch 

fetch('www/api.example.com/server')
.then((response)=>{
    if(!response.ok){
        throw new Error("network cant acces your data");
    }else{
        return response.json()
    }
})

.then((data)=>{
    //json handle
    console.log(data);
})

.catch((error)=>{
    console.error(error);
})