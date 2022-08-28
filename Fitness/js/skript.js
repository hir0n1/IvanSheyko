$(document).ready(function() {

    const swiper1 = new Swiper('.swiper1', {
        speed: 400,
        spaceBetween: 30,
        loop: true,

        navigation: {
            nextEl: '.arrows__right_services',
            prevEl: '.arrows__left_services',
          },

        slidesPerView: 4,
      });
   
	const swiper2 = new Swiper('.swiper2', {
        speed: 400,
        spaceBetween: 82,
        loop: false,
		slidesPerView: 3,
		spaceBetween: 82,
		initialSlide: 1,
		centeredSlides: true,

        navigation: {
            nextEl: '.arrows__right_instructors',
            prevEl: '.arrows__left_instructors',
          },
		
		slideActiveClass: 'swiper-active',
    	slideNextClass: 'swiper-next',
		slidePrevClass: 'swiper-prev',
      });

	const testomonial__swiper = new Swiper('.testomonial__swiper', {
        speed: 400,
        loop: true,
		slidesPerView: 1,
		spaceBetween: 60,

        navigation: {
            nextEl: '.arrows__right_testomonial',
            prevEl: '.arrows__left_testomonial',
        },	
    });

    //modal-video

    var $close = $('.modal__close');
    var $modal = $('.modal');
    var $play = $('.header__play');

    $play.on('click', function () {
        $modal.fadeIn()
    });
    $close.on('click', function () {
        $modal.fadeOut()
    });
});