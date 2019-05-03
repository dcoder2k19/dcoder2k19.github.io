$(document).ready(function() {

	$('.header-toggle').on("click", function() {
        $('.header-menu').slideToggle(400, function() {
            if($(this).css('display') == 'none'){
        	    $('.header-menu').removeAttr('style');
            }
        });
    });

    $('.scroll').click( function() {
	var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
	    return false;
    });

    $(window).scroll(function() {
    	if($(document).scrollTop() > 700) {
    		$('.arrow-top').css('display', 'flex');
    	} else {
    		$('.arrow-top').css('display', 'none');
    	}
    });
	$("#submit").on("click", function() {
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		if(name != 0 && email != 0 && message != 0){
			$.ajax({
				url: "https://the-darks.000webhostapp.com/form.php",
				type: "post",
				data: {
					"name": name,
					"email": email,
					"message": message
				},
				success: function(data) {
					$("#msg").html('<div class="green">Succes!</div>');
					$("#name").val('');
					$("#email").val('');
					$("#message").val('');
				}
			});
		}else{
			$("#msg").html('<div class="red">Fill in all the fields</div>');
		}
	});
});