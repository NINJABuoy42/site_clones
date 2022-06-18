console.log('script running....');

const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const span = document.querySelectorAll('.span');

menu.addEventListener('click', () => {
    nav.classList.toggle('active');
    span.forEach(spans => {
        spans.classList.toggle("show");
        
        

        
    })
})
document.querySelector(".dMode").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
});