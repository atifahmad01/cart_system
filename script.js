const productsCont = document.getElementById("products-container");

const productsArray = [
    {
      "title": "Stainless Steel Chef Knife",
      "description": "8-inch professional chef knife with high-carbon stainless steel blade and ergonomic handle.",
      "price": 39.99
    },
    {
      "title": "Non-Stick Frying Pan",
      "description": "10-inch non-stick frying pan with heat-resistant handle and even heat distribution.",
      "price": 24.50
    },
    {
      "title": "Cutting Board Set",
      "description": "Set of 3 BPA-free plastic cutting boards with non-slip edges.",
      "price": 18.75
    },
    {
      "title": "Digital Kitchen Scale",
      "description": "Precision digital scale with LCD display, measures up to 11 lbs.",
      "price": 22.99
    },
    {
      "title": "Stainless Steel Mixing Bowls",
      "description": "Set of 5 nesting mixing bowls with airtight lids.",
      "price": 34.95
    },
    {
      "title": "Blender with Glass Jar",
      "description": "700-watt blender with 5-speed settings and durable glass jar.",
      "price": 59.99
    },
    {
      "title": "Toaster (2-Slice)",
      "description": "Compact toaster with adjustable browning control and crumb tray.",
      "price": 27.80
    },
    {
      "title": "Electric Kettle",
      "description": "1.7L fast-boil electric kettle with auto shut-off and stainless steel body.",
      "price": 29.99
    },
    {
      "title": "Silicone Spatula Set",
      "description": "Heat-resistant silicone spatulas, perfect for baking and cooking.",
      "price": 14.25
    },
    {
      "title": "Cast Iron Skillet",
      "description": "Pre-seasoned 12-inch cast iron skillet for superior heat retention.",
      "price": 44.00
    },
    {
      "title": "Food Storage Container Set",
      "description": "Airtight, microwave-safe containers in assorted sizes (set of 10).",
      "price": 26.40
    },
    {
      "title": "Stand Mixer",
      "description": "5-quart stand mixer with multiple speed settings and dough hook attachment.",
      "price": 199.99
    },
    {
      "title": "Microwave Oven",
      "description": "Countertop microwave with 0.9 cubic feet capacity and preset cooking modes.",
      "price": 89.99
    },
    {
      "title": "Coffee Maker",
      "description": "12-cup programmable coffee maker with auto-brew timer.",
      "price": 49.95
    },
    {
      "title": "Vegetable Peeler",
      "description": "Stainless steel swivel peeler with comfortable grip handle.",
      "price": 9.50
    },
    {
      "title": "Measuring Cups and Spoons Set",
      "description": "Stainless steel measuring cups and spoons with engraved markings.",
      "price": 16.75
    },
    {
      "title": "Dish Drying Rack",
      "description": "Rust-resistant dish rack with utensil holder and drip tray.",
      "price": 31.20
    },
    {
      "title": "Pressure Cooker",
      "description": "6-quart stainless steel pressure cooker with safety locking lid.",
      "price": 74.99
    },
    {
      "title": "Air Fryer",
      "description": "4-quart air fryer with digital touchscreen and rapid air circulation technology.",
      "price": 89.50
    },
    {
      "title": "Kitchen Timer",
      "description": "Magnetic digital kitchen timer with loud alarm and countdown function.",
      "price": 12.99
    }
  ]
  
const dislayProducts = () => {

    // Using for loop
    for(let i = 0; i < 20; i++)
    {

        const product = productsArray[i]

        productsCont.innerHTML += `<div class="product-item  bg-gray-200 rounded">
            <div class="image-cont">
                <img src="https://m.media-amazon.com/images/I/71X8jTapRNL._AC_UL320_.jpg" alt="">
            </div>
            <div class="details-cont p-2 grid grid-cols-1">
                <span class="font-bold text-lg">${product.title}</span>
                <span class="text-sm flex-1 h-14">${product.description}</span>
                <div class="flex justify-between items-end">
                    <span class="font-bold text-xl">$${product.price}</span>
                    <button class="text-white p-2 bg-orange-400 ">Add to cart</button>
                </div>
            </div>
        </div>`
    }

}


dislayProducts();