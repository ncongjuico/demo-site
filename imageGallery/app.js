var instaimages = document.getElementsByClassName('instaimages');
var mainpage = document.getElementById('mainpage');
var big = document.querySelector('#big');

// smear out function
var fadeOut = function fadeOut(section) { /*fadeout function declaration*/
    section.classList.remove('fadeIn');
    section.classList.add('fadeOut');
};

// smearing function
var fadeIn = function fadeIn(section) { /*fadein function declaration*/
    big.classList.remove('fadeOut');
    big.classList.add('fadeIn');
};

for(var i = 0; i < instaimages.length; i++) {
    instaimages[i].addEventListener('click', function(){
        big.setAttribute('src', this.getAttribute('src'));
        enlarge();
        console.log('hello from ' + this.getAttribute('src'));
    });
}

big.addEventListener('click', function(){
    restore();
})

// function for enlarging
var enlarge = function enlarge() {
    document.getElementById('mainpage').style.display = 'none';
    document.getElementById('enlarge').style.display = 'block';
};

// function for delarging
var restore = function restore() {
    document.getElementById('enlarge').style.display = 'none';
    document.getElementById('mainpage').style.display = 'block';
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
