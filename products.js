fetch('https://dummyjson.com/products')
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
 let img=document.createElement('img')
//  let div2=document.getElementById('two');
//  let div3=document.getElementById('three')
img.setAttribute('class', 'iphone-images w-50 h-50')
div1.setAttribute('class','one col-12 col-md-4 col-sm-12')
 pTag.setAttribute('class','id')
 pTag1.setAttribute('class','title')
 pTag2.setAttribute('class','price')
 mainDiv.setAttribute('class','row text-bg-light mx-3 container-fluid')
 div1.appendChild(pTag)
img.src="https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636__340.png"
 div1.append(pTag1)
 div1.append(pTag2)
 div1.append(img)
 mainDiv.appendChild(div1)
 img.setAttribute('alt','Phones')

    console.log(prodId);
    console.log(prodTitle);
    console.log(prodPrice);
 }
})
             