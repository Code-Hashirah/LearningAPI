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
 let img=document.createElement('img')
//  let div2=document.getElementById('two');
//  let div3=document.getElementById('three')
img.setAttribute('class', 'iphone-images w-75 h-50')
div1.setAttribute('class','one col-5')
 pTag.setAttribute('class','id')
 pTag1.setAttribute('class','title')
 pTag2.setAttribute('class','price')
 mainDiv.setAttribute('class','row text-bg-light mx-5')
 div1.appendChild(pTag)
img.src="https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275__340.jpg"
 div1.append(pTag1)
 div1.append(pTag2)
 div1.append(img)
 mainDiv.appendChild(div1)

    console.log(prodId);
    console.log(prodTitle);
    console.log(prodPrice);
 }
})
             