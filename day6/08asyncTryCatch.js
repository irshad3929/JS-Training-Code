async function calculation(){
    try{
        const response = await fetch("https://api.com");
        const data = await response.json();
        console.log(data);
        return data;
    }catch (error){
       console.log("Error occur : ",error);
    }
}

async function handler(){
    let result = await calculation();
    console.log(result);
}

handler();