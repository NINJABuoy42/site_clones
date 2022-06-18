// const btnMenu = document.querySelector('#menu');
const slide = document.querySelector('.slide');
const cancel = document.querySelector('#cancel');
const cards = document.querySelectorAll('.card')

// btnMenu.addEventListener('click',display);
cancel.addEventListener('click',out);
function display(){
    cancel.style.visibility = 'visible';
    slide.style.transition = '0.5s ';
    slide.style.visibility = "visible";
    slide.style.width = "100vw";
    setTimeout(call,500);
    function call(){
        for(i = 0; i < cards.length;i++){
            cards[i].style.transition = `${i}s`;
            cards[i].style.transform = "translateY(0%)"
            cards[i].style.visibility = 'visible';
        }
    }
    
        
}


function out(){
    for(i = 0; i < cards.length;i++){
        cards[i].style.transition = '0s';
        cards[i].style.transform = "translateY(90%)"
        cards[i].style.visibility = 'hidden';
    }
    cancel.style.visibility = 'hidden';
    slide.style.transition = '0s';
    slide.style.width = '0';
   
}