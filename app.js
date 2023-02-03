fetch('https://dummyjson.com/products?limit=10')
.then(res => res.json())
.then(res =>{
    console.log(res.products);
let theProducts=res.products;

 // .then(console.log);
 for(let i=0;i<theProducts.length; i++){
    let prodId=res.products[i].id;
    let prodTitle=res.products[i].title;
    let prodPrice=res.products[i].price;
    // document.querySelector('')
    let mainDiv=document.getElementById('items')
 let pTag= document.createElement('p');
 let pTag1= document.createElement('p');
 let pTag2= document.createElement('p');
 pTag.innerHTML=prodId;
 pTag1.innerHTML=prodTitle;
 pTag2.innerHTML="$"+prodPrice;
 let div1=document.createElement('div');
//  let div2=document.getElementById('two');
//  let div3=document.getElementById('three')
div1.setAttribute('class','one')
 pTag.setAttribute('class','id')
 pTag1.setAttribute('class','title')
 pTag2.setAttribute('class','price')

 div1.appendChild(pTag)
//  div2.appendChild(pTag1)
//  div3.appendChild(pTag2)
 div1.append(pTag1)
 div1.append(pTag2)
 mainDiv.appendChild(div1)

    console.log(prodId);
    console.log(prodTitle);
    console.log(prodPrice);
 }
})
             