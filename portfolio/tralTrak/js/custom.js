$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});

$(function(){

	if($('.marks-list').length){
		$slick_slider = $('.marks-list');
		settings = {
			arrows: false,
			dots: true,
			adaptiveHeight: true,
		}
		$slick_slider.slick(settings);

		// reslick only if it's not slick()
		$(window).on('resize load', function() {
			if ($(window).width() > 767) {
			  if ($slick_slider.hasClass('slick-initialized')) {
			    $slick_slider.slick('unslick');
			  }
			  return
			}

			if (!$slick_slider.hasClass('slick-initialized')) {
			  return $slick_slider.slick(settings);
			}
		});

	};

	if($('.machines-menu-slider').length){
		$machines_slider = $('.machines-menu-slider');
		machines_settings = {
			arrows: false,
			dots: true,
			adaptiveHeight: true,
		}
		$machines_slider.slick(machines_settings);

		// reslick only if it's not slick()
		$(window).on('resize load', function() {
			if ($(window).width() > 767) {
			  if ($machines_slider.hasClass('slick-initialized')) {
			    $machines_slider.slick('unslick');
			  }
			  return
			}

			if (!$machines_slider.hasClass('slick-initialized')) {
			  return $machines_slider.slick(machines_settings);
			}
		});

	};

	

    if($('.styler').length){
        $('.styler').styler();
    };

    if($('.tel-mask').length){
        $('.tel-mask').mask('+7(999)999-99-99');
    };

    $('.nav-toggle').click(function(){
    	$('.nav-content').addClass('show');
    	$('body').css({'position': 'fixed', 'width': '100%', 'overflow-y':'scroll'});	
    	return false;
    })
    $('.nav-close').click(function(){
    	$('.nav-content').removeClass('show');
    	$('body').removeAttr('style');
    	return false;
    })
    $('.js-minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.js-plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	$('.js-basket-close').click(function(){
		$(this).parents('.basket-table__item').fadeOut(1000, function(){$(this).remove()});
		return false;
	});

	var hf = function(){
		var h_header = $('header').height();
		var h_footer = $('footer').height();
		$('.content').css({
			'paddingBottom': h_footer
		});
		$('.page .content').css({
			'paddingTop': h_header + 60
		});
		$('.home').css({
			'paddingTop': h_header + 20
		});

	}

	$(window).bind('load resize', hf);

});

  
function initMap() {
    var coordinates = {lat: 54.704193, lng: 20.568370}, // Координаты центра карты 
        markerImg = 'img/marker.png', //  Иконка для маркера  
   
    // создаем карту и настраеваем 
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 18, // определяет первоначальный масштаб
        disableDefaultUI: true, // убирает элементы управления
        scrollwheel: false, // отключает масштабирование колесиком мыши (бывает полезно, если карта на всю ширину страницы и перебивает прокрутку вниз).
    	
    });

    // маркер
    marker = new google.maps.Marker({
        position: coordinates, // координаты маркера 
        map: map, //  ставим маркер в карту с id map
        animation: google.maps.Animation.DROP, // анимация маркера DROP / BOUNCE
        icon: markerImg,
    });


    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
        

    });

}

// Запускаем карту при загрузки страницы
google.maps.event.addDomListener(window, 'load', initMap); 


