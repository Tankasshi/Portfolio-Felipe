const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout=null;
            if(!immediate) func.apply(context, args);
        };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later. wait);
    if(callNow) func.apply(context,args);
    };
};

const target = document.querySelectorAll('.texto-principal h1, .texto-principal h3, .botaoLinkedin, .imagem-apresentativa img, .img-sobre-mim, .texto h1, .texto p, .botaoCertificado,.cards, .titulo, .subtitulo, .projetos, .container h1, .container-esquerdo h1, .container-esquerdo p, .social-icons a, form input, form textarea, .botao');
const animationClass = 'animate';

function animeScroll(){
    const windowHeight = window.innerHeight;
    target.forEach(function(element){
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top;
        const elementBottom = elementRect.bottom;
        if((elementTop < windowHeight) && (elementBottom > 0)){
            element.classList.add(animationClass);
        } else{
            element.classList.remove(animationClass);
        }
    });
}

animeScroll();
if(target.length){
    window.addEventListener('scroll', function(){
        animeScroll();
    })
}

