
"use strict";

function Services() {
    this.init();
};

Services.prototype.init = function(){
    var self = this;  
    self.flipMobile();
};

Services.prototype.flipMobile = function(){
	if ($(window).width() < 992) {
		$('section#services .service-content').on('click', function(event) {
			event.preventDefault();
			$('section#services').find('.service-iten').css('transform', 'rotateY(0)');
			$(this).find('.service-iten').css('transform', 'rotateY(180deg)');
		});
	}
}

$(document).ready(function(){
    new Services();
});
