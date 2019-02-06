
"use strict";

function Home() {
	this.init();
};

Home.prototype.init = function(){
	var self = this;  
	self.initSlick();
	self.animationContent();
};

Home.prototype.initSlick = function(){

	$(document).ready(function() {

		setTimeout(function(){
			$('.slickHome').slick({
				autoplay: true,
				arrows: false,
				autoplaySpeed: 4000,
				speed: 1000
			});
		}, 1500);

	});
}

Home.prototype.animationContent = function(){

	var speed = 'slow';
	var active = '.active';
	var width = $(window).width();
	var imgDesktop = '.img-desktop';


	if (width > 767) {

		var animationElements = function(){
			$(active).find(imgDesktop).fadeIn(speed);

			setTimeout(function(){
				$(active).find('.ball-left, .ball-rigth, .line').addClass('smileShow');
			}, 400)

			setTimeout(function(){
				$(active).find('.text h3').removeClass('textHide');
			}, 800)
		}

		$(document).ready(function() {

			setTimeout(function(){
				animationElements();
			}, 2500);
		});

		$('.slickHome').on('beforeChange', function(event, slick, currentSlide, nextSlide){

			$('.banner').removeClass('active');
			$('.banner').find('.img-desktop').fadeOut(speed);
			$('.banner').find('.ball-left, .ball-rigth, .line').removeClass('smileShow');
			$('.banner').find('.text h3').addClass('textHide');

		});

		$('.slickHome').on('afterChange', function(event, slick, currentSlide, nextSlide){

			$('.banner[data-slick='+currentSlide+']').addClass('active');
			animationElements();

		});
	} else{

		var animationElements = function(){
			$(active).find('.img-mobile').fadeIn(speed);

			setTimeout(function(){
				$(active).find('.text h3').fadeIn(speed);
			}, 400)

			setTimeout(function(){
				$(active).find('.text h3').removeClass('textHide');
			}, 500)
		};

		setTimeout(function(){
			animationElements();
		}, 2500);

		$('.slickHome').on('beforeChange', function(event, slick, currentSlide, nextSlide){

			$('.banner').removeClass('active');
			$('.banner').find('.img-mobile').fadeOut(speed);
			$('.banner').find('.text h3').addClass('textHide');

		});

		$('.slickHome').on('afterChange', function(event, slick, currentSlide, nextSlide){

			$('.banner[data-slick='+currentSlide+']').addClass('active');
			animationElements();

		});
	}

}

$(document).ready(function(){
	new Home();
});
