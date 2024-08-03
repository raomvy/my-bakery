var menulist = document.querySelector('.menu-list');
var dolist = document.querySelector('.dolist');
var menuitems = document.querySelector('.menu-items');
var menuheader = document.querySelector('.menu-header');
var menuitemsoverly = document.querySelector('.menu-items-overly');

menulist.children[4].addEventListener(
    "click",
    function () {
        menulist.children[5].classList.toggle("open");
        menulist.children[4].children[0].classList.toggle("fa-chevron-up");
        menulist.children[4].children[0].classList.toggle("fa-chevron-down");
    }
)

menuheader.addEventListener(
    'click',
    function (e) {
        menuheader.children[0].classList.add('fa-xmark');
        menuitems.classList.toggle('menu-items-open');
        // menuitemsoverly.classList.toggle('menu-items-overly');
        menuitemsoverly.classList.add('menu-items-over');
    }
)

menuitemsoverly.addEventListener(
    'click',
    function(){
        menuitemsoverly.classList.remove('menu-items-over')
        menuitems.classList.remove('menu-items-open')
        menuheader.children[0].classList.remove('fa-xmark');

    }
)



$(document).ready(function(){
    let reviews = $('.five-left');
    let currentIndex = 0;

    function showNextReview() {
        reviews.eq(currentIndex).removeClass('active');
        currentIndex = (currentIndex + 1) % reviews.length;
        reviews.eq(currentIndex).addClass('active');
    }

    setInterval(showNextReview, 5000); // Change slide every 5 seconds
});




window.addEventListener(
    'scroll' , function(){
        console.log(window.scrollY);
        if(window.scrollY>=61){
            document.body.classList.add('shownavbg')
        }
        else{
            document.body.classList.remove('shownavbg')
        }
    }
)









