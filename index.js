// navbar
window.addEventListener('scroll', ()=>{
    const nav = document.querySelector('.nav');
    if (window.scrollY > 0){
        nav.classList.add('nav-alpha');
    } else {
        nav.classList.remove('nav-alpha');

    }
})

//Our menu dropdown
const ourmenu = document.getElementById('ourmenu')
const menubtn = document.querySelector('.menubtn')
const menudrop = document.querySelector('.menudrop')
const dropToggle = function(){

    menudrop.style.height = '12 rem';
    menudrop.style.display = 'block';
    menubtn.style.borderRadius = '10px 10px 0 0';
}
menubtn.addEventListener('click', ()=>{
    dropToggle();
})
ourmenu.addEventListener('click', ()=>{
    dropToggle();
})
document.addEventListener('click',(e)=>{
    const menu = document.querySelector('.menubtn')
    if (e.target != menu){
        if (e.target != ourmenu){            
            menudrop.style.display = 'none';
            menubtn.style.borderRadius = '10px';
        }
    }
})

// nav dropdown
const menuicon = document.querySelector('.menuicon');
menuicon.addEventListener('click',()=>{
    const menuiconspan = document.querySelector('.menuicon span');
    menuiconspan.style.color = 'white';
    const navmenu = document.querySelector('.navmenu');
    if (navmenu.classList == 'navmenu'){
        navmenu.classList.toggle('shownav')
    } else {
        navmenu.classList = 'navmenu';
        menuiconspan.style.color = '#fab87b';
    }
})