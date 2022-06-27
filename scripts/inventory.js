var detailsData = JSON.parse(localStorage.getItem("data"))
//console.log(detailsData)
// var contAiner = document.querySelector("#products_data");
detailsData.map(function(el,i){
    //console.log(el.brand_name)
    var div = document.createElement("div");
    // div.setAttribute("id", "details");
  var img = document.createElement("img");
  img.src=el.image;
  var h4 = document.createElement("h5");
  h4.innerText= el.brand;
  var h5 = document.createElement("h5");
  h5.innerText= el.name;
  var  h6 = document.createElement("h6");
  h6.innerText = el.price;
  var btn1 = document.createElement("button");
  btn1.innerText="Remove"
  btn1.setAttribute("id","remove_product")
  btn1.addEventListener("click", function(){
       removeFn(el,i);
  })
  div.append(img,h4,h5,h6,btn1)
  document.querySelector("#products_data").append(div)

})
function removeFn(el,i)
{
    // console.log("I am in remove section")
    detailsData.splice(i,1);
   // console.log(detailsData)
   localStorage.setItem("data",JSON.stringify(detailsData))
  window.location.reload();
}