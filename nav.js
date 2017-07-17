//Identify the button
var navToggle = document.getElementById('nav-toggle');
//Identify the nav items
var navItems = document.getElementById('nav-items')
//Button is waiting to be clicked
navToggle.addEventListener('click', function(){
  
  //Button gets clicked
  //Nav items disappear
  
  //Button gets clicked again
  //Nav items disappear
  navItems.classList.toggle('mobile-nav-hidden');
});