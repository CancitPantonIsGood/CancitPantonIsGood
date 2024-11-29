$(document).ready(function() {
    // Handle the "Shop Now!" button click
    $('#shop-now-button').click(function(event) {
      event.preventDefault(); // Prevent default anchor navigation
      
      // Show the black overlay
      $('#overlay').fadeIn(500, function() {
        // After the overlay fades in, fade out the body content
        $('body').fadeOut(1000, function() {
          // After fading out, redirect to shop1.html
          window.location.href = 'shop1.html'; // Navigate to the new page
        });
      });
    });
  });