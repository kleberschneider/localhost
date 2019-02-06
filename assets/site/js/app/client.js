
"use strict";

function Client() {
	this.init();
};

Client.prototype.init = function(){
	var self = this;  
	self.initSlick();
	self.animation();
};

Client.prototype.animation = function(){

	$(document).ready(function() {

		var target = $('.anime');
		var animationClass = 'fadeUp';
		var offset = $(window).height();

		function animeScroll(){
			var documentTop = $(document).scrollTop();

			target.each(function(index) {
				var itemTop = $(this).offset().top;
				$(this).addClass(animationClass);
			});
		}
		setTimeout(function(){

			animeScroll();

		}, 3000)

	});
};


Client.prototype.initSlick = function(){
	$('.carrousel').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				arrows: false,
				dots: true
			}
		}
		]
	});
}

$(document).ready(function(){
	new Client();
});
