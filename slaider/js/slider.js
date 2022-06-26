$(function() {

	$(".rev-slider").slick({
		arrows: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 2000,
		responsive: [
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			  }
			}
	]
	
	})
})