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

	const handleImageProduct = function () {
		let sliderAvatar = $('#detail-avatar');
		let sliderThumb = $('#detail-thumb');

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

	$(document).ready(function () {

		handleImageProduct();

	});
})(jQuery);
