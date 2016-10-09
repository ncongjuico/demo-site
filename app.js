var img = document.querySelector('img');
var page1 = document.getElementById('page1'); /*variable for dean's page*/
var page2 = document.getElementById('page2'); /*variable for ney's page*/

var imgFlip = true; /*controls click event*/
var currentPage = null;

var fadeOut = function fadeOut() { /*fadeout function declaration*/
    img.classList.remove('fadeIn');
    img.classList.add('fadeOut');
};

var fadeIn = function fadeIn() { /*fadein function declaration*/
    img.classList.remove('fadeOut');
    img.classList.add('fadeIn');
};

var swapPage = function swapPage() { /*swapPage function declaration*/
    if (currentPage === 1) {
        page1.style.display = "block";
        page2.style.display = "none";
        currentPage = 2;
    } else {
        page1.style.display = "none";
        page2.style.display = "block";
        currentPage = 1;
    }
};

img.addEventListener('click', function(){
    swapPage();
    if (imgFlip === true) {
        fadeOut();
        setTimeout(function(){
            img.setAttribute('src', 'https://avatars1.githubusercontent.com/u/9100483?v=3&s=466');
            fadeIn();
        }, 300);
    } else {
        fadeOut();
        setTimeout(function(){
            img.setAttribute('src', 'https://avatars1.githubusercontent.com/u/10689701?v=3&s=466');
            fadeIn();
        }, 300);
    }
    imgFlip = !imgFlip;
});
