
"use strict";

function Team() {
	this.init();
};

Team.prototype.init = function(){
	var self = this;  
	self.hoverImg();
	self.fadeTeam();
};

Team.prototype.hoverImg = function(){
	$('.carrousel').slick({
		infinite: false
	});
}

Team.prototype.fadeTeam = function(){
	var target = $('.teamIten');
	var animationClass = 'teamItenShow';
	var offset = $(window).height() - 100;

	function animeScroll(){
		var documentTop = $(document).scrollTop();

		target.each(function(index) {
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else{
				$(this).removeClass(animationClass);
			}
		});
	}

	setTimeout(function(){
		animeScroll();
	}, 3200);


	$(document).scroll(function() {
		animeScroll();
	});

}

$(document).ready(function(){
	new Team();
});
