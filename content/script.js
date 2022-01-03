 var  selectedtab=0;
 /*DOCUMENT READY FUNCTION*/
 document.addEventListener( 'DOMContentLoaded', function() {
  /*Lists menu items dynamically from JSON file (Need Live Server)*/
  getMenu();
  /*Lists products dynamically from JSON file (Need Live Server)*/
  getProducts();
  /*Add to cart pop-up close button, onClick Event (closeAlert)*/
  for (let i = 0; i < document.getElementsByClassName("alert-close").length; i++) {
    document.getElementsByClassName("alert-close")[i].addEventListener("click", closeAlert);
  }
  /*Setting the color of arrows in the boundaries of the horizontal scrolling.*/
  var scrollElement = document.getElementsByClassName("box-products")[0];
  scrollElement.addEventListener('scroll', e=>{
    e.preventDefault();
    document.getElementsByClassName("box-products")[0].className="box-products";
    var scrollMax=scrollElement.scrollWidth - scrollElement.clientWidth;
    if (scrollElement.scrollLeft==0) {
      document.getElementById("leftarrow").className="prev";
    }
    else if(scrollElement.scrollLeft>0){
      document.getElementById("leftarrow").className="prev arrowactive";
    }
    if(scrollElement.scrollLeft>=scrollMax){
      document.getElementById("rightarrow").className="next";
    }
    else{
      document.getElementById("rightarrow").className="next arrowactive";
    }
  });

  /*Grab to Scroll*/
    let pos = {left: 0, x: 0};

    const mouseDownHandler = function (e) {
        pos = {
            left: scrollElement.scrollLeft,
            // Get the current mouse position
            x: e.clientX,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;

        // Scroll the element
        scrollElement.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    scrollElement.addEventListener('mousedown', mouseDownHandler);
});
function addToCart(){
  document.getElementById('alertbox1').className="addtocart-alert alert-active";
}
function closeAlert(){
  document.getElementById('alertbox1').className="addtocart-alert";
}
function changeTab(i){
  /*Selected Category*/
  selectedtab=i;
  /*Clearing products of previous category from the page*/
  clearProducts();
  /*Getting products of current category to the page*/
  getProducts();
  /*Setting the style of selected menu item*/
  for (let j = 0; j < document.getElementsByClassName("menu-active").length; j++) {
    document.getElementsByClassName("menu-active")[j].className="menu-inactive";
  }
  document.getElementsByClassName("menu-inactive")[i].className="menu-active";
}
function getProducts(){
    /*Connecting Json File*/
    var data=fetch("content/product-list.json").then(response=>response.json()).then(database=>{
    var degisken=database.responses[0][0].params.recommendedProducts[selectedtab];
    
    /*Getting each product in selected category*/
    for (let i = 0; i < Object.values(degisken)[0].length; i++) {
      
      /*Creating HTML components*/
      var item1=document.createElement("div");
      item1.className="product-image";
      item1.innerHTML="<img loading='lazy' src='"+Object.values(degisken)[0][i].image+"' width='100%' draggable='false'>";
      var item2=document.createElement("div");
      item2.className="product-title";
      item2.innerHTML=Object.values(degisken)[0][i].name;
      var item3=document.createElement("div");
      item3.className="product-price";
      item3.innerHTML=Object.values(degisken)[0][i].priceText;
      var item4=document.createElement("div");
      item4.className="product-shipping";
      /*Shipping fee If Loop*/  
      if(Object.values(degisken)[0][i].params.shippingFee=='FREE'){
        item4.innerHTML="<i class='fas fa-truck'></i> Ücretsiz Kargo";
      }   
      /*Creating HTML components*/
      var item5=document.createElement("div");
      item5.className="product-addtocart";
      item5.setAttribute("onclick","addToCart()");
      item5.innerHTML="Sepete Ekle";
      var productcontainer=document.createElement("div");
      /*Creating parent component*/
      productcontainer.className="product-container";
      productcontainer.appendChild(item1);
      productcontainer.appendChild(item2);
      productcontainer.appendChild(item3);
      productcontainer.appendChild(item4);
      productcontainer.appendChild(item5);
      /*Adding all components to main page*/
      document.getElementById('products').appendChild(productcontainer);
    }});
}
function clearProducts(){
      document.getElementById('products').innerHTML="";
}
function getMenu(){
  /*Json Verisi Çağırılıyor*/
  var data=fetch("content/product-list.json").then(response=>response.json()).then(database=>{
  /*Kategori Menüsü*/
    for (let i = 0; i < 6; i++) {
  item1=document.createElement("div");
  item1.className="menu-text";
  var editname= database.responses[0][0].params.userCategories[i].split(' > ');
  item1.innerHTML=editname[editname.length-1];
  item2=document.createElement("div");
  item2.className="menu-tab";
  item3=document.createElement("li");
  item3.className="menu-inactive";
  item3.setAttribute("onclick","changeTab("+i+")");
  item3.appendChild(item2);
  item3.appendChild(item1);
  var categories= document.getElementById('categories');
  categories.appendChild(item3);
  }
  document.getElementsByClassName('menu-inactive')[0].className="menu-active";
  });
}
function goLeft(){
  document.getElementsByClassName("box-products")[0].className="box-products smoothscroll";
  var outerboxwidth=document.getElementsByClassName("box-products")[0].offsetWidth;
  document.getElementsByClassName("box-products")[0].scrollLeft-=outerboxwidth;
}
function goRight(){
  document.getElementsByClassName("box-products")[0].className="box-products smoothscroll";
  var outerboxwidth=document.getElementsByClassName("box-products")[0].offsetWidth;
  document.getElementsByClassName("box-products")[0].scrollLeft+=outerboxwidth;
}