const header = document.querySelector('.nav-header');

window.addEventListener('scroll', ()=>{
    const scrollHeigth = window.pageYOffset;
    if (scrollHeigth > 70){
        header.classList.add('trans-header');
    } else {
        header.classList.remove('trans-header');
    }
})

const stats = document.querySelector('.winRates');
const mapRate =[
    {
        map: 'Mirage',
        winRate: '55%',
        lastPlayed: 'navi'        
    },
    {
        map:'Inferno',
        winRate: '60%',
        lastPlayed:'spirit'
    },
    {
        map:'Nuke',
        winRate:'70%',
        lastPlayed:'boom'
    },
    {
        map:'Ancient',
        winRate:'58%',
        lastPlayed:'Galatasaray'
    },
    {
        map:'Overpass',
        winRate:'80%',
        lastPlayed:'badnewseagle'
    },
    {
        map:'Anubis',
        winRate:'30%',
        lastPlayed: 'ReigneSport'
    },
    {
        map:'Vertigo',
        winRate:'70%',
        lastPlayed:'AG'
    }
] 

let statsHTML = ``;

console.log(mapRate)

mapRate.forEach((m)=>{
    statsHTML += `   
     <div class="d-flex col-sm-5 col-8 map-stats">
        <div class="col-1"></div>
        <div class="col-5">
            <img class="img-fluid" src="../assets/image/Maps/${m.map}.jpg" alt="">
        </div>
        <div class="stat col-6 text-center">
            <h5>${m.map}</h5>
            <p>Win Rates : ${m.winRate}</p>
            <p>Played Against Most  :  <span><img class="img-fluid most-played" src="../assets/image/Maps/${m.lastPlayed}.jpg" alt=""></span></p>
        </div>
    </div>
  </div>`
})

stats.innerHTML = statsHTML