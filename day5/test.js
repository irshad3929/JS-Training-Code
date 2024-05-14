function aa(){
    console.log(this);
}
aa();

const bc = ()=> {
    console.log(this);
}
bc();