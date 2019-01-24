/*	Emmett lam
/	This JS file handles the animations for the landing page.
*/

$(document).ready(function(){
	
	// Various animation state flags
	var embeddedSkillsFilled = false;
	var webSkillsFilled = false;
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
	
	/* 	Window scroll behavior:
	/		- Fill in skill bars when scrolled to
	/		- Update navbar tab when section is scrolled to
	*/
	$(window).scroll(function() {
		// Get current scroll position
		var scrollPos = $(window).scrollTop() + 71;
		var topofDiv;
		
		// Fill in skills bars only once
		if (!embeddedSkillsFilled) {
			// Get position of skills section
			topofDiv = $("#embedded-skills").offset().top - ($(window).outerHeight() * .75);
			
			// Fill in skill bars when section scrolled past
			if (scrollPos > topofDiv) {
				$("#web-skills .skill-bar-inner").each(function() {
					$(this).css("width", $(this).data("width"));
				});
				
				// Prevent repeat animation
				embeddedSkillsFilled = true;
			}
		}
		
		// Fill in skills bars only once
		if (!webSkillsFilled) {
			// Get position of skills section
			topofDiv = $("#web-skills").offset().top - ($(window).outerHeight() * .75);
			
			// Fill in skill bars when section scrolled past
			if (scrollPos > topofDiv) {
				$("#embedded-skills .skill-bar-inner").each(function() {
					$(this).css("width", $(this).data("width"));
				});
				
				// Prevent repeat animation
				webSkillsFilled = true;
			}
		}
		
		// Disable selected tab updates while screen is being smooth-scrolled
		if (!isScrolling) {
			
			// Select the active tab based on scroll position
			if ( (scrollPos > $("#projects").offset().top) ||
				 (scrollPos - 71 + $(window).height() > $("body").height())) {
				$(".navbar-menu li").removeClass("active");
				$("#projects-tab").addClass("active");
			} else if (scrollPos > $("#web-skills").offset().top) {
				$(".navbar-menu li").removeClass("active");
				$("#web-skills-tab").addClass("active");
			} else if (scrollPos > $("#embedded-skills").offset().top) {
				$(".navbar-menu li").removeClass("active");
				$("#embedded-skills-tab").addClass("active");
			} else if (scrollPos > $("#experience").offset().top) {
				$(".navbar-menu li").removeClass("active");
				$("#experience-tab").addClass("active");
			} else if (scrollPos > $("#profile").offset().top) {
				$(".navbar-menu li").removeClass("active");
				$("#profile-tab").addClass("active");
			}
		}
	});
	
	// On window refresh, fill in skills bars if already scrolled to
	(function() {
		var scrollPos = $(window).scrollTop() + 71;
		var topofDiv = $("#embedded-skills").offset().top - ($(window).outerHeight() * .75);
		
		if (scrollPos > topofDiv) {
			$("#embedded-skills .skill-bar-inner").each(function() {
				$(this).css("width", $(this).data("width"));
			});
		}
		
		topofDiv = $("#web-skills").offset().top - ($(window).outerHeight() * .75);
		
		if (scrollPos > topofDiv) {
			$("#web-skills .skill-bar-inner").each(function() {
				$(this).css("width", $(this).data("width"));
			});
		}
	})();
});