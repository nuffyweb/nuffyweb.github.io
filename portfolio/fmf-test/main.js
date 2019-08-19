
 const arrow = document.querySelector('.sliders__arrow');
 const slides = document.querySelectorAll('.slide');
 const slidesWrapp = document.querySelector('.sliders');
 const nav = document.querySelector('.sliders__nav');
 const link = document.querySelectorAll('.sliders__link');


arrow.addEventListener('click', changeArrowSlide);
nav.addEventListener('click', changeNavSlide);

function changeNavSlide(evt) {
	slides[0].classList.remove("slide--first");
	const slideActive = document.querySelector('.slide--in');
	let slideActiveIndex = Array.prototype.indexOf.call(slides, slideActive);
	let i = slideActiveIndex;
	slides[i].classList.remove("slide--in");
	slides[i].classList.add("slide--out");
for (let j = 0; j < link.length; j++) {
	link[j].classList.remove("active");
}
	const cangeIndex = Array.prototype.indexOf.call(link, evt.target);
	i = cangeIndex;
	slides[i].classList.add("slide--in");
	slides[i].classList.remove("slide--out");
	evt.target.classList.add("active");

}


function changeArrowSlide(evt) {
	slides[0].classList.remove("slide--first");
	const slideActive = document.querySelector('.slide--in');
	let slideActiveIndex = Array.prototype.indexOf.call(slides, slideActive);
	let k = slideActiveIndex;
const cangeValue = evt.target.dataset.index;
slides[k].classList.remove("slide--in");
slides[k].classList.add("slide--out");
link[k].classList.remove("active");
k = k + +cangeValue;
console.log(k);

if( k < 0){
	k = 0;
}
if( k >= slides.length){
	k = slides.length-1;
}
slides[k].classList.add("slide--in");
slides[k].classList.remove("slide--out");
link[k].classList.add("active");
}
