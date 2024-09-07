/* Function for changing images in full or large screen devices */
function changeImage(n){
    var thumbnail = document.getElementsByClassName("thumbnail_container");
    for (i = 0; i < thumbnail.length; i++) {
        thumbnail[i].className = thumbnail[i].className.replace(" selected_thumbnail", "");
      }
    thumbnail[n-1].className += " selected_thumbnail";
    switch(n){
        case 1:
            document.getElementById("display_image").src='images/image-product-1.jpg';
            break;
        case 2:
            document.getElementById("display_image").src='images/image-product-2.jpg';
            break;
        case 3:
            document.getElementById("display_image").src='images/image-product-3.jpg';
            break;
        case 4:
            document.getElementById("display_image").src='images/image-product-4.jpg';
            break;
        default:
            document.getElementById("display_image").src='images/image-product-1.jpg';
    }
    
}

/*This part is where the carosel for small screen devices was created*/
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slidePosition-1].style.display = "block";
} 

/* This part is for the quantity of product button */
var quantity = 0;
const max_quantity = 10;
const min_quantity = 0
var product_quantity = document.getElementById("product_quantity");
function increaseQuantity(){
  if(quantity!==max_quantity){
    quantity = quantity+1;
    product_quantity.innerHTML = quantity;
  }
}

function decreaseQuantity(){
  if(quantity!==min_quantity){
    quantity = quantity-1;
    product_quantity.innerHTML = quantity;
  }
}

/*For the side bar cancel button */

function hidesidebar(){
  var sidebar = document.getElementById("sidebar");
  sidebar.style.display="none";
  document.body.style.position="";
}

function showsidebar(){
  var sidebar = document.getElementById("sidebar");
  sidebar.style.display = "block";
  document.body.style.position="fixed";
}

/* Function for placing order */
var Orderplaced = 0;
function placeOrder(){
  var currentOrder = parseInt(document.getElementById("product_quantity").textContent);
  if (currentOrder != 0){
    Orderplaced = parseInt(Orderplaced) + parseInt(currentOrder);
    document.getElementById("order_number").innerHTML = Orderplaced;
    document.getElementById("amount_of_product").innerHTML = Orderplaced;
    document.getElementById("total_cost").innerHTML = parseFloat(125.00 * Orderplaced).toFixed(2);
    checkQuantity();
  }
}

/*This function checks if the amount is set otherwise it will show Your cart is empty. */
function checkQuantity(){
  if (Orderplaced<1){
    document.getElementById("inner_dialog").style.display = "none";
    document.getElementById("checkout_btn").style.display = "none";
    document.getElementById("empty_notice").style.display = "block";
  }else{
    document.getElementById("inner_dialog").style.display = "flex";
    document.getElementById("checkout_btn").style.display = "block";
    document.getElementById("empty_notice").style.display = "none";
  }
}

var showdialog = false;
/*function to show / hide the checkout dialog */
function toggle_dialog(){
  checkQuantity();
  var checkout_dialog = document.getElementById("checkout_dialog");
  if (showdialog==false){
    checkout_dialog.style.display = "block";
    showdialog = true;
  }
  else{
    checkout_dialog.style.display = "none";
    showdialog = false;
  }
}

/*delete order function */
function delete_order(){
  Orderplaced = parseInt(0);
  checkQuantity();
  document.getElementById("order_number").innerHTML = "";
  document.getElementById("product_quantity").innerHTML = 0;
}
