
"use strict";
var app;

function Main() {
	this.init();
};

Main.prototype.init = function(){
	var self = this;  
	self.galleryCustom();
	self.loadingPage();
	self.changeMenu();
	self.animationTitle();
};

Main.prototype.animationTitle = function(){

	if ($(window).width() > 767) {
		$(document).ready(function() {

			var target = $('.titleH1');
			var animationClass = 'animeTitle';
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

			}, 2700)

		});
	}
};

Main.prototype.changeMenu = function(){

	var classLink = $('#menu .active').closest('li').prop('class');
	$('#menu').prop('class', classLink);

	$('#menu a').mouseover(function(event) {
		var classLink = $(this).closest('li').prop('class');
		$('#menu').prop('class', classLink);
	});

	$('#header .iconMenu').on('click', function(event) {
		event.preventDefault();
		$('#menu').fadeIn('fast');
	});

	$('#header .btnMenu').on('click', function(event) {
		event.preventDefault();
		$('#menu').fadeOut('fast');
	});
}

Main.prototype.loadingPage = function(){

	$('body').css('overflow', 'hidden');

	$('#loadingPage').fadeIn('fast');

	$(document).ready(function() {

		$('body').fadeIn(2200);

		var linkLocation;

		$("#menu a, #header .logoMenu").click(function(event){
			event.preventDefault();

			linkLocation = $(this).attr('href');


			if ($(window).width() > 767) {
				$('#menu').fadeOut('fast');
				$('body').addClass('bodyHide');
			} 

			setTimeout(function(){

				window.location = linkLocation;

			}, 800)

		});

	});

	setTimeout(function(){

		if ($(window).width() < 768) {
			$('#loadingPage').fadeOut(500);
		} else{
			$('#loadingPage').addClass('loadingPageShow');
		}

		if ($('body#pageTeam').length) {
			$('body').css('overflow-y', 'auto');
		}
		if ($('.bodyTablet').length && $(window).width() < 992) {
			$('body').css('overflow-y', 'auto');
		}
		if ($('.bodyMobile').length && $(window).width() < 768) {
			$('body').css('overflow-y', 'auto');
		}
		
	}, 2500);

}

Main.prototype.galleryCustom = function(){
	var id = $('#galleryEditor');
	if (id.length > 0) {
		id.lightGallery({
			thumbnail:true
		}); 
	}
}

$(document).ready(function(){
	app = new Main();
});
