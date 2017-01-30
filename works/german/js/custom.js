$(function() {

	$('.main-header__nav-plus').on('click', function(e) {
		var navigat = $('.main-header__nav'),
			list = $('.main-header__nav-list');
		e.preventDefault();
		if(navigat.hasClass('main-header__nav--opened')){
			navigat.removeClass('main-header__nav--opened');
			navigat.addClass('main-header__nav--closed-animaton');
			list.removeClass('main-header__nav-list--opened');
		}
		else{
			navigat.removeClass('main-header__nav--closed-animaton');
			navigat.addClass('main-header__nav--opened');
			list.addClass('main-header__nav-list--opened');
		}
	
	});


	$('.top__btn').on('click', function(e) {

		e.preventDefault();

		$('.top__btn--active').removeClass('top__btn--active');
		$(e.target).addClass('top__btn--active');
	
	});


	$('.regions__item').hover( 

		function(e) {
			e.preventDefault();
			$(e.target).siblings('.regions__item-hover').addClass('regions__item-hover--active');
		},
		function(e) {
			e.preventDefault();
			$('.regions__item-hover').removeClass('regions__item-hover--active');
		}
	);

	$('#slider--js').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
	});



});	