	jQuery(function( $ ){
    $(window).scroll(function() {
        var yPos = ( $(window).scrollTop() );

        if(yPos < 100) { // Show element after this amount of scrolled down pixels 

			$(".title-logo").fadeIn("fast");
		} else {
			$(".title-logo").fadeOut("fast");
		}
	});
});


	jQuery(function( $ ){
    $(window).scroll(function() {
        var yPos = ( $(window).scrollTop() );

        if(yPos < 50) { // Show element after this amount of scrolled down pixels 

			$(".title-text").fadeIn("fast");
		} else {
			$(".title-text").fadeOut("fast");
		}
	});
});
