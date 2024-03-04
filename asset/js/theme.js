;(function ($) {
	'use strict';

	const handleSwiper = function (elm, obj = {}) {
		return new Swiper(elm, {
			loop: true,
			speed: 1000,
			autoplay: {
				delay: 8000,
				disableOnInteraction: true,
			},
			slidesPerView: 1,
			...obj
		});
	}

	const handleSwiperImage = function () {
		const slider = $('#swiper-image');
		if (slider.length > 0) {
			const elmSwiper = '#' + slider.attr('id')
			const objSwiper = {
				slidesPerView: 1,
				spaceBetween: 10,
				autoplay: false,
				navigation: {
					nextEl: elmSwiper + " .slider-button_next",
					prevEl: elmSwiper + " .slider-button_prev",
				},
			}
			handleSwiper(elmSwiper + ' .swiper', objSwiper)
		}
	}

	const handleDetailProduct = function () {
		let sliderAvatar = $('#image-avatar');
		let sliderThumb = $('#image-thumb');

		if (sliderAvatar.length > 0) {
			let initSliderThumb;
			if (sliderThumb.length) {
				const elmSwiperThumb = '#' + sliderThumb.attr('id')
				const objSwiperThumb = {
					slidesPerView: 3,
					spaceBetween: 10,
					breakpoints: {
						320: {
							slidesPerView: 1.5,
						},
						768: {
							slidesPerView: 2.5,
						},
						991: {
							slidesPerView: 3,
						},
						1199: {
							slidesPerView: 3,
						}
					},
					autoplay: false,
					loop: false
				}
				initSliderThumb = handleSwiper(elmSwiperThumb + ' .swiper', objSwiperThumb);
			}


			const elmSwiperAvatar = '#' + sliderAvatar.attr('id')
			const objSwiperAvatar = {
				navigation: {
					nextEl: elmSwiperAvatar + " .slider-button_next",
					prevEl: elmSwiperAvatar + " .slider-button_prev",
				},
			}

			if (typeof initSliderThumb !== 'undefined') {
				objSwiperAvatar.thumbs = {
					swiper: initSliderThumb,
				}
			}

			handleSwiper(elmSwiperAvatar + ' .swiper', objSwiperAvatar);


		}
	}

	const handleLogin = function () {
		let callLogin = $('#call-login');
		let closeLogin = $('#close-login');

		if (callLogin.length) {
			callLogin.click(function () {
				$('body').addClass('show-login');
				if ($('.bg-overplay').length) {
					$('.bg-overplay').click(function () {
						$('body').removeClass('show-login');
					});
				}
			});
		}

		if (closeLogin.length) {
			closeLogin.click(function () {
				$('body').removeClass('show-login');
			});
		}

		$('#show-register').click(function (e) {
			e.preventDefault()
			$('.section-login').addClass('show-register');
			$('.login-form').css({
				'left': '-100%',
				'opacity': '0'
			})
		});

		$('#show-login').click(function (e) {
			e.preventDefault()
			$('.section-login').removeClass('show-register');
			$('.login-form').css({
				'left': '0',
				'opacity': '1'
			})
		});
	}
	const handleCart = function () {
		let callCart = $('#call-cart');
		let closeCart = $('#close-cart');

		if (callCart.length) {
			callCart.click(function () {
				$('body').addClass('show-floating-cart');

				if ($('.bg-overplay').length) {
					$('.bg-overplay').click(function () {
						$('body').removeClass('show-floating-cart');
					});
				}
			});
		}

		if (closeCart.length) {
			closeCart.click(function () {
				$('body').removeClass('show-floating-cart');
			});
		}


	}

	$('#result-search').hide();
	const handleCallSearch = function () {
		let callSearch = $('#call-search');
		if (callSearch.length) {
			callSearch.click(function () {
				$('body').toggleClass('show-search');
			})
		}


		let inputSearch = $('#input-search');
		if (inputSearch.length) {
			inputSearch.keyup(function () {
				$('#result-search').show();
			})
		}
	}

	const handleCallHeader = function () {
		let callBtnHeader = $('#call-header');

		callBtnHeader.click(function () {
			if($('body').hasClass('show-search')){
				$('body').removeClass('show-search').toggleClass('show-header');
			}else{
				$('body').toggleClass('show-header');
			}

		})
	}

	const handleSliderProduct = function () {
		new Swiper('#product-related .swiper', {
			speed: 1000,
			spaceBetween: 15,
			loop:true,
			navigation: {
				nextEl: '#product-related .button-next',
				prevEl: '#product-related .button-prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 1.4,
				},
				600: {
					slidesPerView: 2.4,
				},
				1200: {
					slidesPerView: 4.5,
				}
			}
		});
	}



	$(document).ready(function () {
		handleSwiperImage();
		handleDetailProduct();
		handleLogin();
		handleCart();
		handleCallSearch();
		handleCallHeader();
		handleSliderProduct();
	});

	$(document).on('click', function (event) {
		if (!event.target.closest('#call-header') && !event.target.closest('.header-nav')) {
			$('body').removeClass('show-header');
		}
	});


})(jQuery);
