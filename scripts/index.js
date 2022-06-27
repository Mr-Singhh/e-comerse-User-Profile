//store the products array in localstorage as "data"
let arr = JSON.parse(localStorage.getItem("data")) || []

function addProduct(event){
    event.preventDefault()

    let form = document.querySelector("#product_form")
    

    let brand = form.product_brand.value
    let name = form.product_name.value
    let price = form.product_price.value
    let image = form.product_image.value
    
    let details = new makeProd(brand,name,price,image)

    arr.push(details);
    localStorage.setItem("data",JSON.stringify(arr))
    console.log(arr)
}

function makeProd(a,b,c,d)
{   //console.log(a,b,c,d)
   this.brand = a;
   this.name = b;
   this.price = c;
   this.image = d;
}