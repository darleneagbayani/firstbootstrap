// main js
// navbar scroll transparent to solid
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 500) {
      $(".navbar").addClass("bg-dark");
    } else {
      $(".navbar").removeClass("bg-dark");
    }
  });

(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 50) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});  
	
  })(jQuery); 


//scroll down arrow
document.onscroll = scroll;
	var $scrollDownArrow = $('#scrollDownArrow');
	var animateScrollDownArrow = function() {
		$scrollDownArrow.animate( {
			top: 5,
		}
		, 400, "linear", function() {
			$scrollDownArrow.animate( {
				top: -5,
			}
			, 400, "linear", function() {
				animateScrollDownArrow();
			}
			);
		});
	}
	animateScrollDownArrow();
	//Set Down Arrow Button
	jQuery('#scrollDownArrow').click(function(e) {
		e.preventDefault();
		jQuery.scrollTo("#story", 1000, {
			offset:-(jQuery('#header #menu').height()), axis:'y'
		}
		);
	});
	jQuery('.nav > li > a, #logo a').click(function(e) {
		e.preventDefault();

		jQuery.scrollTo(jQuery(this).attr('href'), 400, {
			offset:-(jQuery('#header #menu').height()), axis:'y'
		}
		);
	});