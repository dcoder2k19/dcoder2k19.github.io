$(document).ready(function() {
	$('.header-toggle').on("click", function() {
        $('.header-menu').slideToggle(400, function() {
            if($(this).css('display') == 'none'){
        	    $('.header-menu').removeAttr('style');
            }
        });
    });
});