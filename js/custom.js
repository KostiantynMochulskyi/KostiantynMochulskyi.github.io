$(function() {

	$('.js-accordion-title').on('click', function(e) {

		e.preventDefault();
		var $this = $( this );
		var $obj = $('.js-accordion-title');	
		

		if( !$this.hasClass('active-accordion') ){
			$('.js-accordion-innerList').slideUp();
			$('.js-accordion-title').removeClass('active-accordion');
			$obj.find('.left-side__accordion-title').removeClass('active-accordion-title');
		}	

		$( $this ).find('.left-side__accordion-title').toggleClass('active-accordion-title');
		$this.toggleClass('active-accordion');
		$this.next().slideToggle();
	});


	$('.left-side__logo-btn').on('click', function(e) {

		e.preventDefault();
		var leftSide = $('.left-side');

		
		if( leftSide.css('min-width') == '314px') {

			leftSide.css('min-width', '-=314px');
			$('.left-side__logo-btn').css('transform', 'rotate(180deg)').css('right', '-48px');
			$('.left-side__logotype-container').css('display', 'none');
			$('.left-side__user-block').css('display', 'none');
			$('.left-side__general').css('display', 'none');
			$('.left-side__elements').css('display', 'none');
			
		}
		
		else {

			leftSide.css('min-width', '314px');
			$('.left-side__logo-btn').css('transform', 'rotate(360deg)').css('right', '-19px');;
			$('.left-side__logotype-container').css('display', 'flex');
			$('.left-side__user-block').css('display', 'flex');
			$('.left-side__general').css('display', 'block');
			$('.left-side__elements').css('display', 'block');
		}


	});

	$('.main-header__search-iconBlock').on('click', function(e) {

		e.preventDefault();

		$('.main-header__search-form').toggleClass('main-header__search-form-active');
		$('.main-header__search-input').toggleClass('main-header__search-input-active').focus();
	});

	$('.main-header__mail-block').on('click', function(e) {

		e.preventDefault();

		$('.main-header__mail-innerBlock').toggleClass('main-header__mail-innerBlock-active');
		
	});

	$('.headerBlocks__graph-arrow--js').on('click', function(e) {

		e.preventDefault();

		$('.graph-container').toggleClass('graph-container--inactive');
		$('.headerBlocks__graph-arrow--js').toggleClass('headerBlocks-btnItems--rotate');


	});

	$('.headerBlocks__top-search-arrow--js').on('click', function(e) {

		e.preventDefault();

		$('.top-search__container').toggleClass('top-search-container--inactive');
		$('.headerBlocks__top-search-arrow--js').toggleClass('headerBlocks-btnItems--rotate');


		if( !$('.blocks-container__search-traffic--js').hasClass('blocks-container--align-start') ){
			$('.blocks-container__search-traffic--js').addClass('blocks-container--align-start');
		}
		else{
			$('.blocks-container__search-traffic--js').removeClass('blocks-container--align-start')
		};
	});


	$('.headerBlocks__traffic-sources-arrow--js').on('click', function(e) {

		e.preventDefault();

		$('.traffic-sources__block').toggleClass('traffic-sources__block--inactive');
		$('.headerBlocks__traffic-sources-arrow--js').toggleClass('headerBlocks-btnItems--rotate');
		$('.traffic-sources').toggleClass('traffic-sources--no-height');


		if( !$('.blocks-container__search-traffic--js').hasClass('blocks-container--align-start') ){
			$('.blocks-container__search-traffic--js').addClass('blocks-container--align-start');
		}
		else{
			$('.blocks-container__search-traffic--js').removeClass('blocks-container--align-start')
		};
	});

	$('.headerBlocks__recent-order-arrow--js').on('click', function(e) {

		e.preventDefault();

		$('.recent-order__table-wrapper').toggleClass('recent-order__table-wrapper--inactive');
		$(this).toggleClass('headerBlocks-btnItems--rotate');


	});


	$('.headerBlocks__site-visits-arrow--js').on('click', function(e) {

		e.preventDefault();

		$('.site-visits__canvas-wrapper').toggleClass('site-visits__canvas-wrapper--inactive');
		$('.headerBlocks__site-visits-arrow--js').toggleClass('headerBlocks-btnItems--rotate');


		if( !$('.blocks-container__visits-campaign--js').hasClass('blocks-container--align-start') ){
			$('.blocks-container__visits-campaign--js').addClass('blocks-container--align-start');
		}
		else{
			$('.blocks-container__visits-campaign--js').removeClass('blocks-container--align-start')
		};
	});

	$('.headerBlocks__campaign-arrow--js').on('click', function(e) {

		e.preventDefault();

		$('.marketing-campaign__canvas-wrapper').toggleClass('marketing-campaign__canvas-wrapper--inactive');
		$('.headerBlocks__campaign-arrow--js').toggleClass('headerBlocks-btnItems--rotate');


		if( !$('.blocks-container__visits-campaign--js').hasClass('blocks-container--align-start') ){
			$('.blocks-container__visits-campaign--js').addClass('blocks-container--align-start');
		}
		else{
			$('.blocks-container__visits-campaign--js').removeClass('blocks-container--align-start')
		};
	});

});



