function hello(){
    const vegtables =["onion","carrot","cabbage","potato"]
    const [x,y,z,a]= vegtables
    const result=`${x}` 
    document.getElementById("three").textContent=result;
}

function word(){
    const input = document.getElementById("hii").value;
    document.getElementById("output").textContent = input;
}

function hello(){
const things={product:"bucket", type:"plastic",
     price:25 }
const {product, type, price}=things;
const result=`${type}`
document.getElementById("objects").textContent =result;

}