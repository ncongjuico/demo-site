var instaimages = document.getElementsByClassName('instaimages');
var mainpage = document.querySelector('#mainpage');
var enlargeVar = document.querySelector('#enlarge');
var big = document.querySelector('#big');

// smear out function
var fadeOut = function fadeOut(section) {
    section.classList.remove('fadeIn');
    section.classList.add('fadeOut');
};

// smear in function
var fadeIn = function fadeIn(section) {
    section.classList.remove('fadeOut');
    section.classList.add('fadeIn');
};

// array for pictures
for(var i = 0; i < instaimages.length; i++) {
    instaimages[i].addEventListener('click', function(){
        big.setAttribute('src', this.getAttribute('src'));
        enlarge();
    });
}

big.addEventListener('click', function(){
    restore();
})

// function for enlarging
var enlarge = function enlarge() {
    fadeOut(mainpage);
    setTimeout(function(){
        document.getElementById('mainpage').style.display = 'none';
    }, 200);
    
    fadeIn(enlargeVar);
    setTimeout(function(){
        document.getElementById('enlarge').style.display = 'block';
    }, 200);
};

// function for restoring original page
var restore = function restore() {
    fadeOut(enlargeVar);
    setTimeout(function(){
        document.getElementById('enlarge').style.display = 'none';
    }, 200);
    
    fadeIn(mainpage);
    setTimeout(function(){
        document.getElementById('mainpage').style.display = 'block';
    }, 200);
}

// declare an overlay thingie which is kinda like the enlarge section?

// in this particular case it'll be easier to pass a parameter to your fadeIn/Outs

// setTimeout multiple ones! Make sure that there's two parts to each transition.
// When you click on the enlarge version, you want to have two setTimeouts in there
// One will be for managing the display of the pages
// The other one is managing the fadeIn afterwards
/*
  1) fadeOut
  2) manage display
  3) fadeIn
*/
