function changeBg(){
   var navbar = document.getElementById('navbar');
   var scrollValue = window.scrollY
    if (scrollValue < 150){
        navbar.classList.remove('bg1color');
    }else  {
        navbar.classList.add('bg1color');
    }
}
window.addEventListener('scroll', changeBg);

