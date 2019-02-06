
"use strict";
var app;

function Contact() {
	this.init();
};

Contact.prototype.init = function(){
	var self = this;  
	self.send_form();
	self.animation();
	self.modal();
};

Contact.prototype.animation = function(){

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

Contact.prototype.modal = function(){
	$('[data-modalclose], .overlay').on('click', function(event) {
		event.preventDefault();
		$('.modal').fadeOut('slow');
	});
}

Contact.prototype.send_form = function(){

	if ($('.form-send').length) {

		$('.form-send').each(function(index, el) {

			$(this).validate({
				errorPlacement: function(error, element) {
					return false;
				},
				submitHandler: function(form){
					$.ajax({
						type        : $(form).attr('method'),
						url         : $(form).attr('action'),
						data        : $(form).serialize(),
						dataType    : "json",
						beforeSend: function(){

							$(form).find('input,button').prop("disabled", true);

						},
						success:function(data) {

							if (data.status) {

								$('.content-modal').removeClass('content-error');
								$('.content-modal').addClass('content-success');
								$('.modal h3').text('Obrigado!');
								$('.modal p').html('Sua mensagem foi enviada <br/> com sucesso.');
								$('.modal').fadeIn('slow');

								$(form).find('input, button').prop("disabled", false);

								form.reset();

							}else{

								$('.content-modal').removeClass('content-success');
								$('.content-modal').addClass('content-error');
								$('.modal h3').text('OOOPS...');
								// $('.modal p').text('Os desenvolvedores estão implementando o disparo de e-mails.');
								$('.modal p').text('Erro ao enviar mensagem.');
								$('.modal').fadeIn('slow');

								$(form).find('input,button').prop("disabled", false);

							}
						},
						error:function(){

							$('.content-modal').removeClass('content-success');
							$('.content-modal').addClass('content-error');
							$('.modal h3').text('OOOPS...');
							// $('.modal p').text('Os desenvolvedores estão implementando o disparo de e-mails.');
							$('.modal p').text('Erro ao enviar mensagem.');
							$('.modal').fadeIn('slow');

							$(form).find('input,button').prop("disabled", false);

						}
					});
				}
			});
		});

	}

}

$(document).ready(function(){
	app = new Contact();
});
