
function toggle(source) {
  checkboxes = document.getElementsByName('checkbox-title');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}
// const checkboxTogle = document.querySelector('checkbox--togle');
// checkboxTogle.addEventListener(click, toggle(this));
const tdTitle = document.querySelectorAll('.table__td--title');
	for (var i = 0; i < tdTitle.length; i++) {
		
		tdTitle[i].addEventListener('mouseover', function () {
			const tdStar = this.querySelector('.table__icon--star');
			tdStar.classList.remove('visually-hidden');
			
		});
		tdTitle[i].addEventListener('mouseleave', function () {
			const tdStar = this.querySelector('.table__icon--star');
			tdStar.classList.add('visually-hidden');
			
		});
	};
const star = document.querySelectorAll('.table__icon--star');
	for (var i = 0; i < star.length; i++) {
		star[i].addEventListener('click', function () {
			
			this.classList.toggle('active');
			this.classList.remove('visually-hidden');
			
		});
			if( window.innerWidth <= 767 ){
				star[i].classList.remove('visually-hidden');
		}

	};

function showSame() {
	const icons = document.querySelectorAll('.table-icon__wrapp');
	for (var i = 0; i < icons.length; i++) {
	
		icons[i].onmouseover = function (evt) {
			const data = evt.target.getAttribute('data-icon');
			const sameIcons = document.querySelectorAll('.table-icon__wrapp[data-icon="' + data + '"]');
			for (var i = 0; i < sameIcons.length; i++) {
				sameIcons[i].classList.add('active');
			}
		}
		icons[i].onmouseleave = function(evt) {
			const data = evt.target.getAttribute('data-icon');
			const sameIcons = document.querySelectorAll('.table-icon__wrapp[data-icon="' + data + '"]');
			for (var i = 0; i < sameIcons.length; i++) {
				sameIcons[i].classList.remove('active');
			}
		}
	}
}
showSame();
function showDop() {
	const more = document.querySelectorAll('.table__arrow-more');

for (var i = 0; i < more.length; i++) {
	more[i].onclick = function (e) {
		const data = this.getAttribute('data-more');
		const tableMore = document.querySelectorAll('.table__more[data-more="' + data + '"]');
		this.classList.toggle('active');
		for (var i = 0; i < tableMore.length; i++) {
			tableMore[i].classList.toggle('visually-hidden');
		}
	}
}
}
showDop();