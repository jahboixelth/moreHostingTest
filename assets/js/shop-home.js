const itemImg1 = document.querySelector('.item-img1');
const itemImg2 = document.querySelector('.item-img2');
const itemImg3 = document.querySelector('.item-img3');
const itemImg4 = document.querySelector('.item-img4')
const cardShops = document.querySelectorAll('.card-shop')

arrayShopItem = ['None', itemImg1, itemImg2, itemImg3, itemImg4];
function over(img){
    arrayShopItem[img].innerHTML=`<img class="img-fluid item-img" src="assets/image/shop/img-${img}-hover.webp" alt="">`;  
}
function off(img){
    arrayShopItem[img].innerHTML=`<img class="img-fluid item-img" src="assets/image/shop/img-${img}.webp" alt="">   `;
}
