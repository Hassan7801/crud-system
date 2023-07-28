var ProductNameInput = document.getElementById('ProductNameInput') ;
var ProductPriceInput = document.getElementById('ProductPriceInput');
var ProductCategoryInput = document.getElementById('ProductCategoryInput');
var ProductDescInput = document.getElementById('ProductDescInput');
var productsBox = [];


function addProduct ()
{
    var product = {
        name : ProductNameInput.value ,
        price : ProductPriceInput.value,
        category : ProductCategoryInput.value ,
        desc : ProductDescInput.value
    }
    productsBox.push(product);
  
    displayProduct();

    //clearForm();
}

function clearForm()
{
    ProductNameInput.value = "";
    ProductPriceInput.value = "";
    ProductCategoryInput.value = "";
    ProductDescInput.value = "";

}




function displayProduct()
{
 
    var data = ``;
    for ( var i=0 ; i < productsBox.length ; i++ )
    {
        data += `
        <tr>
        <td>ta</td>
        <td>955</td>
        <td>tv</td>
        <td>fgsgsf</td>
        </tr> `;

    }
    document.getElementById('tableData').innerHTML = data;
}
