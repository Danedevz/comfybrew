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
document.addEventListener('click',(e)=>{
    console.log(e.target)
})
const ourmenu = document.getElementById('ourmenu')
const menubtn = document.querySelector('.menubtn')
const menudrop = document.querySelector('.menudrop')
const dropToggle = function(){

    menudrop.style.height = '210px';
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