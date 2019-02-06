
"use strict";

function About() {
	this.init();
};

About.prototype.init = function(){
	var self = this;  
	self.pageTransition();
	self.animation();
};

About.prototype.animation = function(){

	if ($(window).width() > 767) {
		$(document).ready(function() {

			var target = $('h3, p, button');
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
	}

};

About.prototype.pageTransition = function(){

	$('#about .btnTransition').on('click', function(event) {
		event.preventDefault();
		if ($(window).width() > 767) {
			$('#whatGutta').prop('class', 'whatShow');
			setTimeout(function(){
				$('#whatGutta .spotWhat').fadeIn('slow');
			}, 400)
			setTimeout(function(){
				$('#whatGutta .iconsWhat').fadeIn('slow');
			}, 800)
			setTimeout(function(){
				$('#whatGutta .guttaWhat').fadeIn('slow');
			}, 1200)
			setTimeout(function(){
				$('#whatGutta .dnaWhat').slideDown(1500);
			}, 1600)
		} else {
			$('#whatGutta').slideDown('slow');
			$('#about').fadeOut('slow');
		}
	});

	$('#whatGutta .btnTransition').on('click', function(event) {
		event.preventDefault();
		if ($(window).width() > 767) {
			$('#whatGutta').prop('class', 'whatHide');
			setTimeout(function(){
				$('#whatGutta').find('.spotWhat, .iconsWhat, .guttaWhat, .dnaWhat').hide();
				$('#whatGutta').prop('class', '');
			}, 600)
		} else {
			$('#whatGutta').slideUp('slow');
			$('#about').show();
		}
	});

}

$(document).ready(function(){
	new About();
});
