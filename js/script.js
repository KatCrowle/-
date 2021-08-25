$(document).ready(function(){
		$(".select2").select2({width: '100%',});
		
		var swiper = new Swiper('.main_cover', {
			  spaceBetween: 0,
			  effect: 'fade',
			  loop: true,
			  autoplay: {
				 delay: 40000,
				},
			  speed: 3000,
		});
	
		$(".catalog_link").click(function(){
			$(this).toggleClass("catalog_link_close");
			$(".main_products").toggleClass("open");
		});
		$(".nav_link").click(function(){
			$(this).toggleClass("nav_link_close");
			$(".nav").toggleClass("open");
		});
		$(".close_link").click(function(){
			$('.main_products').removeClass("open");
		});
		$('.tabs').on('click', 'a:not(.active)', function() {
			$(this)
			  .addClass('active').removeClass('btn2').siblings().removeClass('active').addClass('btn2')
			  .closest('.subcategories').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
		});
		$(window).scroll(function(){
			if($(this).scrollTop() > 400) {
				$('a.to_top').addClass('visible');
			} else {
				$('a.to_top').removeClass('visible');
			}
		});
		$('a.to_top').click(function() {
			$('body,html').animate({scrollTop:0});
		});

		
});	
