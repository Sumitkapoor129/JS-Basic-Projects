const category=document.querySelector("ul");
const products=document.querySelectorAll(".product");
const arr=Array.from(products);

category.addEventListener("click",(e)=>{
let c=e.target
console.log(c.textContent[0]);
    if(c.textContent=="All"){
        arr.forEach((ele)=>{
        ele.className="product";
    })
    }
    else{
    let arr2=arr.filter((v)=>v.getAttribute("category") ==c.textContent[0]);
    arr.forEach((ele)=>{
        ele.className="hidden";
    })
    arr2.forEach((ele)=>{
        ele.className="product"
    })

    }
}
)
