var productNameProduct=document.getElementById('productNameProduct');
var productPriceProduct=document.getElementById('productPriceProduct');
var productCategoryProduct=document.getElementById('productCategoryProduct');
var productDescProduct=document.getElementById('productDescProduct');
var productBox=[];

if(localStorage.getItem('products')  != null){

  productBox =JSON.parse(localStorage.getItem('products'));
  displayProduct();
}



function addProduct(){

 var product={
   name:productNameProduct.value,
   price:productPriceProduct.value,
   category:productCategoryProduct.value,
   desc:productDescProduct.value
 }
 productBox.push(product);
 localStorage.setItem('products', JSON.stringify (productBox))
//  clearBox();
  displayProduct();
}

function clearBox(){
  productNameProduct.value=""
  productPriceProduct.value=""
  productCategoryProduct.value=""
  productDescProduct.value=""

}

function displayProduct (){
   var container='';
   for (var i = 0 ; i < productBox.length; i++) {
     container += ` <tr>
     <td>${[i+1]}</td>
     <td>${productBox[i].name}</td>
     <td>${productBox[i].price}</td>
     <td>${productBox[i].category}</td>
     <td>${productBox[i].desc}</td>
     <td><button onclick="deleteProduct(${i});" class="btn btn-sm btn-outline-danger">Delete</button></td>
     <td><button class="btn btn-sm btn-outline-secondary">Update</button>
     </td>
     </tr>`;
     
   }
    document.getElementById('tableBody').innerHTML=container;
}

function deleteProduct (index){
  productBox.splice(index,1)
  localStorage.setItem('product', JSON.stringify(productBox))
  displayProduct();

}

function searchProduct(term){
   var container='';
   for (var i=0 ; i < productBox.length ; i++){

    if(productBox[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
      console.log(i);
      container += ` <tr>
     <td>${[i]}</td>
     <td>${productBox[i].name}</td>
     <td>${productBox[i].price}</td>
     <td>${productBox[i].category}</td>
     <td>${productBox[i].desc}</td>
     <td><button onclick="deleteProduct(${i});" class="btn btn-sm btn-outline-danger">Delete</button></td>
     <td><button class="btn btn-sm btn-outline-secondary">Update</button>
     </td>
     </tr>`;
    }

   }
   document.getElementById('tableBody').innerHTML=container;
}

