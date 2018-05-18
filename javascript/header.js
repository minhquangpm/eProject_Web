$(document).ready(function() {
		    var FixNavBar = $('.nav-bar').offset().top;
		    var FixLogo = $('.logo').offset().top;
		    var FixBagItem = $('.bag-item').offset().top;
		    var stickyNav = function(){
		    var scrollTop = $(window).scrollTop();
		        if (scrollTop > FixNavBar) {
		            $('.sub-menu').addClass('fix-submenu');
		            $('.nav-bar').addClass('sticky');
		            $('.logo').addClass('hide');
		            $('.bag-item').addClass('fix-bag');
		        }
		        else {
		            $('.sub-menu').removeClass('fix-submenu');
		            $('.nav-bar').removeClass('sticky');
		            $('.logo').removeClass('hide');
		            $('.bag-item').removeClass('fix-bag');
		        }
		    };
		    $(window).scroll(function() {
		        stickyNav();
		    }); 
$(document).ready(function(){
		    $('.fa-bars').click(function(){
		        $('.sub-menu').toggleClass('active-menu');
		    });
		});
		$(document).ready(function(){
		    $('.brand-dropdown').click(function(){
		        $('.drop-menu').toggleClass('active-dropdown');
		    });
		});