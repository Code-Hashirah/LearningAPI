// if(document.getElementById('find').innerHTML=""){
   fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res =>{
   //  console.log(res.products);
let theProducts=res.products;

 // .then(console.log);
 for(let i=0;i<theProducts.length; i++){
    let prodId=res.products[i].id;
    let prodTitle=res.products[i].title;
    let prodPrice=res.products[i].price;
    let description=res.products[i].description;
    let discount=res.products[i].discountPercentage;
    let rating=res.products[i].rating;
    let brand=res.products[i].brand;
    let cartegory=res.products[i].category;
    let thumbnail=res.products[i].thumbnail;
   //  let images=res.products[i].images
   //  for (k=0; k<5;k++){
   //    let pictures=document.createElement('img');
   //    pictures.src=images;
   //    pictures.setAttribute('class','pictures');
   //    console.log(pictures)
      
   //  }

    let mainDiv=document.getElementById('items')
 let pTag= document.createElement('p');
 let pTag1= document.createElement('p');
 let pTag2= document.createElement('p');
 let pTag3= document.createElement('p');
 let pTag4= document.createElement('p');
 let pTag5= document.createElement('p');
 let pTag6= document.createElement('p');
 let pTag7= document.createElement('p');
 pTag.innerHTML="Product number "+prodId;
 pTag1.innerHTML="Product Name "+prodTitle;
 pTag2.innerHTML="Price  $"+prodPrice;
 pTag3.innerHTML="Description: "+description;
 pTag4.innerHTML="Discount "+discount+"%"
 pTag5.innerHTML="Rating: "+rating;
 pTag6.innerHTML=brand;
 pTag7.innerHTML="Brand: "+cartegory;
 let div1=document.createElement('div');
 let img=document.createElement('img')

img.setAttribute('class', 'images')
div1.setAttribute('class','one col-12 col-md-4 col-sm-12')
 pTag.setAttribute('class','id')
 pTag1.setAttribute('class','title')
 pTag2.setAttribute('class','price')
 pTag3.setAttribute('class','description')
 pTag4.setAttribute('class','discount')
 pTag5.setAttribute('class','rating')
 pTag6.setAttribute('class','brand')
 pTag7.setAttribute('class','cartegory')
 mainDiv.setAttribute('class','row text-bg-light mx-3 container-fluid')
 div1.appendChild(pTag)
img.src=thumbnail;
 div1.append(pTag1)
 div1.append(pTag2)
 div1.append(pTag3)
 div1.append(pTag4)
 div1.append(pTag5)
 div1.append(pTag6)
 div1.append(pTag7)
 div1.append(img)

 mainDiv.appendChild(div1)
 img.setAttribute('alt','Phones')

   //  console.log(prodId);
   //  console.log(prodTitle);
   //  console.log(prodPrice);
 }
})
function showAndHide(){
   let mainDiv=document.getElementById('items');
   mainDiv.style.display="none";
   let searchDiv=document.getElementById('searchItems');
   searchDiv.style.display="flex";
  
}
function restoreIt(){
   let searchDiv=document.getElementById('searchItems');
      searchDiv.style.display="none";
      let mainDiv=document.getElementById('items');
      mainDiv.style.display="flex";
}

// }
// else{}
 function search(){
   let Title

   Title=document.getElementById('find').value;    
   fetch(`https://dummyjson.com/products/search?q=${Title}`)
       .then(res => res.json())
         //  .then(console.log);
      .then(res=>{
         showAndHide();
         // let theProducts=[]
        let   theProducts=res.products;
            // console.log(res.products.title)
            let searchDiv=document.getElementById('searchItems')
            
         for(let i=0;i<theProducts.length; i++){
            let prodId=res.products[i].id;
            let prodTitle=res.products[i].title;
            let prodPrice=res.products[i].price;
            let description=res.products[i].description;
            let discount=res.products[i].discountPercentage;
            let rating=res.products[i].rating;
            let brand=res.products[i].brand;
            let cartegory=res.products[i].category;
            let thumbnail=res.products[i].thumbnail;
            // console.log(prodTitle)
        
         // let mainDiv=document.getElementById('items')
         let pTag= document.createElement('p');
         let pTag1= document.createElement('p');
         let pTag2= document.createElement('p');
         let pTag3= document.createElement('p');
         let pTag4= document.createElement('p');
         let pTag5= document.createElement('p');
         let pTag6= document.createElement('p');
         let pTag7= document.createElement('p');
         let testP=document.createElement('p');
         pTag.innerHTML="Product number "+prodId;
         pTag1.innerHTML="Product Name "+prodTitle;
         pTag2.innerHTML="Price  $"+prodPrice;
         pTag3.innerHTML="Description: "+description;
         pTag4.innerHTML="Discount "+discount+"%"
         pTag5.innerHTML="Rating: "+rating;
         pTag6.innerHTML=brand;
         pTag7.innerHTML="Brand: "+cartegory;
         let div0=document.createElement('div');
         let img=document.createElement('img')
        img.setAttribute('class', 'images')
        div0.setAttribute('class','ones col-12 col-md-4 col-sm-12')
         pTag.setAttribute('class','id')
         pTag1.setAttribute('class','title')
         pTag2.setAttribute('class','price')
         pTag3.setAttribute('class','description')
         pTag4.setAttribute('class','discount')
         pTag5.setAttribute('class','rating')
         pTag6.setAttribute('class','brand')
         pTag7.setAttribute('class','cartegory')
         testP.setAttribute('class','id')
         searchDiv.setAttribute('class','row text-bg-light mx-3 container-fluid')
         div0.appendChild(pTag)
        img.src=thumbnail;
      //   console.log(prodTitle)
         div0.append(pTag1)
         div0.append(pTag2)
         div0.append(pTag3)
         div0.append(pTag4)
         div0.append(pTag5)
         div0.append(pTag6)
         div0.append(pTag7)
         div0.append(img)
         searchDiv.appendChild(div0)
         img.setAttribute('alt','Phones')
         // console.log(prodId);
         console.log(prodTitle);
         // console.log(prodPrice);
         // theProducts.length=0;      
         }
                       
            })
         
             }