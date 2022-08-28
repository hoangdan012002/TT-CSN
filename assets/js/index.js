


//-----------------------------------cart------------------------
var cart = new Array();
const btn = document.querySelectorAll('.product-right-item-btn')
btn.forEach((button) => {
    button.addEventListener('click', (e) => {
         var btnItem = e.target
         var productItem = btnItem.parentElement
         var productImg = productItem.querySelector('.product-right-item-avt').src;
         var productTitle = productItem.querySelector('.product-right-title').innerText;
         var productCost = productItem.querySelector('.product-right-item-cost').innerText;
        //  addCart(productTitle, productCost, productImg)
        //  addCartPay()
        var sp = new Array(productImg, productTitle, productCost)
        cart.push(sp)
        localStorage.setItem('cart', JSON.stringify(cart))
        addCartMenu()
        countSl()
        checkArrCartMenu()
    })
})






function addCartMenu() {
    var hangAddCart = JSON.parse(localStorage.getItem('cart'));
    var show="";
    for (var i = 0; i < cart.length; i++) {
        show+= '<li class="cart-product-items"><img src="'+hangAddCart[i][0]+'" alt=""><div class="product-content"><p class="product-content-title">'+hangAddCart[i][1]+'</p><span class="product-cost">'+hangAddCart[i][2]+'</span><span class="product-VND">đ</span></div><div onclick="DeleteProduct(this)" class="delete-product"><i class="fa-solid fa-xmark"></i></div></li>';
    }
    bottomCartMenu()
   document.getElementById('show-my-cart').innerHTML = show
}

function bottomCartMenu() {
   var show='<div id="btn-cart" style="display: flex; justify-content: space-between; padding: 12px;">'+
    '<button class="btn ">Xem giỏ hàng</button>'+
    '<button class="btn ">Thanh toán</button>'+
'</div>'
    document.getElementById('haha').innerHTML=show
}

function DeleteProduct(x) {
   var del = x.parentElement
   del.remove()
   var tensp =  x.parentElement.children[1].children[0].innerText
   for (var i = 0; i <cart.length; i++){
        if (cart[i][1] == tensp){
            cart.splice(i,1)
        }
   }
   countSl()
   checkArrCartMenu()
   localStorage.setItem('cart', JSON.stringify(cart))
   addCartMenu()
}
function checkArrCartMenu() {
    if (cart.length==0){
            document.getElementById('haha').style.display = 'none'
        } else {
            document.getElementById('haha').style.display = 'block'
        }
}
function countSl() {
//     var t=0;
//     var cartItem = document.querySelectorAll('.cart-product-items')
//     for (var i = 0; i < cartItem.length; i++){
//         var priceProduct=cartItem[i].querySelector('.product-cost').innerText;
        
//          t+=Number(priceProduct)*1000
//     }
//    var outPrice = document.querySelector('.header-bottom-cart-price')
//    outPrice.innerHTML = t.toLocaleString('de-DE')
document.getElementById('count-sp').innerHTML = cart.length;
}

//----------------------------product-cart------------------------------------------------------------------

 var deltailArr = new Array();
function clickProduct(x) {
    location.assign('detail-product.html')
    var boxsp = x.parentElement.children;
    var img = boxsp[0].src
    var title = boxsp[1].innerText
    var cost = boxsp[2].children[0].innerText
    // console.log(img, title, cost)
    var deltail = new Array(img, title, cost)
    deltailArr.push(deltail)
    localStorage.setItem('deltailArr', JSON.stringify(deltailArr))
}
function intoCart() {
    location.assign('product-cart.html')
}
