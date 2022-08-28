document.getElementById('del').style.display = 'none';
// function delProductCart() {
//     var cartItem = document.querySelectorAll('.mycart-left-body-items')
//     for(var i = 0; i < cartItem.length; i++){
//         var del = document.querySelector('.icon')
//         del[i].addEventListener('click',(e) => {
//             var delCart = e.target
//             console.log(delCart)
//         })
//     }
// }
// delProductCart()

var sp = localStorage.getItem('cart')
var hang = JSON.parse(sp);
function showcart() {
    var show="";
    var tong = 0;
    for (var i = 0; i < hang.length; i++) {
        tong += Number(hang[i][2] ) * 1000
         show +=  '<li class="mycart-left-body-items">'+
                        '<div class="close item1">'+
                            '<div onclick="delItem(this)" class="icon">'+
                                '<i class="fa-solid fa-xmark"></i>'+
                            '</div>'+
                            '<div class="img">'+
                                '<img src="'+hang[i][0]+'" alt="">'+
                            '</div>'+
                            '<div class="title">'+
                                '<p>'+hang[i][1]+'</p>'+
                            '</div>'+
                        '</div>'+
                        '<div class="item2">'+
                            '<span class="cost">'+hang[i][2]+' </span> <sup> đ</sup>'+
                        '</div>'+
                        '<div class="item3">'+
                            '<input id="sl" type="number" min="0" max="10" value="1">'+
                        '</div>'+
                        '<div class="item4">'+
                            '<span id="count">'+hang[i][2]+'</span> '+
                        '</div>'+
                    '</li>'
    }
    show+='<div class="update-cart"><div style="display:flex;"><h3>Tổng chi: </h3> <span style="transform: translateY(2.5px); margin-left: 10px;" id="kq"> 0 </span> đ</div> <br/>'+
            '<button onclick="handleCart()" class="btn">Cập nhật lại giỏ hang</button> </div>'
    document.getElementById('showcart').innerHTML = show;
    countSp()
    document.getElementById('kq').innerHTML = tong.toLocaleString('de-DE');
}
showcart()
function countSp() {
    document.getElementById('demsl').innerHTML = hang.length;
}
function handlecost() {
    var cartItem = document.querySelectorAll('.mycart-left-body-items')
    var tong=0;
    for (var i = 0; i < cartItem.length; i++){
        var cost = cartItem[i].querySelector('.cost').innerHTML
        var sl = cartItem[i].querySelector('#sl').value
        var countT =  cartItem[i].querySelector('#count')
        var t = Number(cost) * sl *1000
        countT.innerHTML=t.toLocaleString('de-DE');
        tong+=t
    }
    document.getElementById('kq').innerHTML = tong.toLocaleString('de-DE');
   
}
function handleCart() {
    handlecost()
}

function delItem(x) {
    var delCart=x.parentElement.parentElement
    if(confirm('Are you sure you want to delete')){
        delCart.remove()
    }
        var tensp =  x.parentElement.children[2].innerText
    for (var i = 0; i <hang.length; i++){
            if (hang[i][1] == tensp){
                hang.splice(i,1)
            }
    }
    countSp()
    handlecost()
    localStorage.setItem('cart', JSON.stringify(hang))
    showcart()
    // if (hang.length==0){
    //     document.querySelector('.update-cart').style.display = 'none'
    //     document.getElementById('notify').style.display = 'block'
    // }
}