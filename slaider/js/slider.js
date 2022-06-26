$(function() {

	$(".rev-slider").slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 2000,
		slidesToScroll: 1,
		slidesToShow: 1,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				arrow: false
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrow: false
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrow: false
			  }
			}
		  ]
	})
})