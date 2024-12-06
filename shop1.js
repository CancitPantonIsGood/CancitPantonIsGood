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
  const checkoutButton = document.querySelector(".checkout-button");
  let cart = [];

  const contentMap = {
    Equipment: {
      Option1: [
        {
          title: "Redragon M716 INQUISITOR RGB Gaming Mouse",
          description: "LGTVHD",
          image: "https://www.redragonzone.com/cdn/shop/files/M716-1_1_450x450_0e9fb06c-090c-4bc5-b143-b57c477d87fe_360x.PNG?v=1615925715",
          price: 1500,
          tags: "POPULAR"
        },
        {
          title: "Redragon TIANOBA 3 M802-3 Gaming Mouse",
          description: "Good for FPS games, very easy to have a perfect sens",
          image: "https://www.redragonzone.com/cdn/shop/files/M802-1_450x450_1f35bfb7-b394-461a-80d3-cbb703c66dcb_360x.PNG?v=1615925715",
          price: 1750,
          tags: "POPULAR"
        },
        {
          title: "Redragon M711 COBRA RGB Gaming Mouse",
          description: "LGTVHD",
          image: "https://www.redragonzone.com/cdn/shop/files/M711_450x450_3bc0b23a-75f9-4ff6-a24c-8858583d5e77_360x.PNG?v=1615925716",
          price: 799,
          tags: "NONE"
        },
        {
          title: "Redragon M990 LEGEND 24000 DPI High-Precision Programmable Laser Gaming Mouse",
          description: "Good for you",
          image: "https://www.redragonzone.com/cdn/shop/files/M802-1_450x450_1f35bfb7-b394-461a-80d3-cbb703c66dcb_360x.PNG?v=1615925715",
          price: 500,
          tags: "SALE"
        },
        {
          title: "Redragon M991 Wireless Gaming Mouse",
          description: "Very light",
          image: "https://www.redragonzone.com/cdn/shop/files/M991-RGB-1_360x.png?v=1686365390",
          price: 1999,
          tags: "NONE"
        },
        {
          title: "Redragon M810 Pro Wireless Gaming Mouse",
          description: "This has the cheapest price of all time sheesh",
          image: "https://www.redragonzone.com/cdn/shop/products/RedragonM690PROWirelessGamingMouse_2_360x.png?v=1674027702",
          price: 399,
          tags: "NONE"
        },
        {
          title: "Redragon M991 Wireless Gaming Mouse",
          description: "Very light",
          image: "https://www.redragonzone.com/cdn/shop/files/M991-RGB-1_360x.png?v=1686365390",
          price: 800,
          tags: "NONE"
        },
        {
          title: "Redragon PLANK M812RGB Geyming Mouse",
          description: "This is our best LGTVHD mouse for gey",
          image: "https://www.redragonzone.com/cdn/shop/files/M721-PROM812-RGB_1_360x.png?v=1689933866",
          price: 1199,
          tags: "NONE"
        },
      ],
      Option2: [
        {
          title: "Redragon K552-R KUMARA RAINBOW RGB Backlit Mechanical Gaming Keyboard",
          description: "Responsive and durable mechanical keys.",
          image: "https://www.redragonzone.com/cdn/shop/products/K552R-2-1_360x.png?v=1533022707",
          price: 750,
          tags: "NONE"
        },
        {
          title: "Redragon Deimos K599 24G+Wired Mechanical Keyboard",
          description: "Customizable lighting for your gaming setup.",
          image: "https://www.redragonzone.com/cdn/shop/products/wireless2.4ghzmechanicalkeyboard_360x.png?v=1626069653",
          price: 1600,
          tags: "POPULAR"
        },
        {
          title: "Redragon K580 PRO Wireless RGB Gaming Keyboard (Red Switch)",
          description: "Customize your keyboard's lighting",
          image: "https://www.redragonzone.com/cdn/shop/files/RedragonK580PROWirelessRGBGamingKeyboard_3-Modes104KeysMechanicalKeyboard_360x.png?v=1708237790",
          price: 2199,
          tags: "POPULAR"
        },
        {
          title: "Redragon K556 SE RGB LED Backlit Wired Mechanical Gaming Keyboard",
          description: "Customizable lighting for your gaming setup.",
          image: "https://www.redragonzone.com/cdn/shop/files/RedragonK556SEbluekeyboard_2_360x.png?v=1683537491",
          price: 999,
          tags: "SALE"
        },
        {
          title: "Redragon UCAL K673 PRO",
          description: "One of the loudest mechanical keyboard",
          image: "https://www.redragonzone.com/cdn/shop/files/RedragonUCALK673PRO75_WirelessGasketAnimeKeyboard_1_360x.png?v=1729045678",
          price: 999,
          tags: "NONE"
        },
      ],
      Option3: [
        {
          title: "Redragon H510 ZEUZ WHITE Gaming Headset 7.1 Surround Sound Memory Foam Ear Pads",
          description: "Immerse in crystal-clear sound quality.",
          image: "https://www.redragonzone.com/cdn/shop/products/Redragonh510whitegamingheadset_1_360x.png?v=1597722607",
          price: 49.99,
          tags: "SALE"
        },
        {
          title: "Redragon h510 Zeuz-X RGB Wireless Gaming Headset",
          description: "Freedom of movement with premium sound.",
          image: "https://www.redragonzone.com/cdn/shop/products/wirelessheadsetwithmic_2_360x.png?v=1676877867",
          price: 1600,
          tags: "POPULAR"
        },
        {
          title: "Redragon H520 Icon Wired Gaming Headset",
          description: "Immerse in crystal-clear sound quality.",
          image: "https://www.redragonzone.com/cdn/shop/products/H520-1_360x.png?v=1621822416",
          price: 99.99,
          tags: "SALE"
        },
        {
          title: "Redragon H510 Zeuz-X RGB White Wired Gaming Headset",
          description: "Freedom of movement with premium sound.",
          image: "https://www.redragonzone.com/cdn/shop/products/H510ZEUS-XRGBWhiteWiredGamingHeadset_1_360x.png?v=1654501459",
          price: 750,
          tags: "NONE"
        },
        {
          title: "Redragon SCREAM H231 Wired Gaming Headset",
          description: "This headset has erren voice inside, you wil hear him say 'OREWA EREN YEAGAR'",
          image: "https://www.redragonzone.com/cdn/shop/files/RedragonH231SCREAMWiredGamingHeadset_1_360x.png?v=1702288182",
          price: 1250,
          tags: "NONE"
        },
      ],
    },
    Merchandise: {
      Option1: [
        {
          title: "T1 Jersey",
          description: "Stylish T-shirts with T1",
          image: "https://shop-t1-na.gg/cdn/shop/files/2024-T1-Uniform-Jersey-Updated-front_600x.jpg?v=1720480041",
          price: 39.99,
          tags: "SALE"
        },
        {
          title: "T1 Champion Uniform Jersey",
          description: "Simple and comfortable T1 jersey",
          image: "https://shop-t1-na.gg/cdn/shop/files/FRONT-cropped_77701f00-6e7b-479b-b8ee-c541247d46cf_600x.jpg?v=1694456252",
          price: 45.99,
          tags: "SALE"
        },
      ],
      Option2: [
        {
          title: "T1 Uniform World Pants",
          description: "Perfect for summer days and workouts",
          image: "https://shop-t1-na.gg/cdn/shop/files/231004b_0059_CROPPED_600x.jpg?v=1699307901",
          price: 49.99,
          tags: "NONE"
        },
      ],
      Option3: [
        {
          title: "T1 Uniform Jacket - Rekkes",
          description: "Stay warm with T1 Jacket",
          image: "https://shop-t1-na.gg/cdn/shop/files/2024-t1-uniform-jacket_600x.jpg?v=1708469337",
          price: 2199,
          tags: "POPULAR"
        },
        {
          title: "T1 Spring Jacket",
          description: "Stylish jacket to wear for tournaments",
          image: "https://shop-t1-na.gg/cdn/shop/products/spring-jacket-front_600x.jpg?v=1680302371",
          price: 1899,
          tags: "NONE"
        },
      ],
    },
    Accessories: {
      Option1: [
        {
          title: "2024 T1 Uniform Jersey Keychain",
          description: "Adorable chibi figures for collectors.",
          image: "https://shop-t1-na.gg/cdn/shop/files/2024-T1-Uniform-Jersey-Keychain-Faker_600x.jpg?v=1712613622",
          price: 300,
          tags: "POPULAR"        
        },
        {
          title: "2023 T1 Uniform Worlds Jeysey Keychain",
          description: "Unique designs for every fan.",
          image: "https://shop-t1-na.gg/cdn/shop/files/0517870df70f31d38b11059aff8f5e3e_600x.jpg?v=1697737349",
          price: 300,
          tags: "POPULAR"
        },
      ],
      Option2: [
        {
          title: "Rising Legend Ahri",
          description: "The legendary and limited skin for our T1 FAKER!",
          image: "https://cdn.oneesports.gg/cdn-data/2024/05/LeagueofLegends_RisenLegendAhri_SplashArt.jpg",
          price: 28879.61,
          tags: "LEGENDARY"
        },
        {
          title: "Rising Legend Leblanc",
          description: "The legendary and limited skin for our T1 FAKER!",
          image: "https://preview.redd.it/risen-legend-leblanc-splash-art-v0-g1xkpo88p63d1.jpeg?auto=webp&s=d6fc453687974c90a90ab194c5d9ac0cae2aa5d3",
          price: 20123.99,
          tags: "POPULAR"
        },
      ],
      Option3: [
        {
          title: "GB Pro Slide T1 Edition V2 - Red",
          description: "Stylish slippers for gamers",
          image: "https://shop-t1-na.gg/cdn/shop/files/sq-230425b_6806-copy_400x.jpg?v=1697670826",
          price: 250,
          tags: "NONE"
        },
        {
          title: "GB Pro Slide T1 Edition V2 - Black",
          description: "Stylish slippers for gamers",
          image: "https://en.shop-t1.gg/web/product/small/202408/b5914816705628137b3a548415eed797.jpg",
          price: 350,
          tags: "NONE"
        },
      ],
    },
    Popular: {
      Option1: [
        {
          title: "Redragon M716 INQUISITOR RGB Gaming Mouse",
          description: "LGTVHD",
          image: "https://www.redragonzone.com/cdn/shop/files/M716-1_1_450x450_0e9fb06c-090c-4bc5-b143-b57c477d87fe_360x.PNG?v=1615925715",
          price: 1500,
          tags: "POPULAR"      
        },
        {
          title: "Redragon TIANOBA 3 M802-3 Gaming Mouse",
          description: "Good for FPS games, very easy to have a perfect sens",
          image: "https://www.redragonzone.com/cdn/shop/files/M802-1_450x450_1f35bfb7-b394-461a-80d3-cbb703c66dcb_360x.PNG?v=1615925715",
          price: 1750,
          tags: "POPULAR"
        },
        {
          title: "Redragon Deimos K599 24G+Wired Mechanical Keyboard",
          description: "Customizable lighting for your gaming setup.",
          image: "https://www.redragonzone.com/cdn/shop/products/wireless2.4ghzmechanicalkeyboard_360x.png?v=1626069653",
          price: 1600,
          tags: "POPULAR"
        },
        {
          title: "Redragon K580 PRO Wireless RGB Gaming Keyboard (Red Switch)",
          description: "Customize your keyboard's lighting",
          image: "https://www.redragonzone.com/cdn/shop/files/RedragonK580PROWirelessRGBGamingKeyboard_3-Modes104KeysMechanicalKeyboard_360x.png?v=1708237790",
          price: 2199,
          tags: "POPULAR"
        },
        {
          title: "Redragon h510 Zeuz-X RGB Wireless Gaming Headset",
          description: "Freedom of movement with premium sound.",
          image: "https://www.redragonzone.com/cdn/shop/products/wirelessheadsetwithmic_2_360x.png?v=1676877867",
          price: 1600,
          tags: "POPULAR"
        },
      ],
      Option2: [
        {
          title: "Rising Legend Ahri",
          description: "The legendary and limited skin for our T1 FAKER!",
          image: "https://cdn.oneesports.gg/cdn-data/2024/05/LeagueofLegends_RisenLegendAhri_SplashArt.jpg",
          price: 28879.61,
          tags: "LEGENDARY"
        },
        {
          title: "Rising Legend Leblanc",
          description: "The legendary and limited skin for our T1 FAKER!",
          image: "https://preview.redd.it/risen-legend-leblanc-splash-art-v0-g1xkpo88p63d1.jpeg?auto=webp&s=d6fc453687974c90a90ab194c5d9ac0cae2aa5d3",
          price: 20123.99,
          tags: "POPULAR"
        },
      ],
      Option3: [
        {
          title: "2024 T1 Uniform Jersey Keychain",
          description: "Adorable chibi figures for collectors.",
          image: "https://shop-t1-na.gg/cdn/shop/files/2024-T1-Uniform-Jersey-Keychain-Faker_600x.jpg?v=1712613622",
          price: 300,
          tags: "POPULAR"        
        },
        {
          title: "2023 T1 Uniform Worlds Jeysey Keychain",
          description: "Unique designs for every fan.",
          image: "https://shop-t1-na.gg/cdn/shop/files/0517870df70f31d38b11059aff8f5e3e_600x.jpg?v=1697737349",
          price: 300,
          tags: "POPULAR"
        },
      ],
    },

    Sales: {
      Option1: [
        {
          title: "ROG Mouse",
          description: "Affordable ROG mouse",
          image: "https://rog.asus.com/media/1490288295183.jpg",
          price: 3.99,
          tags: "SALE"       
        },
        {
          title: "Sale! ROG Mouse 1",
          description: "Affordable Mouse",
          image: "https://rog.asus.com/media/1460453019550.jpg",
          price: 12.99,
          tags: "SALE"
        },
      ],

      Option2: [
        {
          title: "GB Pro Slide T1 Edition V2 - Red",
          description: "Stylish slippers for gamers",
          image: "https://shop-t1-na.gg/cdn/shop/files/sq-230425b_6806-copy_400x.jpg?v=1697670826",
          price: 10.99,
      tags: "SALE"
        },
        {
          title: "GB Pro Slide T1 Edition V2 - Black",
          description: "Stylish slippers for gamers",
          image: "https://en.shop-t1.gg/web/product/small/202408/b5914816705628137b3a548415eed797.jpg",
          price: 10.99,
          tags: "SALE"
        },
      ],
      Option3: [
        {
          title: "Redragon H510 ZEUZ WHITE Gaming Headset 7.1 Surround Sound Memory Foam Ear Pads",
          description: "Immerse in crystal-clear sound quality.",
          image: "https://www.redragonzone.com/cdn/shop/products/Redragonh510whitegamingheadset_1_360x.png?v=1597722607",
          price: 49.99,
          tags: "SALE"
        },
        {
          title: "Redragon H520 Icon Wired Gaming Headset",
          description: "Immerse in crystal-clear sound quality.",
          image: "https://www.redragonzone.com/cdn/shop/products/H520-1_360x.png?v=1621822416",
          price: 99.99,
          tags: "SALE"
        },
      ],
    },

    Limited: {
      Option1: [
        {
          title: "Limited Edition Faker Keyboard",
          description: "A keyboard with a design dedicated to the king of Leauge of Legeds",
          image: "a1.jpg",
          price: 199.99,
          tags: "LIMITED"       
           },
          {
          title: "Faker Package Edition",
          description: "A set of limited edition jersey, mouse, and keyboard!",
          image: "a3.jpg",
          price: 49999.99,
          tags: "LIMITED"       
           },
         
          {
          title: "Limited Edition Faker Jersey",
          description: "A limited edition with a design dedicated to the king of Leauge of Legeds",
          image: "a2.jpg",
          price: 2499.99,
          tags: "LIMITED"       
          },
          ]
    }

  };

  dropdownOptions.forEach((option, index) => {
    option.addEventListener("click", (e) => {
      e.preventDefault(); 
      const categoryIndex = Math.floor(index / 3);
      const category = Object.keys(contentMap)[categoryIndex];
      const optionKey = `Option${(index % 3) + 1}`;
      const contentList = contentMap[category][optionKey];
      const cardsHtml = contentList
  .map((item, itemIndex) => {
    const none = item.tags === "NONE" ? '<div class="tags-none"></div>' : '';
    const limited = item.tags === "LIMITED" ? '<div class="tags-limited">Limited</div>' : '';
    const popularText = item.tags === "POPULAR" ? '<div class="tags-popular">Popular</div>' : '';
    const salesText = item.tags === "SALE" ? ' <div class="tags-sale">Sales</div>' : '';
    const legText = item.tags === "LEGENDARY" ? ' <div class="tags-legendary">Legendary</div>' : '';

    
    if (salesText) {
      return `
      <div class="card" style="border: 2px solid red;">
        <div class="content">
          ${salesText}
          <img src="${item.image}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <p><strong>₱${item.price.toFixed(2)}</strong></p>
          <a href="#" class="buy-btn" data-title="${item.title}" data-price="${item.price}">Buy Now!</a>
        </div>
      </div>
    `;
    }
    else if (popularText) {
      return `
      <div class="card" style="border: 2px solid blue;">
        <div class="content">
          ${popularText}
          <img src="${item.image}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <p><strong>₱${item.price.toFixed(2)}</strong></p>
          <a href="#" class="buy-btn" data-title="${item.title}" data-price="${item.price}">Buy Now!</a>
        </div>
      </div>
    `;
    }
    else if (none) {
      return `
      <div class="card" style="border: 2px solid white;">
        <div class="content">
          <img src="${item.image}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <p><strong>₱${item.price.toFixed(2)}</strong></p>
          <a href="#" class="buy-btn" data-title="${item.title}" data-price="${item.price}">Buy Now!</a>
        </div>
      </div>
    `;
    } 
    else if (legText) {
      return `
      <div class="card" style="border: 2px solid yellow;">
        <div class="content">
        ${legText}
          <img src="${item.image}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <p><strong>₱${item.price.toFixed(2)}</strong></p>
          <a href="#" class="buy-btn" data-title="${item.title}" data-price="${item.price}">Buy Now!</a>
        </div>
      </div>
    `;
    }
    else if (limited) {
      return `
      <div class="card" style="border: 2px solid white; box-shadow: 0 0 5px white, 0 0 10px white;">
        <div class="content">
        ${limited}
          <img src="${item.image}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <p><strong>₱${item.price.toFixed(2)}</strong></p>
          <a href="#" class="buy-btn" data-title="${item.title}" data-price="${item.price}">Buy Now!</a>
        </div>
      </div>
    `;
    }
  })
  .join("")

      equipmentSection.innerHTML = `
        <div class="cards">
          ${cardsHtml}
        </div>
      `;
  
      equipmentSection.scrollIntoView({ behavior: "smooth" });
  
      document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
  
          const title = button.getAttribute('data-title');
          const price = parseFloat(button.getAttribute('data-price'));
          cart.push({ title, price });
          updateCheckout();
        });
      });
    });
  });
  

  function updateCheckout() {
    checkoutContainer.innerHTML = '';

    if (cart.length > 0) {
        let cartHtml = `<h3>Your Cart:</h3>`;
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            cartHtml += `
                <div class="cart-item">
                    <p>${item.title} - $${item.price.toFixed(2)}</p>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                </div>
            `;
        });

        cartHtml += `<h4>Total: $${total.toFixed(2)}</h4>`;
        cartHtml += `<button class="checkout-button">Checkout</button>`;
        checkoutContainer.innerHTML = cartHtml;

        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'), 10);
                cart.splice(index, 1);
                updateCheckout();
            });
        });

        document.querySelector(".checkout-button").addEventListener('click', () => {
            alert("Your purchase is processing....");
            cart = [];
            updateCheckout();
        });
    } else {
        checkoutContainer.innerHTML = '<p>Your cart is empty</p>';
    }
}
});
