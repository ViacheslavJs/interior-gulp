export const absModalImg = () => {

try {
  const moduleAbsModalImg = document.getElementById('a-modal-img'); 
  //console.log(moduleAbsModalImg);
  //console.log(moduleAbsModalImg !== null);
  if (moduleAbsModalImg !== null) {
//

(function() {

const modalLayer = document.getElementsByClassName('a-modal-img__layer')[0];
const effect = document.getElementsByClassName('for-effects');
const pageScroll = document.getElementsByTagName('body')[0]; 

let onEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.add('filter-blur-grayscale');
      }  
    };
    
let offEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.remove('filter-blur-grayscale');
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
   
function showModalImg() {  
  modalLayer.style.display = "block";
  onEffect(); 
  disablePageScrolling();    
}


const image1 = document.querySelector('.a-modal-click-1');
image1.addEventListener('click', () => {
  showModalImg();
  counterImg(1); 
});

const image2 = document.querySelector('.a-modal-click-2');
image2.addEventListener('click', () => {
  showModalImg();
  counterImg(2); 
});

const image3 = document.querySelector('.a-modal-click-3');
image3.addEventListener('click', () => {
  showModalImg();
  counterImg(3); 
});

const image4 = document.querySelector('.a-modal-click-4');
image4.addEventListener('click', () => {
  showModalImg();
  counterImg(4); 
});

const image5 = document.querySelector('.a-modal-click-5');
image5.addEventListener('click', () => {
  showModalImg();
  counterImg(5); 
});

const image6 = document.querySelector('.a-modal-click-6');
image6.addEventListener('click', () => {
  showModalImg();
  counterImg(6); 
});

const image7 = document.querySelector('.a-modal-click-7');
image7.addEventListener('click', () => {
  showModalImg();
  counterImg(7); 
});

const image8 = document.querySelector('.a-modal-click-8');
image8.addEventListener('click', () => {
  showModalImg();
  counterImg(8); 
});

/////// варианты назначения обработчика на иконку закрытия///////

// TODO - syntax variant
//const clickedClass = event.target.className;
document.addEventListener('click', (event) => {
  const clickedClass = event.target.className;
  //console.log(clickedClass);
  if (clickedClass === 'icon-close-img far fa-times-circle') {    
    modalLayer.style.display = "none";     
    offEffect();
    enablePageScrolling();   
  }
});


/*
// TODO - syntax variant
const withСlass = document.querySelectorAll('.icon-close-img');
for (let i = 0; i < withСlass.length; i++) {
  // or
  withСlass[i].addEventListener('click', hiddeModalImg); 
  //console.log([i]);
  //console.log(withСlass[i]);
  
  // or
  //withСlass[i].onclick = hiddeModalImg;   
  //console.log([i]);
  
  // or
  //withСlass[i].onclick = function(){
   //hiddeModalImg(); 
   //console.log([i]);
  //};
  
}

function hiddeModalImg() {	
  modalLayer.style.display = "none";     
  offEffect();
  enablePageScrolling(); 
  //console.log(withСlass);  
}
//
*/
////////////////////////////////////////////////

modalLayer.addEventListener('click', closeSingleLayer);
function closeSingleLayer() {
  let clickedСlass = event.target.className;
  //console.log(clickedСlass);
  if (clickedСlass === 'a-modal-img__layer' || clickedСlass === ''
      || clickedСlass === 'a-modal-img__image'  || clickedСlass === 'a-modal-img__image-box') {
  modalLayer.style.display = "none";  
  offEffect();
  enablePageScrolling();
  } 
}


// TODO - single image
let imgIndex = 1;
showImg(imgIndex);

function counterImg(w) {
  showImg(imgIndex = w);
}

function showImg(w) {
  const img = document.getElementsByClassName('a-modal-img__image-box');
  let i;
   
  if (w > img.length) {
      imgIndex = 1
  }
    
  if (w < 1) {
      imgIndex = img.length
  }
      
  for (i = 0; i < img.length; i++) {
      img[i].style.display = "none";
  }
     
  img[imgIndex-1].style.display = "block";  
  
  
  const modalLayer = document.getElementsByClassName('a-modal-img__layer')[0]; 
  let heightModalLayer = modalLayer.offsetHeight;                                     
  //console.log(heightSingleLayer);

  let heightImg = img[imgIndex-1].offsetHeight;
  //console.log(heightBigImg);
  
  // centering algorithm:
  let differenceLayerImg = heightModalLayer - heightImg;
  let remain = differenceLayerImg / 2;
  
  if (heightImg < heightModalLayer) {
      img[imgIndex-1].style.top = remain + "px"; 
  } else if (heightImg > heightModalLayer) {
      img[imgIndex-1].style.top = 0 + "px";
  }
  //

}


// Отслеживание изменения ориентации экрана:
addEventListener("resize", function () {
  showImg();
});

// Отслеживание изменения ориентации экрана:
// Window: resize event (https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event#event_type),
// https://developer.mozilla.org/ru/docs/Web/API/Window/resize_event - Last modified: 07 november 2022:
/*
// TODO - syntax variant
window.onresize = function () {
  
}
*/
/* TODO - syntax variant
addEventListener("resize", function () {
  
});
*/
//
/*
let thj = window.matchMedia('(orientation: landscape)');
console.log(thj);
*/

/* TODO - "orientationchange" - Deprecated!
const around = 
  addEventListener("orientationchange", function () {
    
  });
  
//
*/
//

})(); // immediately invoked functions

} // if (moduleAbsModalImg !== null)

} // try

catch(err) {
  //console.log(err.name, err.message);
}


} // export


