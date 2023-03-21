const cartArray=[];

function display(cartProduct){
    // console.log(cartProduct);

    const tableContainer=document.getElementById('table-container');
    tableContainer.innerHTML='';

    let=totalPrice=0;

    for(let i=0; i<cartProduct.length; i++){
        // const element=cartArray[i];

        const name=cartArray[i].productName;
        const price=cartArray[i].price;
        totalPrice=totalPrice+price;

        const tr=document.createElement('tr');
        tr.innerHTML=`
        <th>${i+1}</th>
        <td>${name}</td>
        <td>${price}</td>
        `;
        tableContainer.appendChild(tr);
    }

    const tr=document.createElement('tr');
    tr.innerHTML=`
    <th></th>
    <th>Total Price</th>
    <th>${totalPrice}</th>
    `;
    tableContainer.appendChild(tr);
}

function addToCart(element){
    // console.log(element.parentNode.parentNode.children)
    // console.log(element.parentNode.parentNode.children[0].innerText)

    const productName=element.parentNode.parentNode.children[0].innerText;
    const price=element.parentNode.parentNode.children[1].children[0].innerText;
    // console.log(productName,price)

    const productObj={
        productName:productName,
        price:parseFloat(price)
    }
    // console.log(productObj)

    cartArray.push(productObj)
    // console.log(cartArray)

    const totalProducts=document.getElementById('total-products');
    totalProducts.innerHTML=cartArray.length;

    display(cartArray);
}