const cardSection = document.querySelector('.player-section');

const header = document.querySelector('.nav-header');

window.addEventListener('scroll', ()=>{
    const scrollHeigth = window.pageYOffset;
    if (scrollHeigth > 70){
        header.classList.add('trans-header');
    } else {
        header.classList.remove('trans-header');
    }
})


let cardSectionHTML  = ``;

const player = [
    {
        name: 'Yekindar',
        description: 'A smart, aggressive entry player that crack round wide open.'
    },
    {
        name:'Naf',
        description: ' CS\'s resident sloth. One of NA\'s greatest. Any Naffers??'
    },
    {
        name: 'Skullz',
        description: 'Brazilian Prodigy, Clutch gene. Sharp Shots and Sharper timing'
    },
    {
        name:'CadiaN',
        description: 'Top IGL, motivator, innovator, AWPer. Nice in several senses.'
    },
    {
        name:'Twistzz',
        description:'The headshot machine TL helped build. One of the best rifler ever, Now back home.'
    }
]

player.forEach((p)=>{
    cardSectionHTML += `<div class="player rounded flex-md-column flex-sm-row col-sm-3 col-10" style="background-image: url('../assets/image/player/${p.name}.jpg');">
    <h3 class="text-center player-name">${p.name}</h3>
    <p class="text-center">${p.description}</p>
  </div>`
})

cardSection.innerHTML = cardSectionHTML;