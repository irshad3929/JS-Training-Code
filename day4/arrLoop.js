//loop in array - for, forEach, for-of

let cars = ["bmw","ferrari","toyata","gWagon"]

for(let i = 0; i<cars.length; i++){   //for loop
    console.log(cars[i]);
}

cars.forEach((item)=>{        //forEach with arrow
    console.log(item);
})

cars.forEach(function(element){  //forEach
    console.log(element);
})

for(let car of cars){   //for-of
    console.log(car);
}

for(let index in cars){
    //console.log(index);
    console.log(cars[index]);
}

