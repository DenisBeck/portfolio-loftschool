
$(document).ready(function () {

	function tryError(button, input) {
		button.on('click', function(e) {
			e.preventDefault();

			if((input.val()) == '') {
				input.addClass('error');
				input.siblings('.elem__error').removeClass('hide');
			}
		})


		input.on('click', function() {
			$(this).removeClass('error');
			$(this).siblings('.elem__error').addClass('hide');
		})
	}

	var hideMenu = $('.hide-menu'),
		addWork = $('.empty').find('.empty__add'),
		closePopup = $('.popup').find('.popup__close'),
		lock = $('.lock'),
		inputNamePopup = $('.add-project__name input'),
		inputPicPopup = $('.add-project__pic input'),
		inputUrlPopup = $('.add-project__url input'),
		inputButtonPopup = $('.add-project__button input'),
		inputButtonAutorize = $('.autorize__button input'),
		inputNameAutorize = $('.autorize__name input'),
		inputPasswordAutorize = $('.autorize__password input');

	lock.on('click', function() {
		window.open('autorize.html')
		/*$(this).addClass('open');*/
	})

	hideMenu.on('click', function() {
		$this.find('.menu').eq(0).show();
	})

	if($('.container').is('#about')) 
		$('nav.menu .menu__list .menu__link:contains("Обо мне")').addClass('active');
	else if($('.container').is('#works')) 
		$('nav.menu .menu__list .menu__link:contains("Мои работы")').addClass('active');
	else if($('.container').is('#connect')) 
		$('nav.menu .menu__list .menu__link:contains("Связаться со мной")').addClass('active');

	addWork.on('click', function(e) {
		e.preventDefault();

		$('.popup').fadeIn('slow');
	})

	closePopup.on('click', function(e) {
		e.preventDefault();

		$('.popup').fadeOut('slow');
	})

	inputButtonPopup.on('click', function(e) {
		e.preventDefault();

		if((inputPicPopup.val()) == '') {
			inputPicPopup.siblings('.add-project__replace').addClass('error');
			inputPicPopup.siblings('.elem__error').removeClass('hide');
		}
	})

	inputPicPopup.on('click', function() {
		$(this).siblings('.add-project__replace').removeClass('error');
		$(this).siblings('.elem__error').addClass('hide');
	})
	inputPicPopup.on('change', function() {
		if ($(this).val()) {
			$(this).siblings('.add-project__replace').text($(this).val());
		} else {
			$(this).siblings('.add-project__replace').text('Загрузите изображение');
		}
		
	})

	tryError(inputButtonPopup, inputNamePopup);
	tryError(inputButtonPopup, inputUrlPopup);
	tryError(inputButtonAutorize, inputNameAutorize);
	tryError(inputButtonAutorize, inputPasswordAutorize);

})