(function($) { "use strict";
//Page cursors

	document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
		t.style.left = n.clientX + "px", 
t.style.top = n.clientY + "px", 
e.style.left = n.clientX + "px", 
e.style.top = n.clientY + "px", 
i.style.left = n.clientX + "px", 
i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
		e = document.getElementById("cursor2"),
		i = document.getElementById("cursor3");
function n(t) {
		e.classList.add("hover"), i.classList.add("hover")
}
function s(t) {
		e.classList.remove("hover"), i.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover"), a = r.length - 1; a >= 0; a--) {
		o(r[a])
}
function o(t) {
		t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}
$( document ).ready(function() {
	var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: false,
			live: true
	});

//Page scroll
$(window).scroll(function() {

// selectors
var $window = $(window),
		$body = $('body'),
		$panel = $('.color-code');

// Change 33% earlier than scroll position so colour is there when you arrive.
var scroll = $window.scrollTop() + ($window.height() / 3);

$panel.each(function () {
	var $this = $(this);

	if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

		$body.removeClass(function (index, css) {
			return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
		});
		$body.addClass('color-' + $(this).data('color'));
	}
});    

}).scroll();
});
})(jQuery); 

	////Page Navigation

	var app = function () {
		var body = document.querySelector('body');
		var nav = document.querySelector('.nav');
		var header = document.querySelector('.header');
		var menuIcon = document.querySelector('.menu-icon');
		// menuItems = document.querySelectorAll('.nav__list-item');
		var menuLink = document.querySelectorAll('.nav__link');
		var menuItem = document.querySelector('.nav__item');



		var applyListeners = function applyListeners() {
			menuIcon.addEventListener('click', function () {
				menuIcon.classList.toggle('menu-icon--active');
			 header.classList.toggle('header--active');
				return toggleClass(nav, 'nav--active');
				
			});
			if ($(window).width() > 767) {
				particlesJS("particles-js", {"particles":{"number":{"value":139,"density":{"enable":true,"value_area":1210}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":10,"height":10}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":80.17060304327615,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":438.52169464272635,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, update; count_particles = document.querySelector('.js-count-particles'); update = function() { if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
			}

		};

		var applyListenersss = function applyListenersss() {
			for (var i = 0; i < menuLink.length; i++) {
				menuLink[i].addEventListener('click', function () {
					menuIcon.classList.toggle('menu-icon--active');
					header.classList.toggle('header--active');
					return toggleClass(nav, 'nav--active');
					
					// TODO
					// if (this.attr('href')==document.location.pathname) {
					// 	this.classList.add('active');
					// };
				});
			}
		};
		var HovermenuLink = function HovermenuLink() {
			for (var i = 0; i < menuLink.length; i++) {
				 HovermenuLinks(menuLink[i]);
				};
			};
			var slide = document.querySelectorAll('.swiper-slide__img');
		 	for (var i = 0; i < slide.length; i++) {
					slide[i].addEventListener('mouseover', function(e) {
						var slideImg = this.querySelector('img');
						var slideHeihg = slideImg.clientHeight - this.clientHeight;
						console.log(slideHeihg);
						 slideImg.style.marginTop = "-" + slideHeihg + "px";
					}, false);
					slide[i].addEventListener('mouseout', function(e) {
						var slideImg = this.querySelector('img');
						var slideHeihg = slideImg.clientHeight - this.clientHeight;
						slideImg.style.cssText = 'margin-top: 0px';
					}, false);
			 		};
			var HovermenuLinks = function HovermenuLinks(element) {
			element.addEventListener("mouseover", addClass), element.addEventListener("mouseout", removeClass)
		}
		var addClass = function addClass() {
			nav.classList.add("hover");
	}
	var removeClass = function removeClass() {
		nav.classList.remove("hover");
	}
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		var init = function init() {

			applyListeners();
			applyListenersss();
			HovermenuLink();
			// HoverSlide();
		};
		init();
	}();

	// VanillaTilt.init(document.querySelector(".tilt-block"), {
	// 	max: 25,
	// 	speed: 400
	// });
	
	if ($(window).width() > 767) {
		var swiperBottomScrollbarFull = new Swiper('.portfolio__content', {
				allowTouchMove: true,
				slidesPerView: 'auto',
				preventClicks: false,
				spaceBetween: 30,
				keyboardControl: true,
				speed: 1000,
				slidesPerGroup: 2,
				pagination: {
						el: null
				},
				scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
						hide: false,
						snapOnRelease: true
				},

				keyboard: {
						enabled: true
				},
				navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
				}
		});
}
if ($(".portfolio__content").length > 0) {
	clearTimeout(resizeId);
	resizeId = setTimeout(doneResizing, 1000);
}
function doneResizing() {
	if (swiperBottomScrollbarFull) {
			swiperBottomScrollbarFull.detachEvents();
			swiperBottomScrollbarFull.destroy(true, true);
			swiperBottomScrollbarFull = undefined;
	}

	$(".portfolio__content .swiper-wrapper").css("transform", "").css("transition-duration", "");
	$(".portfolio__content .swiper-slide").css("margin-right", "");
	$('.portfolio__content .swiper-wrapper').removeAttr('style');
	$('.portfolio__content .swiper-slide').removeAttr('style');

	if ($(window).width() > 767) {
			setTimeout(function () {
					swiperBottomScrollbarFull = new Swiper('.portfolio__content', {
							allowTouchMove: true,
							slidesPerView: 'auto',
							preventClicks: false,
							spaceBetween: 30,
							keyboardControl: true,
							speed: 1000,
							slidesPerGroup: 2,
							pagination: {
									el: null
							},
							scrollbar: {
									el: '.swiper-scrollbar',
									draggable: true,
									hide: false,
									snapOnRelease: true
							},

							keyboard: {
									enabled: true
							},
							navigation: {
									nextEl: '.swiper-button-next',
									prevEl: '.swiper-button-prev'
							}
					});
			}, 500);
	}
}

