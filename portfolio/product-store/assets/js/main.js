$(document).ready(function() {


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
				dots: false,
        centerMode: true,
        focusOnSelect: true
    });





    $(function() {

        $(".product__tabs").on("click", ".tab__link", function() {

            var tabs = $(".product__tabs .tab__link"),
                cont = $(".product__tabs .tab__content");

            tabs.removeClass("tab__link--active");
            cont.removeClass("tab__content--active");
            $(this).addClass("tab__link--active");
            cont.eq($(this).index()).addClass("tab__content--active");

            return false;
        });
    });

    $(function() {

        $('.analog__slick').slick({
            slidesToShow: 4,
						slidesToScroll: 4,
						dots: false,
						
        });

		});
		
		$(function() {

			$(".filter__btn").on("click", function(e) {
					e.preventDefault();
					$(".filter__btn").toggleClass('filter__btn--active');
					$(".filter__content").toggleClass('filter__content--active');

			});

	});

	$(function() {
		$(".add__comparsion").on("click", function(e) {
			e.preventDefault();
			$(this).toggleClass('add__comparsion--active');

	});
	$(".add__favorite").on("click", function(e) {
		e.preventDefault();
		$(this).toggleClass('add__favorite--active');
});
	});

    $(function() {

        $(".analog__item--toggle").on("click", function(e) {
						e.preventDefault();
						$(".analog__item--toggle").toggleClass('active');
            $(".analog__item--full").toggleClass('analog__item--show');
            if ($('.analog__item--toggle p').text() == 'Все характеристики') {
                $('.analog__item--toggle p').text('Скрыть характеристики');
            } else {
                $('.analog__item--toggle p').text('Все характеристики');
            }

        });

    });
});