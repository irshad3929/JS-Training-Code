class Test{
    constructor(){
        console.log("hello test");
    }

    dance(){
        console.log("i am dancing");
    }
}

class SubTest extends Test{
    constructor(){
        super();
        super.dance();
    }
}

let res = new SubTest();