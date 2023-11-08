const menu = document.querySelector('.menu');
const navLists = document.querySelector('.nav_lists');
const navList = document.querySelectorAll('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.logo0');
 
const footerSpan = document.querySelector('.year-span');
const date = new Date();
const year = date.getFullYear();
footerSpan.textContent = year;
function mobileNav(){
    navLists.classList.toggle('hide');
    navLists.style.backgroundColor = '#fff';
    navLists.style.height = '100%';
    navLists.style.width = '30vw';
    logo.classList.toggle('hide');
    for(const list of navList){
        list.style.padding = "1.5rem 1rem 0";
    }
    for(const link of navLinks){
        link.style.color ='#000';
       link.style.fontSize = '1rem';
    }
  }
 menu.addEventListener('click',  mobileNav);

 
  