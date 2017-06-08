$(document).ready(function(){
	var skillsFilled = false;
	var isScrolling = false;
	
	// Page fade-in
	$(".wrapper, nav").css("opacity", 1);
	
	// Add smooth scrolling and active state handling to all links
	$(".navbar a").on('click', function(event) {
		$(".navbar-menu li").removeClass("active");
		
		$(this).parent().addClass("active");
		
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			isScrolling = true;
			
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
			scrollTop: ($(hash).offset().top - 60)
			}, 500, function(){
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
				
				isScrolling = false;
			});
		}
	});
	
	$(window).scroll(function() {
		var scrollPos = $(window).scrollTop() + 61;
		var topofDiv;
		
		// Fill skill bars when scrolled to
		if (!skillsFilled) {
			topofDiv = $("#skills").offset().top - ($("#skills").outerHeight() * .75);
			
			if (scrollPos > topofDiv) {
				$(".skill-bar-inner").each(function() {
					$(this).css("width", $(this).data("width"));
				});
				
				skillsFilled = true;
			}
		}
		
		if (!isScrolling) {
			if ( (scrollPos > $("#projects").offset().top) ||
				 (scrollPos - 61 + $(window).height() > $(document).height())) {
				$(".navbar-menu li").removeClass("active");
				$("#projects-tab").addClass("active");
			} else if (scrollPos > $("#skills").offset().top) {
				$(".navbar-menu li").removeClass("active");
				$("#skills-tab").addClass("active");
			} else if (scrollPos > $("#experience").offset().top) {
				$(".navbar-menu li").removeClass("active");
				$("#experience-tab").addClass("active");
			} else if (scrollPos > $("#profile").offset().top) {
				$(".navbar-menu li").removeClass("active");
				$("#profile-tab").addClass("active");
			}
		}
	});
	
	// Otherwise fill in skills bars if screen set there initially
	(function() {
		var scrollPos = $(window).scrollTop();
		var topofDiv = $("#skills").offset().top - ($("#skills").outerHeight() * .75);
		
		if (scrollPos > topofDiv) {
			// Fill in skills bars
			$(".skill-bar-inner").each(function() {
				$(this).css("width", $(this).data("width"));
			});
		}
	})();
});