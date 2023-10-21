export const flexModalImg = () => {

try {
  const moduleFlexModalImg = document.getElementById('fl-modal-img'); 
  //console.log(moduleFlexModalImg);
  //console.log(moduleFlexModalImg !== null);
  if (moduleFlexModalImg !== null) {
//

(function() {

const modalLayer = document.getElementsByClassName('fl-modal-img__layer')[0];
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
  modalLayer.style.display = "flex";
  onEffect(); 
  disablePageScrolling();    
}

// назначение слушателя на каждый элемент:
/*
// TODO - or variant:
const itemImg = document.querySelectorAll('.fl-modal-click');
//console.log(itemImg);
//console.log(itemImg[2]);
//console.log(itemImg.length);
itemImg.forEach(s => {
  s.addEventListener('click', (event) => {
    let sIndex = Array.prototype.indexOf.call(itemImg, event.target);
    //console.log(sIndex);
    showModalImg();
    counterImg(sIndex + 1);
  });
});
//
*/

// TODO - or variant from es6 '...' operator:
const itemImg = document.querySelectorAll('.fl-modal-preview__img');
//console.log(itemImg);
//console.log(itemImg[2]);
//console.log(itemImg.length);
itemImg.forEach(s => {
  s.addEventListener('click', (event) => {
    let sIndex = [...document.querySelectorAll('.fl-modal-preview__img')].indexOf(event.target);
    //console.log(sIndex);
    showModalImg();
    counterImg(sIndex + 1);
  });
});
//

const itemI = document.querySelectorAll('.product-name__image');
//console.log(itemImg);
//console.log(itemImg[2]);
//console.log(itemImg.length);
itemI.forEach(s => {
  s.addEventListener('click', (event) => {
    let sIndex = [...document.querySelectorAll('.product-name__image')].indexOf(event.target);
    //console.log(sIndex);
    showModalImg();
    counterImg(sIndex + 1);
  });
});

// проверка наличия элементов превью на странице:
const collection = [itemImg, itemI];
//console.log(collection);

/*
//
const image1 = document.querySelector('.fl-modal-click-1');
image1.addEventListener('click', () => {
  showModalImg();
  counterImg(1); 
});

const image2 = document.querySelector('.fl-modal-click-2');
image2.addEventListener('click', () => {
  showModalImg();
  counterImg(2); 
});

const image3 = document.querySelector('.fl-modal-click-3');
image3.addEventListener('click', () => {
  showModalImg();
  counterImg(3); 
});

const image4 = document.querySelector('.fl-modal-click-4');
image4.addEventListener('click', () => {
  showModalImg();
  counterImg(4); 
});

const image5 = document.querySelector('.fl-modal-click-5');
image5.addEventListener('click', () => {
  showModalImg();
  counterImg(5); 
});

const image6 = document.querySelector('.fl-modal-click-6');
image6.addEventListener('click', () => {
  showModalImg();
  counterImg(6); 
});

const image7 = document.querySelector('.fl-modal-click-7');
image7.addEventListener('click', () => {
  showModalImg();
  counterImg(7); 
});

const image8 = document.querySelector('.fl-modal-click-8');
image8.addEventListener('click', () => {
  showModalImg();
  counterImg(8); 
});
//
*/

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
}
//
*/
////////////////////////////////////////////////

modalLayer.addEventListener('click', closeModalLayer);
function closeModalLayer() {
  let clickedСlass = event.target.className;
  //console.log(clickedСlass);
  if (clickedСlass === 'fl-modal-img__layer' || clickedСlass === '' || clickedСlass === 'fl-modal-img__image') {
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
  const img = document.getElementsByClassName('fl-modal-img__image-box');
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
  
}
//

})(); // immediately invoked functions

} // if (moduleFlexModalImg !== null)

} // try

catch(err) {
  //console.log(err.name, err.message);
}


} // export

