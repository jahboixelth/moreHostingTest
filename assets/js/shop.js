const grid = document.querySelector('.grid-item');

//?Create Object to Store Information
const Product = [
    {
        name:'STAR WARS™ | TEAM LIQUID DARK SIDE KNIT SWEATER',
        price:7000,
        img:1,
        type:'top'
    },
    {
        name:'STAR WARS™ | TEAM LIQUID TATOOINE TEE',
        price: 2900,
        img:2,
        type:'top'
    },
    {
        name:'Team Liquid Naruto Sasuke Crewneck Navy Blue',
        price:7500,
        img:3,
        type:'top'
    },
    {
        name:'STAR WARS™ | TEAM LIQUID GALACTIC EMPIRE CLOAK',
        price:11000,
        img:4,
        type:'top'
    },
    {
        name:'LIQUID X MARVEL MILES MORALES MOUSEPAD',
        price:2800, 
        img:5,
        type:'other'
    },
    {
        name:'BLUE PLUSH KEYCHAIN | TEAM LIQUID STARTER PACK',
        price:1800,
        img:6,
        type:'other'
    },
    {
        name:'LIQUID X STANCE HERITAGE SOCK',
        price:680, 
        img:7,
        type:'other'
    },
    {
        name:'DERP GUILD TEE | LIQUID TEE 4U',
        price:3500,
        img:8, 
        type:'top'
    },
    {
        name:'BEST COAST ENZYME WASH EMBROIDERY HOODIE',
        price: 3200,
        img:9,
        type:'top'
    },
    {
        name:'EMBROIDERED LOGO ZIP HOODIE',
        price:6800, 
        img:10, 
        type:'top'
    },
    {
        name:'2023 TEAM LIQUID OFFICIAL HONDA WORLDS JERSEY',
        price:6100, 
        img:11, 
        type:'jersey'
    },
    {
        name:'STAR WARS™ | TEAM LIQUID IMPERIAL  CARGO PANTS',
        price:9500,
        img:12, 
        type:'bottom'
    },
    {
        name:'LEGACY REVERSIBLE BOMBER',
        price:6000, 
        img:13, 
        type:'top'    
    },
    {
        name:'PULSAR HORSE SHORT SLEEVE TEE',
        price:1000,
        img:14, 
        type:'top'
    },
    {
        name:'2023 TEAM LIQUID OFFICIAL JERSEY (SPONSORED)',
        price:5220,
        img:15,
        type:'jersey'
    },
    {
        name:'2023 TEAM LIQUID DHORSE JERSEY (SPONSORED)',
        price:7500,
        img:16,
        type:'jersey'
    },
    {
        name:'TEAM LIQUID FLAG - GOLDEN 152CM X 91CM',
        price:1500, 
        img:17, 
        type:'other'
    },
    {
        name:'Team Liquid Sasuke Keycap Set Multi',
        price:11000,
        img:18,
        type:'other'
    },
    {
        name:'LIQUID X NARUTO KAKASHI KEYCAP BASE KIT',
        price:9999,
        img:19,
        type:'other'
    },
    {
        name:'LIQUID X NARUTO 20Y BLUE ARTISAN KEYCAP',
        price:1999,
        img:20,
        type:'other'
    },
    {
        name:'TEAM LIQUID STICKER PACK | FANS STARTER PACK',
        price:750,
        img:21, 
        type:'other'
    },
    {
        name:'LIQUID CREST JOGGER | WINTER COLLECTION',
        price:3600, 
        img:22, 
        type:'bottom'
    },
    {
        name:'BEST COAST ENZYME WASH EMBROIDERY SWEATPANTS',
        price:3200, 
        img:23,
        type:'bottom'
    },
    {
        name:'LIQUID X NARUTO 20Y ACTIVE SHORTS',
        price:2199, 
        img:24, 
        type:'bottom'
    },
    {
        name:'LIQUID LOGO LIGHTWEIGHT TERRY SHORTS',
        price:4000,
        img:25, 
        type:'bottom'
    }


]

gridHTML =``;

Product.forEach((p)=>{
    gridHTML =gridHTML + `
    <div class="item-shop col-md-3 col-6 d-flex flex-column p-3 justify-content-center">
        <img class="img-fluid h-auto rounded" src="../assets/image/shop/img-${p.img}.webp" alt="">
        <p class="product-name  text-center">${p.name}</p>
        <p class="product-price text-center">$${p.price / 100}.00</p>
  </div>
    `
})

grid.innerHTML = gridHTML;

const btnType = document.querySelectorAll('.btn-type');
let typeList = [];

btnType.forEach((b)=>{
        b.addEventListener('click', ()=>{
        let typeHTML = ``;
        type = b.innerHTML.toLowerCase();

        Product.forEach((p)=>{
            if ('all' === type){
                grid.innerHTML = gridHTML;
            } else if (p.type === type){
                typeHTML += `
                    <div class="item-shop col-md-3 col-6 d-flex flex-column p-3 justify-content-center">
                        <img class="img-fluid h-auto rounded" src="../assets/image/shop/img-${p.img}.webp" alt="">
                        <p class="product-name  text-center">${p.name}</p>
                        <p class="product-price text-center">$${p.price / 100}.00</p>
                    </div>`
                grid.innerHTML = typeHTML;
            } 
        })

    
    })
})