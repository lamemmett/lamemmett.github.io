$(document).ready(function(){
	
	// Page fade-in
	$(".wrapper, nav").css("opacity", 1);
	
	// Add smooth scrolling to all links
	$(".navbar a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 500, function(){

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		}
	});
	
	$(window).scroll(function() {
		var scrollPos = $(window).scrollTop();
		var topofDiv = $("#skills").offset().top - ($("#skills").outerHeight() * .75);
		
		if (scrollPos > topofDiv) {
			// Fill in skills bars
			$(".skill-bar-inner").each(function() {
				$(this).css("width", $(this).data("width"));
			});
		}
	});
});