console.log("Shopora JavaScript is connected")


// Get the current year and set it in the footer
const currentYear = document.getElementById("Year");

currentYear.textContent = new Date().getFullYear();



//product category filter
const categoryButtons = document.querySelectorAll(".category-btn");
const productItems = document.querySelectorAll(".product-item");
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");

let selectedCategory = "all";

// Apply both category and search filters
function filterProducts() {
    let visibleProducts = 0;
    const searchTerm = searchInput.value.trim().toLowerCase();

    productItems.forEach(function (product) {
        const productCategory = product.dataset.category;
        const productName = product
            .querySelector(".card-title")
            .textContent
            .toLowerCase();

        const matchesCategory =
            selectedCategory === "all" ||
            selectedCategory === productCategory;

        const matchesSearch = productName.includes(searchTerm);

        if (matchesCategory && matchesSearch) {
            product.style.display = "";
            visibleProducts++;
        } else {
            product.style.display = "none";
        }
    });

    const noProductsMessage = document.getElementById("noProductsMessage");

    noProductsMessage.style.display =
        visibleProducts === 0 ? "block" : "none";
}

// Handle category button clicks
categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        selectedCategory = button.dataset.category;

        categoryButtons.forEach(function (categoryButton) {
            categoryButton.classList.remove("active", "btn-dark");
            categoryButton.classList.add("btn-outline-dark");
        });

        button.classList.add("active", "btn-dark");
        button.classList.remove("btn-outline-dark");

        filterProducts();
    });
});

// Filter as the user types
searchInput.addEventListener("input", filterProducts);

// Handle Search button submission
searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    filterProducts();

    document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
});


//Add to Cart functionality
const cartCount = document.getElementById("cartCount");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

let cartItems = 0;

addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        cartItems++;

        cartCount.textContent = cartItems;

        const productName = button.dataset.name;
        const originalText = "Add to Cart";
        button.textContent = "Added to Cart!";
        
        console.log(`${productName} added to cart`);

        setTimeout(function () {
            button.textContent = originalText;
        }, 1500);
    });
});


//Contact form submission handling

const contactForm = document.getElementById("contactForm");
const contactFeedback = document.getElementById("contactFeedback");
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Prevent repeated submissions while showing feedback
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    contactFeedback.textContent = "Please wait while we process your message.";
    contactFeedback.className = "mt-3 text-primary";

    // Demonstration only: no message is sent to a server
    setTimeout(function () {
        contactFeedback.textContent =
            "Thank you! Your message has been submitted successfully.";

        contactFeedback.className = "mt-3 alert alert-success";
        contactForm.reset();

        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
    }, 1000);
});

