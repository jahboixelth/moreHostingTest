//set header shadow when scroll to down 
const header = document.querySelector('.nav-header');

window.addEventListener('scroll', ()=>{
    const scrollHeigth = window.pageYOffset;
    if (scrollHeigth > 70){
        header.classList.add('trans-header');
    } else {
        header.classList.remove('trans-header');
    }
})

//get data from new Data
const sponsorGrid = document.querySelector('.sponsor-grid') 

let sponsorHTML = ``;

const sponsor = [
    'alienware', 
    'coinbase', 
    'honda', 
    'hyper', 
    'imc', 
    'kingston', 
    'monster',
    'sap', 
    'secretlab',
    'thorn',
    'twitch'
]
sponsor.forEach((s) => {
    sponsorHTML += ` <div class="col-sm-3 item-grid-sponsor">
    <a href="https://www.${s}.com">
      <img class="img-fluid img-sps" src="assets/image/sponsors/${s}.svg" alt="">
    </a>
  </div>`
});

sponsorGrid.innerHTML = sponsorHTML;
const date  = new Date().getFullYear();

const copyRight = document.querySelector('.copy-right');

copyRight.innerHTML = `<p> © 2000 - ${date} Team Liquid</p>`