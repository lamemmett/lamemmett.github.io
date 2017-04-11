$(document).ready(function(){
	
	/*
	// Navbar toggle active state on click
	$(".nav a").on("click", function(){
		$(".nav").find(".active").removeClass("active");
		$(this).parent().addClass("active");
	});	
	
	// Navbar toggle active state on scroll
	$(document).scroll(function () {
		$("#profile-tab").removeClass('active');
		$("#experience-tab").removeClass('active');
		$("#skills-tab").removeClass('active');
		$("#projects-tab").removeClass('active');
		
		$("#profile-tab").toggleClass('active', $(this).scrollTop() < $("#experience").offset().top);
		$("#experience-tab").toggleClass('active', $(this).scrollTop() >= $("#experience").offset().top);
		$("#skills-tab").toggleClass('active', $(this).scrollTop() > $("#skills").offset().top);
		$("#projects-tab").toggleClass('active', $(this).scrollTop() > $("#projects").offset().top);
	});
	*/
	
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
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
});