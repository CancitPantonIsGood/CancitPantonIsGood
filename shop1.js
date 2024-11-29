document.querySelectorAll('.dropdown-toggle').forEach(item => {
  item.addEventListener('click', function (e) {
    const dropdown = this.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
    e.preventDefault();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdownOptions = document.querySelectorAll(".dropdown-content a");
  const equipmentSection = document.querySelector(".equipment");
  const checkoutContainer = document.querySelector(".checkout-container");
  let cart = [];

  // Define content mapping for each category and option
  const contentMap = {
    Equipment: {
      Option1: [
        {
          title: "Redragon M716 INQUISITOR RGB Gaming Mouse",
          description: "LGTVHD",
          image: "https://www.redragonzone.com/cdn/shop/files/M716-1_1_450x450_0e9fb06c-090c-4bc5-b143-b57c477d87fe_360x.PNG?v=1615925715",
        },
        {
          title: "Redragon TIANOBA 3 M802-3 Gaming Mouse",
          description: "has dick",
          image: "https://www.redragonzone.com/cdn/shop/files/M802-1_450x450_1f35bfb7-b394-461a-80d3-cbb703c66dcb_360x.PNG?v=1615925715",
        },
        {
          title: "Redragon M711 COBRA RGB Gaming Mouse",
          description: "LGTVHD",
          image: "https://www.redragonzone.com/cdn/shop/files/M711_450x450_3bc0b23a-75f9-4ff6-a24c-8858583d5e77_360x.PNG?v=1615925716",
        },
        {
          title: "Redragon M990 LEGEND 24000 DPI High-Precision Programmable Laser Gaming Mouse",
          description: "has dick",
          image: "https://www.redragonzone.com/cdn/shop/files/M802-1_450x450_1f35bfb7-b394-461a-80d3-cbb703c66dcb_360x.PNG?v=1615925715",
        }, 
      ],
      Option2: [
        {
          title: "Redragon K552-R KUMARA RAINBOW RGB Backlit Mechanical Gaming Keyboard",
          description: "Responsive and durable mechanical keys.",
          image: "https://www.redragonzone.com/cdn/shop/products/K552R-2-1_360x.png?v=1533022707",
        },
        {
          title: "Redragon Deimos K599 24G+Wired Mechanical Keyboard",
          description: "Customizable lighting for your gaming setup.",
          image: "https://www.redragonzone.com/cdn/shop/products/wireless2.4ghzmechanicalkeyboard_360x.png?v=1626069653",
        },
        {
          title: "Redragon K580 PRO Wireless RGB Gaming Keyboard (Red Switch)",
          description: "Customize your keyboard's lighting",
          image: "https://www.redragonzone.com/cdn/shop/files/RedragonK580PROWirelessRGBGamingKeyboard_3-Modes104KeysMechanicalKeyboard_360x.png?v=1708237790",
        },
        {
          title: "Redragon K556 SE RGB LED Backlit Wired Mechanical Gaming Keyboard",
          description: "Customizable lighting for your gaming setup.",
          image: "https://www.redragonzone.com/cdn/shop/files/RedragonK556SEbluekeyboard_2_360x.png?v=1683537491",
        },
      ],
      Option3: [
        {
          title: "Redragon H510 ZEUZ WHITE Gaming Headset 7.1 Surround Sound Memory Foam Ear Pads",
          description: "Immerse in crystal-clear sound quality.",
          image: "https://www.redragonzone.com/cdn/shop/products/Redragonh510whitegamingheadset_1_360x.png?v=1597722607",
        },
        {
          title: "Redragon h510 Zeuz-X RGB Wireless Gaming Headset",
          description: "Freedom of movement with premium sound.",
          image: "https://www.redragonzone.com/cdn/shop/products/wirelessheadsetwithmic_2_360x.png?v=1676877867",
        },
        {
          title: "Redragon H520 Icon Wired Gaming Headset",
          description: "Immerse in crystal-clear sound quality.",
          image: "https://www.redragonzone.com/cdn/shop/products/H520-1_360x.png?v=1621822416",
        },
        {
          title: "Redragon H510 Zeuz-X RGB White Wired Gaming Headset",
          description: "Freedom of movement with premium sound.",
          image: "https://www.redragonzone.com/cdn/shop/products/H510ZEUS-XRGBWhiteWiredGamingHeadset_1_360x.png?v=1654501459",
        },
      ],
    },
    Merchandise: {
      Option1: [
        {
          title: "T1 Jersey",
          description: "Stylish T-shirts with T1",
          image: "https://shop-t1-na.gg/cdn/shop/files/2024-T1-Uniform-Jersey-Updated-front_600x.jpg?v=1720480041",
        },
        {
          title: "T1 Champion Uniform Jersey",
          description: "Simple and comfortable T1 jersey",
          image: "https://shop-t1-na.gg/cdn/shop/files/FRONT-cropped_77701f00-6e7b-479b-b8ee-c541247d46cf_600x.jpg?v=1694456252",
        },
      ],
      Option2: [
        {
          title: "T1 Uniform World Pants",
          description: "Perfect for summer days and workouts",
          image: "https://shop-t1-na.gg/cdn/shop/files/231004b_0059_CROPPED_600x.jpg?v=1699307901",
        },
      ],
      Option3: [
        {
          title: "T1 Uniform Jacket - Rekkes",
          description: "Stay warm with T1 Jacket",
          image: "https://shop-t1-na.gg/cdn/shop/files/2024-t1-uniform-jacket_600x.jpg?v=1708469337",
        },
        {
          title: "T1 Spring Jacket",
          description: "Stylish jacket to wear for tournaments",
          image: "https://shop-t1-na.gg/cdn/shop/products/spring-jacket-front_600x.jpg?v=1680302371",
        },
      ],
    },
    Accessories: {
      Option1: [
        {
          title: "2024 T1 Uniform Jersey Keychain",
          description: "Adorable chibi figures for collectors.",
          image: "https://shop-t1-na.gg/cdn/shop/files/2024-T1-Uniform-Jersey-Keychain-Faker_600x.jpg?v=1712613622",
        },
        {
          title: "2023 T1 Uniform Worlds Jeysey Keychain",
          description: "Unique designs for every fan.",
          image: "https://shop-t1-na.gg/cdn/shop/files/0517870df70f31d38b11059aff8f5e3e_600x.jpg?v=1697737349",
        },
      ],
      Option2: [
        {
          title: "Rising Legend Ahri",
          description: "The legendary and limited skin for our T1 FAKER!",
          image: "https://cdn.oneesports.gg/cdn-data/2024/05/LeagueofLegends_RisenLegendAhri_SplashArt.jpg",
        },
        {
          title: "Rising Legend Leblanc",
          description: "The legendary and limited skin for our T1 FAKER!",
          image: "https://preview.redd.it/risen-legend-leblanc-splash-art-v0-g1xkpo88p63d1.jpeg?auto=webp&s=d6fc453687974c90a90ab194c5d9ac0cae2aa5d3",
        },
      ],
      Option3: [
        {
          title: "GB Pro Slide T1 Edition V2 - White",
          description: "Stylish slippers for gamers",
          image: "https://en.shop-t1.gg/web/product/small/202408/6457493f13955ee93a896361db5091b9.jpg",
        },
        {
          title: "GB Pro Slide T1 Edition V2 - Black",
          description: "Stylish slippers for gamers",
          image: "https://en.shop-t1.gg/web/product/small/202408/b5914816705628137b3a548415eed797.jpg",
        },
      ],
    },
  };

  // Event listener for all dropdown options
  dropdownOptions.forEach((option, index) => {
    option.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior

      // Determine category and option (Equipment, Merchandise, Accessories)
      const categoryIndex = Math.floor(index / 3); // Calculate based on 3 options per category
      const category = Object.keys(contentMap)[categoryIndex];
      const optionKey = `Option${(index % 3) + 1}`;

      // Get the content for the selected option
      const contentList = contentMap[category][optionKey];

      // Generate cards for each item in the selected option
      const cardsHtml = contentList
        .map(
          (item) => `
          <div class="card">
            <img src="${item.image}" alt="${item.title}">
            <div class="content">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              <a href="#" class="buy-btn" data-title="${item.title}">Buy Now!</a>
            </div>
          </div>
        `
        ).join("");

      // Update the .equipment section with the new cards
      equipmentSection.innerHTML = `
        <div class="cards">
          ${cardsHtml}
        </div>
      `;

      // Optionally scroll to the updated section
      equipmentSection.scrollIntoView({ behavior: "smooth" });

      // Add event listeners to all "Buy Now" buttons
      document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();

          const title = button.getAttribute('data-title');

          // Add item name to the cart
          cart.push(title);

          // Update the checkout
          updateCheckout();
        });
      });
    });
  });

  // Function to update the checkout display
  function updateCheckout() {
    checkoutContainer.innerHTML = '';

    if (cart.length > 0) {
      let cartHtml = `<h3>Your Cart:</h3>`;
      cart.forEach(item => {
        cartHtml += `
          <div class="cart-item">
            <p>${item}</p>
          </div>
        `;
      });

      checkoutContainer.innerHTML = cartHtml;
    } else {
      checkoutContainer.innerHTML = '<p>Your cart is empty</p>';
    }
  }
});

$(document).ready(function() {
  // Fade in content when the page loads
  $('body').fadeIn(1000);  // 1000ms fade-in effect
});