window.onload = function (){

	var direc = document.getElementsByClassName('traffic-sources__item--directCanvas');
	var ctx_direc = direc[0].getContext('2d');

	ctx_direc.fillStyle = '#bdceff';
	ctx_direc.strokeStyle = '#3785f5';

	ctx_direc.beginPath();
	ctx_direc.moveTo(0,24);
	ctx_direc.lineTo(10,13);
	ctx_direc.lineTo(21,23);
	ctx_direc.lineTo(52,6);
	ctx_direc.lineTo(74,12);
	ctx_direc.lineTo(84,2);
	ctx_direc.lineTo(94,8);
	ctx_direc.lineTo(94,24);
	ctx_direc.closePath();
	ctx_direc.fill();


	ctx_direc.beginPath();
	ctx_direc.moveTo(0,24);
	ctx_direc.lineTo(10,13);
	ctx_direc.lineTo(21,23);
	ctx_direc.lineTo(52,6);
	ctx_direc.lineTo(74,12);
	ctx_direc.lineTo(84,2);
	ctx_direc.lineTo(94,8);
	ctx_direc.stroke();


	var refer = document.getElementsByClassName('traffic-sources__item--referCanvas');
	var ctx_refer = refer[0].getContext('2d');

	ctx_refer.fillStyle = '#adefef';
	ctx_refer.strokeStyle = '#00cccc';

	ctx_refer.beginPath();
	ctx_refer.moveTo(0,24);
	ctx_refer.lineTo(10,13);
	ctx_refer.lineTo(21,23);
	ctx_refer.lineTo(32,15);
	ctx_refer.lineTo(52,20);
	ctx_refer.lineTo(63,11);
	ctx_refer.lineTo(74,12);
	ctx_refer.lineTo(84,2);
	ctx_refer.lineTo(94,8);
	ctx_refer.lineTo(94,24);
	ctx_refer.closePath();
	ctx_refer.fill();


	ctx_refer.beginPath();
	ctx_refer.moveTo(0,24);
	ctx_refer.lineTo(10,13);
	ctx_refer.lineTo(21,23);
	ctx_refer.lineTo(32,15);
	ctx_refer.lineTo(52,20);
	ctx_refer.lineTo(63,11);
	ctx_refer.lineTo(74,12);
	ctx_refer.lineTo(84,2);
	ctx_refer.lineTo(94,8);
	ctx_refer.stroke();


	var social = document.getElementsByClassName('traffic-sources__item--socialCanvas');
	var ctx_social = social[0].getContext('2d');

	ctx_social.fillStyle = '#fae3b0';
	ctx_social.strokeStyle = '#f1a80a';

	ctx_social.beginPath();
	ctx_social.moveTo(0,24);
	ctx_social.lineTo(10,13);
	ctx_social.lineTo(21,23);
	ctx_social.lineTo(41,6);
	ctx_social.lineTo(59,10);
	ctx_social.lineTo(69,18);
	ctx_social.lineTo(84,2);
	ctx_social.lineTo(94,8);
	ctx_social.lineTo(94,24);
	ctx_social.closePath();
	ctx_social.fill();


	ctx_social.beginPath();
	ctx_social.moveTo(0,24);
	ctx_social.lineTo(10,13);
	ctx_social.lineTo(21,23);
	ctx_social.lineTo(41,6);
	ctx_social.lineTo(59,10);
	ctx_social.lineTo(69,18);
	ctx_social.lineTo(84,2);
	ctx_social.lineTo(94,8);
	ctx_social.stroke();

	var search = document.getElementsByClassName('traffic-sources__item--searchCanvas');
	var ctx_search = search[0].getContext('2d');

	ctx_search.fillStyle = '#d8edd3';
	ctx_search.strokeStyle = '#85c875';

	ctx_search.beginPath();
	ctx_search.moveTo(0,24);
	ctx_search.lineTo(0,5);
	ctx_search.lineTo(10,13);
	ctx_search.lineTo(21,23);
	ctx_search.lineTo(52,6);
	ctx_search.lineTo(74,12);
	ctx_search.lineTo(84,2);
	ctx_search.lineTo(94,8);
	ctx_search.lineTo(94,24);
	ctx_search.closePath();
	ctx_search.fill();


	ctx_search.beginPath();
	ctx_search.moveTo(0,5);
	ctx_search.lineTo(10,13);
	ctx_search.lineTo(21,23);
	ctx_search.lineTo(52,6);
	ctx_search.lineTo(74,12);
	ctx_search.lineTo(84,2);
	ctx_search.lineTo(94,8);
	ctx_search.stroke();


	var internal = document.getElementsByClassName('traffic-sources__item--internalCanvas');
	var ctx_internal = internal[0].getContext('2d');

	ctx_internal.fillStyle = '#ffcebd';
	ctx_internal.strokeStyle = '#ff6633';

	ctx_internal.beginPath();
	ctx_internal.moveTo(0,24);
	ctx_internal.lineTo(10,13);
	ctx_internal.lineTo(21,23);
	ctx_internal.lineTo(32,15);
	ctx_internal.lineTo(52,20);
	ctx_internal.lineTo(63,11);
	ctx_internal.lineTo(74,12);
	ctx_internal.lineTo(84,2);
	ctx_internal.lineTo(94,8);
	ctx_internal.lineTo(94,24);
	ctx_internal.closePath();
	ctx_internal.fill();


	ctx_internal.beginPath();
	ctx_internal.moveTo(0,24);
	ctx_internal.lineTo(10,13);
	ctx_internal.lineTo(21,23);
	ctx_internal.lineTo(32,15);
	ctx_internal.lineTo(52,20);
	ctx_internal.lineTo(63,11);
	ctx_internal.lineTo(74,12);
	ctx_internal.lineTo(84,2);
	ctx_internal.lineTo(94,8);
	ctx_internal.stroke();


	var visits = document.getElementsByClassName('site-visits__canvas');
	var ctx_visits = visits[0].getContext('2d');

	ctx_visits.strokeStyle = '#b1b1b1';

	ctx_visits.setLineDash([4, 2]);
	ctx_visits.lineDashOffset = 1;
	ctx_visits.lineWidth = 1;

	ctx_visits.beginPath();
	ctx_visits.moveTo(0,250);
	ctx_visits.lineTo(480, 250);
	ctx_visits.stroke();

	ctx_visits.beginPath();
	ctx_visits.moveTo(79,250);
	ctx_visits.lineTo(79, 60);
	ctx_visits.stroke();

	ctx_visits.beginPath();
	ctx_visits.moveTo(158,250);
	ctx_visits.lineTo(158, 60);
	ctx_visits.stroke();

	ctx_visits.beginPath();
	ctx_visits.moveTo(237,250);
	ctx_visits.lineTo(237, 60);
	ctx_visits.stroke();

	ctx_visits.beginPath();
	ctx_visits.moveTo(316,250);
	ctx_visits.lineTo(316, 60);
	ctx_visits.stroke();

	ctx_visits.beginPath();
	ctx_visits.moveTo(395,250);
	ctx_visits.lineTo(395, 60);
	ctx_visits.stroke();

	ctx_visits.fillStyle = '#00cccc';
	ctx_visits.fillRect(20, 19, 18, 7);

	ctx_visits.fillStyle = '#777777';
	ctx_visits.font = '14px latoregular';
	ctx_visits.fillText("New Visitors", 50, 26);

	ctx_visits.fillStyle = '#00cccc';
	ctx_visits.fillRect(25, 273, 4, 17);
	ctx_visits.fillRect(30, 281, 4, 9);
	ctx_visits.fillRect(35, 263, 4, 27);
	ctx_visits.fillRect(40, 271, 4, 19);
	ctx_visits.fillRect(45, 273, 4, 17);
	ctx_visits.fillRect(50, 263, 4, 27);
	ctx_visits.fillRect(55, 268, 4, 22);
	ctx_visits.fillRect(60, 281, 4, 9);
	ctx_visits.fillRect(65, 273, 4, 17);
	ctx_visits.fillRect(70, 284, 4, 6);

	ctx_visits.fillStyle = '#777777';
	ctx_visits.font = '14px latoregular';
	ctx_visits.fillText('New Visitors', 120, 271);
	ctx_visits.font = '16px latobold';
	ctx_visits.fillText('12,202', 120, 291);

	ctx_visits.fillStyle = '#f1a80a';
	ctx_visits.fillRect(20, 35, 18, 7);

	ctx_visits.fillStyle = '#777777';
	ctx_visits.font = '14px latoregular';
	ctx_visits.fillText('Old Visitors', 50, 42);

	ctx_visits.fillStyle = '#f1a80a';
	ctx_visits.fillRect(245, 273, 4, 17);
	ctx_visits.fillRect(250, 281, 4, 9);
	ctx_visits.fillRect(255, 263, 4, 27);
	ctx_visits.fillRect(260, 271, 4, 19);
	ctx_visits.fillRect(265, 273, 4, 17);
	ctx_visits.fillRect(270, 263, 4, 27);
	ctx_visits.fillRect(275, 268, 4, 22);
	ctx_visits.fillRect(280, 281, 4, 9);
	ctx_visits.fillRect(285, 273, 4, 17);
	ctx_visits.fillRect(290, 284, 4, 6);

	ctx_visits.fillStyle = '#777777';
	ctx_visits.font = '14px latoregular';
	ctx_visits.fillText('Old Visitor', 340, 271);
	ctx_visits.font = '16px latobold';
	ctx_visits.fillText('25,051', 340, 291);

	ctx_visits.strokeStyle = '#00cccc';
	ctx_visits.setLineDash([]);

	ctx_visits.beginPath();
	ctx_visits.lineWidth = 4;
	ctx_visits.moveTo(27,234);
	ctx_visits.lineTo(155,150);
	ctx_visits.lineTo(277,133);
	ctx_visits.lineTo(355,63);
	ctx_visits.lineTo(460,70);
	ctx_visits.stroke();

	ctx_visits.fillStyle = 'white';

	ctx_visits.beginPath();
	ctx_visits.arc(27, 234, 10, 0, 2 * Math.PI);
	ctx_visits.shadowColor = '#dfdfdf';
	ctx_visits.shadowBlur = 10;
	ctx_visits.shadowOffsetX = 0;
	ctx_visits.shadowOffsetY = 0;
	ctx_visits.fill();

	ctx_visits.beginPath();
	ctx_visits.arc(155, 150, 10, 0, 2 * Math.PI);
	ctx_visits.shadowColor = '#dfdfdf';
	ctx_visits.shadowBlur = 10;
	ctx_visits.shadowOffsetX = 0;
	ctx_visits.shadowOffsetY = 0;
	ctx_visits.fill();

	ctx_visits.beginPath();
	ctx_visits.arc(277, 133, 10, 0, 2 * Math.PI);
	ctx_visits.shadowColor = '#dfdfdf';
	ctx_visits.shadowBlur = 10;
	ctx_visits.shadowOffsetX = 0;
	ctx_visits.shadowOffsetY = 0;
	ctx_visits.fill();

	ctx_visits.beginPath();
	ctx_visits.arc(355, 63, 10, 0, 2 * Math.PI);
	ctx_visits.shadowColor = '#dfdfdf';
	ctx_visits.shadowBlur = 10;
	ctx_visits.shadowOffsetX = 0;
	ctx_visits.shadowOffsetY = 0;
	ctx_visits.fill();

	ctx_visits.beginPath();
	ctx_visits.arc(460, 70, 10, 0, 2 * Math.PI);
	ctx_visits.shadowColor = '#dfdfdf';
	ctx_visits.shadowBlur = 10;
	ctx_visits.shadowOffsetX = 0;
	ctx_visits.shadowOffsetY = 0;
	ctx_visits.fill();

	ctx_visits.fillStyle = '#00cccc';

	ctx_visits.beginPath();
	ctx_visits.arc(27, 234, 6, 0, 2 * Math.PI);
	ctx_visits.fill();

	ctx_visits.beginPath();
	ctx_visits.arc(155, 150, 6, 0, 2 * Math.PI);
	ctx_visits.fill();

	ctx_visits.beginPath();
	ctx_visits.arc(277, 133, 6, 0, 2 * Math.PI);
	ctx_visits.fill();

	ctx_visits.beginPath();
	ctx_visits.arc(355, 63, 6, 0, 2 * Math.PI);
	ctx_visits.fill();

	ctx_visits.beginPath();
	ctx_visits.arc(460, 70, 6, 0, 2 * Math.PI);
	ctx_visits.fill();



	ctx_visits.strokeStyle = '#f1a80a';
	ctx_visits.setLineDash([]);

	ctx_visits.beginPath();
	ctx_visits.lineWidth = 4;
	ctx_visits.moveTo(25,211);
	ctx_visits.lineTo(123,194);
	ctx_visits.lineTo(215,200);
	ctx_visits.lineTo(290,80);
	ctx_visits.lineTo(385,160);
	ctx_visits.lineTo(460,100);
	ctx_visits.stroke();

	ctx_visits.fillStyle = 'white';

	ctx_visits.beginPath();
	ctx_visits.arc(25, 211, 10, 0, 2 * Math.PI);
	ctx_visits.shadowColor = '#dfdfdf';
	ctx_visits.shadowBlur = 10;
	ctx_visits.shadowOffsetX = 0;
	ctx_visits.shadowOffsetY = 0;
	ctx_visits.fill();

	ctx_visits.beginPath();
	ctx_visits.arc(123, 194, 10, 0, 2 * Math.PI);
	ctx_visits.shadowColor = '#dfdfdf';
	ctx_visits.shadowBlur = 10;
	ctx_visits.shadowOffsetX = 0;
	ctx_visits.shadowOffsetY = 0;
	ctx_visits.fill();

	ctx_visits.beginPath();
	ctx_visits.arc(215, 200, 10, 0, 2 * Math.PI);
	ctx_visits.shadowColor = '#dfdfdf';
	ctx_visits.shadowBlur = 10;
	ctx_visits.shadowOffsetX = 0;
	ctx_visits.shadowOffsetY = 0;
	ctx_visits.fill();

	ctx_visits.beginPath();
	ctx_visits.arc(290, 80, 10, 0, 2 * Math.PI);
	ctx_visits.shadowColor = '#dfdfdf';
	ctx_visits.shadowBlur = 10;
	ctx_visits.shadowOffsetX = 0;
	ctx_visits.shadowOffsetY = 0;
	ctx_visits.fill();

	ctx_visits.beginPath();
	ctx_visits.arc(385, 160, 10, 0, 2 * Math.PI);
	ctx_visits.shadowColor = '#dfdfdf';
	ctx_visits.shadowBlur = 10;
	ctx_visits.shadowOffsetX = 0;
	ctx_visits.shadowOffsetY = 0;
	ctx_visits.fill();

	ctx_visits.beginPath();
	ctx_visits.arc(460, 100, 10, 0, 2 * Math.PI);
	ctx_visits.shadowColor = '#dfdfdf';
	ctx_visits.shadowBlur = 10;
	ctx_visits.shadowOffsetX = 0;
	ctx_visits.shadowOffsetY = 0;
	ctx_visits.fill();

	ctx_visits.fillStyle = '#f1a80a';

	ctx_visits.beginPath();
	ctx_visits.arc(25, 211, 6, 0, 2 * Math.PI);
	ctx_visits.fill();

	ctx_visits.beginPath();
	ctx_visits.arc(123, 194, 6, 0, 2 * Math.PI);
	ctx_visits.fill();

	ctx_visits.beginPath();
	ctx_visits.arc(215, 200, 6, 0, 2 * Math.PI);
	ctx_visits.fill();

	ctx_visits.beginPath();
	ctx_visits.arc(290, 80, 6, 0, 2 * Math.PI);
	ctx_visits.fill();

	ctx_visits.beginPath();
	ctx_visits.arc(385, 160, 6, 0, 2 * Math.PI);
	ctx_visits.fill();

	ctx_visits.beginPath();
	ctx_visits.arc(460, 100, 6, 0, 2 * Math.PI);
	ctx_visits.fill();

	var campaing = document.getElementsByClassName('marketing-campaign__canvas');
	var ctx_campaing = campaing[0].getContext('2d');

	var myDoughnutChart = new Chart(ctx_campaing, {
	type: 'doughnut',
    data: {
    	labels: ['Research','Information','Product Design','Packaging'],
    	datasets: [{
    		label: 'Percentage',
            data: [62, 17, 13, 8],
            backgroundColor: ['#85c875','#0bc4df','#1e75eb','#f1a80a'],
            hoverBackgroundColor: ['#88cc77','#0ed4f1','#3689f8','#fcb315']
        }]
    },
    options: {
    	cutoutPercentage: 60,
    	responsive: false,
    	animation: {
    		animateRotate : false,
			animateScale : false
    	}
	}
    
	});
};



