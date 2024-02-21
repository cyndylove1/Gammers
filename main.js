


var pagebody=document.querySelector(".pagebody")

var hamburger=document.querySelector(".hamburger-container")
  
function addandremove(){
   hamburger.classList.toggle('showburger')
}
var mobilecontainer=document.querySelector(".mobile-container")

function addandremove(){
   hamburger.classList.toggle('showburger')
   mobilecontainer.classList.toggle('showmobilelinks')
}



 const sr = ScrollReveal ({
    distance: '60px',
    duration: 2000,
    reset: true

 })
 sr.reveal('.main-content,.image-right',{delay:350, origin:'top'})

 
 sr.reveal('.zone-content,.about-section,.about-text,.about-img,.games-cards,.card h5,.categories,.games-card,.categorie,.tournament1,.contact-content,.contact-right,.footer-content,.links,.action,.getintouch,.developer-section,.popular-content,.copy', {delay:350, origin:'bottom'})

 
//  let animation = anime({
//    targets: '.letter',
//    opacity: 1,
//    translateY: 50, 
//    rotate: {
//       value: 360,
//       duration: 3000,
//       easing: 'easeInExpo'
//    }, 
//    scale: anime.stagger([0.7, 1], {from: 'center'}), 
//    delay: anime.stagger(100, {start: 1000}), 
//    translateX: [-10, 30]
// }); 
// var greeting_animation = anime({
//    targets: '.main-content h2',
//    opacity: 1,
//    translateY: 100,
//    delay: anime.stagger(1000)
//  });  