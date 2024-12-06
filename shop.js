$(document).ready(function () {
  // Handle the "Shop Now!" button click
  $('#shop-now-button').click(function (event) {
    event.preventDefault(); // Prevent default anchor navigation

    // Show the black overlay
    $('#overlay').fadeIn(500, function () {
      // After the overlay fades in, fade out the body content
      $('body').fadeOut(1000, function () {
        // After fading out, redirect to shop1.html
        window.location.href = 'shop1.html';
      });
    });
  });

  // Common hover functionality for menu tooltips
  function setupTooltip(selector, tooltipId, content) {
    $(selector).hover(
      function () {
        // Show the tooltip with fade-in animation
        const $tooltip = $(tooltipId);
        $tooltip
          .html(content)
          .css({
            top: $(this).offset().top + $(this).outerHeight(),
            left: $(this).offset().left - $tooltip.outerWidth() / 2 + $(this).outerWidth() / 2,
          })
          .stop(true, true)
          .fadeIn(300);

        // Handle boundary conditions
        const rect = $tooltip[0].getBoundingClientRect();
        if (rect.right > window.innerWidth) {
          $tooltip.css({ left: 'auto', right: '10px', transform: 'none' });
        }
        if (rect.left < 0) {
          $tooltip.css({ left: '10px', transform: 'none' });
        }
      },
      function () {
        // Hide the tooltip with fade-out animation
        $(tooltipId).stop(true, true).fadeOut(300);
      }
    );
  }

  // Setup tooltips for menu items
  setupTooltip(
    ".menu a:contains('Credits')",
    "#credits-tooltip",
    "Made by: <br> Doctolero, Jhon Christopher <br> Masubay, Mark Joshua <br> Aludo, Cindy Angeline <br> Delcarmen, Aivan <br><br>All images are credited to ASUS REPUBLIC OF GAMERS and SKT T1"
  );

  setupTooltip(
    ".menu a:contains('Contact')",
    "#contact-tooltip",
    "Feel free to contact us:<br> + 012 345 6789<br> shopxpress@gmail.com"
  );

  setupTooltip(
    ".menu a:contains('Profile')",
    "#profile-tooltip",
    "A shop dedicated for the best team of League of Legends history<br> T1"
  );
});
