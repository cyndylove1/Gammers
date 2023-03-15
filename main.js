


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

 
 sr.reveal('.zone-content,.about-text,.about-img,.games-cards,.categories,.games-card,.categorie,.tournament1,.contact-content,.contact-right,.footer-content,.links,.action,.getintouch,.developer-section,.popular-content,.copy', {delay:350, origin:'bottom'})
