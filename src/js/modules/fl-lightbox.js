
export const lightboxSliderFl = () => {

try {
  const moduleLightboxFl = document.getElementById('fl-lightbox'); 
  //console.log(moduleLightboxFl);
  if (moduleLightboxFl !== null) {
  
/////////////////////////////////////

(function() {

// TODO - swipe animation
function shiftRight() {
  const pictures = document.querySelectorAll('.fl-lightbox__images-box');
  pictures.forEach(e => {
    e.classList.remove('to-left');
    e.classList.add('to-right');  
    //console.log(e);
  }); 
}

function shiftLeft() {
  const pictures = document.querySelectorAll('.fl-lightbox__images-box');
  pictures.forEach(e => {
    e.classList.remove('to-right');
    e.classList.add('to-left');  
    //console.log(e);
  }); 
}

const btnPrev = document.querySelector('.fl-lightbox__prev');
const btnNext = document.querySelector('.fl-lightbox__next');

btnPrev.addEventListener('click', function() {
  shiftRight();
});

btnNext.addEventListener('click', function() {
  shiftLeft();
});
//


// TODO - slider, lightbox:
const startLightbox = document.querySelector('.js-fl-lightbox-start');
startLightbox.addEventListener('click', function() {
  showModal();
  currentSlide(1); // можно передать любой слайд в виде индекса;                                      
});

const modalLayer = document.getElementById('modal-layer');
const close = document.getElementsByClassName('fl-lightbox__close')[0];
const effect = document.getElementsByClassName('js-fl-lightbox-effects');
const pageScroll = document.getElementsByTagName('body')[0]; 

let onEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.add('fl-filter');
      }  
    };
    
let offEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.remove('fl-filter');
      }  
    };

// page scroll disable function (body):
function disablePageScrolling () {
	 pageScroll.style.overflowY = "hidden";
}

// page scroll enable function (body):
function enablePageScrolling () {
	 pageScroll.style.overflowY = "visible"; // instead of visible - auto or ""
}
   
/*
// TODO - syntax variant
const controls = document.querySelectorAll('.fl-controls');
controls.forEach(v => {
  document.addEventListener('click', (event) => { 
    //console.log(controls); 
    const click = event.target.classList.contains('fl-switching');
    //console.log(click);
    
    const tag = event.target.tagName.toLowerCase();
    //console.log(tag);
    
    const whatClass = event.target.className;
    //console.log(whatClass);
    
    if ( click === true || whatClass === '' ) {     
      //console.log(controls);
      //console.log(click);
      v.classList.toggle('fl-show');
    }  
  });  
});
//
*/


// TODO - syntax variant
document.addEventListener('click', (event) => { 
const controls = document.querySelectorAll('.fl-controls');
controls.forEach(v => {
  
    //console.log(controls); 
    const click = event.target.classList.contains('fl-switching');
    //console.log(click);
    
    const tag = event.target.tagName.toLowerCase();
    //console.log(tag);
    
    const whatClass = event.target.className;
    //console.log(whatClass);
    
    if ( click === true || whatClass === '' ) {     
      //console.log(controls);
      //console.log(click);
      v.classList.toggle('fl-show');
    }   
  });  
});
//

                     
function showModal() {
  const controls = document.querySelectorAll('.fl-controls');
  controls.forEach(v => {
    setTimeout( function() {
      v.classList.add('fl-show');
    }, 800);
    setTimeout( function() {
      v.classList.remove('fl-show');
    }, 4500);   
  });
   
  modalLayer.style.display = "flex";
  //iconClose.style.display = "block";  
  onEffect();
  disablePageScrolling();      
          
}

//TODO
close.addEventListener('click', hideModal);
function hideModal() {	
  modalLayer.style.display = "none";
  //close.style.display = "none"; 
  offEffect(); 
  enablePageScrolling();     
}
//

//TODO
modalLayer.addEventListener('click', closeLayer);
function closeLayer() {
  let clickedСlass = event.target.className; 
  //console.log(clickedСlass);
  if (clickedСlass === 'fl-lightbox__modal-layer') {
    modalLayer.style.display = "none";  
    //close.style.display = "none";  
    offEffect(); 
    enablePageScrolling();      
  }   
   
}
//

// TODO - lightbox
const btn1 = document.querySelector('.fl-lightbox__prev');
const btn2 = document.querySelector('.fl-lightbox__next');

/* // TODO - syntax variant:
btn1.addEventListener('click', () => plusSlides(-1) );
btn2.addEventListener('click', () => plusSlides(1) );
*/

// TODO - syntax variant:
btn1.addEventListener('click', function() {
  plusSlides(-1);
});

btn2.addEventListener('click', function() {
  plusSlides(1);
});

btn1.addEventListener('click', function() {
  currentSlide(imagesIndex)
});

btn2.addEventListener('click', function() {
  currentSlide(imagesIndex)
});


let imagesIndex = 1;
viewSlides(imagesIndex); 

function plusSlides(num) {
  viewSlides(imagesIndex += num); 
}

function currentSlide(num) {
  viewSlides(imagesIndex = num); 
}

function viewSlides(num) {
  const img = document.getElementsByClassName('fl-lightbox__images-box');
  const dots = document.getElementsByClassName("fl-lightbox__dot");
  let i;
 
  if (num > img.length) {
    imagesIndex = 1
  }      
  
  if (num < 1) {
    imagesIndex = img.length
  }
  
  for (i = 0; i < img.length; i++) {
      img[i].style.display = "none";  
  }
  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" fl-dot-active", "");
  }
    
  img[imagesIndex-1].style.display = "block";
  dots[imagesIndex-1].className += " fl-dot-active";  
  
}
//

})(); // immediately invoked functions

} // if (moduleLightboxFl !== null)

} // try

catch(err) {
  //console.log(err.name, err.message);
}


} // export



