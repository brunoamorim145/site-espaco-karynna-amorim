const elementos=document.querySelectorAll('[data-anima]');
const animacaoClass='animacao';

function animaScroll(){
    const topoPaginaNaJanela=window.pageYOffset+((window.innerHeight*3)/4);
    elementos.forEach(function(elemento){
        if(topoPaginaNaJanela > elemento.offsetTop){
            elemento.classList.add(animacaoClass);
        } else{
            elemento.classList.replace(animacaoClass);
        }
    });
}

if(elementos.length){
    window.addEventListener('scroll',function(){
        animaScroll();
    })
}