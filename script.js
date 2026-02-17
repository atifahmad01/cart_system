const getElement = (elId) => {
  return document.getElementById(elId)
}

const productsCont = document.getElementById("products-container");
const productDetailEl = getElement("prDetCont");

const productsArray = [
    {
      "title": "Stainless Steel Chef Knife",
      "description": "8-inch professional chef knife with high-carbon stainless steel blade and ergonomic handle.",
      "price": 39.99,
      "image": "https://example.com/images/chef-knife.jpg"
    },
    {
      "title": "Non-Stick Frying Pan",
      "description": "10-inch non-stick frying pan with heat-resistant handle and even heat distribution.",
      "price": 24.50,
      "image": "https://example.com/images/frying-pan.jpg"
    },
    {
      "title": "Cutting Board Set",
      "description": "Set of 3 BPA-free plastic cutting boards with non-slip edges.",
      "price": 18.75,
      "image": "https://example.com/images/cutting-board-set.jpg"
    },
    {
      "title": "Digital Kitchen Scale",
      "description": "Precision digital scale with LCD display, measures up to 11 lbs.",
      "price": 22.99,
      "image": "https://example.com/images/digital-scale.jpg"
    },
    {
      "title": "Stainless Steel Mixing Bowls",
      "description": "Set of 5 nesting mixing bowls with airtight lids.",
      "price": 34.95,
      "image": "https://example.com/images/mixing-bowls.jpg"
    },
    {
      "title": "Blender with Glass Jar",
      "description": "700-watt blender with 5-speed settings and durable glass jar.",
      "price": 59.99,
      "image": "https://example.com/images/blender.jpg"
    },
    {
      "title": "Toaster (2-Slice)",
      "description": "Compact toaster with adjustable browning control and crumb tray.",
      "price": 27.80,
      "image": "https://example.com/images/toaster.jpg"
    },
    {
      "title": "Electric Kettle",
      "description": "1.7L fast-boil electric kettle with auto shut-off and stainless steel body.",
      "price": 29.99,
      "image": "https://example.com/images/electric-kettle.jpg"
    },
    {
      "title": "Silicone Spatula Set",
      "description": "Heat-resistant silicone spatulas, perfect for baking and cooking.",
      "price": 14.25,
      "image": "https://example.com/images/spatula-set.jpg"
    },
    {
      "title": "Cast Iron Skillet",
      "description": "Pre-seasoned 12-inch cast iron skillet for superior heat retention.",
      "price": 44.00,
      "image": "https://example.com/images/cast-iron-skillet.jpg"
    },
    {
      "title": "Food Storage Container Set",
      "description": "Airtight, microwave-safe containers in assorted sizes (set of 10).",
      "price": 26.40,
      "image": "https://example.com/images/storage-containers.jpg"
    },
    {
      "title": "Stand Mixer",
      "description": "5-quart stand mixer with multiple speed settings and dough hook attachment.",
      "price": 199.99,
      "image": "https://example.com/images/stand-mixer.jpg"
    },
    {
      "title": "Microwave Oven",
      "description": "Countertop microwave with 0.9 cubic feet capacity and preset cooking modes.",
      "price": 89.99,
      "image": "https://example.com/images/microwave.jpg"
    },
    {
      "title": "Coffee Maker",
      "description": "12-cup programmable coffee maker with auto-brew timer.",
      "price": 49.95,
      "image": "https://example.com/images/coffee-maker.jpg"
    },
    {
      "title": "Vegetable Peeler",
      "description": "Stainless steel swivel peeler with comfortable grip handle.",
      "price": 9.50,
      "image": "https://example.com/images/vegetable-peeler.jpg"
    },
    {
      "title": "Measuring Cups and Spoons Set",
      "description": "Stainless steel measuring cups and spoons with engraved markings.",
      "price": 16.75,
      "image": "https://example.com/images/measuring-set.jpg"
    },
    {
      "title": "Dish Drying Rack",
      "description": "Rust-resistant dish rack with utensil holder and drip tray.",
      "price": 31.20,
      "image": "https://example.com/images/dish-drying-rack.jpg"
    },
    {
      "title": "Pressure Cooker",
      "description": "6-quart stainless steel pressure cooker with safety locking lid.",
      "price": 74.99,
      "image": "https://example.com/images/pressure-cooker.jpg"
    },
    {
      "title": "Air Fryer",
      "description": "4-quart air fryer with digital touchscreen and rapid air circulation technology.",
      "price": 89.50,
      "image": "https://example.com/images/air-fryer.jpg"
    },
    {
      "title": "Kitchen Timer",
      "description": "Magnetic digital kitchen timer with loud alarm and countdown function.",
      "price": 12.99,
      "image": "https://example.com/images/kitchen-timer.jpg"
    }
  ]
  
  
const dislayProducts = () => {

    // Using for loop
    for(let i = 0; i < 20; i++)
    {
        const product = productsArray[i]

        productsCont.innerHTML += `<div class="product-item  bg-gray-200 rounded" onclick='onProductClicked(${i})'>
            <div class="image-cont">
                <img src=${product.image} alt="Product image">
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

const onProductClicked = (clickedProductIndex) => {
  const clickedProduct = productsArray[clickedProductIndex]
  console.log("Product clicked", clickedProduct)


  setInnerHtml(productDetailEl, `<div class="h-[700px] w-[1000px] bg-gray-800 flex flex-col">
            <div class="">
                <button class="p-2 px-4 m-2 rounded bg-gray-200 float-right cursor-pointer" onclick="hideProductDetails()">X</button>
            </div>
            <div class="bg-gray-200 flex-1 p-16">
                <div class="flex gap-4">
                    <div class="bg-gray-300">
                        <img src="" alt="" class="h-60 w-60">
                    </div>
                    <div class="flex flex-col h-60">
                        <h1 class="font-bold text-xl">${clickedProduct.title}</h1>
                        <p class="">Price: ${clickedProduct.price}</p>
                        <p class="flex-1 text-lg">${clickedProduct.description}</p>
                        <div class="flex gap-4 text-white">
                            <button class="p-2 rounded bg-orange-500 cursor-pointer">Add to card</button>
                            <button class="p-2 rounded bg-orange-500 cursor-pointer">Fav</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)

  productDetailEl.style.display = 'flex'
}


dislayProducts();


const hideProductDetails = () => {
    productDetailEl.style.display = 'none'
}

// Helper functions

const setInnerHtml = (el, html) => {
  return el.innerHTML = html
}