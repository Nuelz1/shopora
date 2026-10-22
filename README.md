# Shopora — Responsive Web Shop

Shopora is a responsive web shop built as an assignment project using HTML, CSS, Bootstrap, and JavaScript. It demonstrates fundamental front-end development skills through a product catalogue, interactive filtering, cart feedback, and a contact form.

## Features

- **Responsive layout:** Adapts to different screen sizes, including mobile and desktop.
- **Product catalogue:** Displays products in organized cards with images, descriptions, and prices.
- **Category filtering:** Filter products by category.
- **Product search:** Search for products by name and combine search with category filtering.
- **Add-to-cart interaction:** Updates the cart counter and provides visual feedback when the button is clicked.
- **Contact form:** Uses browser validation and displays a simulated submission confirmation.
- **Dynamic copyright year:** Automatically displays the current year in the footer.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.8

## Project Structure

```text
shopora/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── images/
    ├── hero-image.jpg
    ├── classic-sneakers.jpg
    ├── wireless-headphones.jpg
    ├── everyday-backpack.jpg
    ├── minimal-wristwatch.jpg
    └── about-image.jpg
```

## Getting Started

### Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/shopora.git
   ```

2. Navigate to the project directory:

   ```bash
   cd shopora
   ```

3. Open `index.html` in your browser, or use a local development server such as the VS Code Live Server extension.

Bootstrap is loaded through a CDN, so an internet connection is required for its CDN-hosted resources.

## Current Limitations

- The cart counter tracks button clicks; it does not manage product quantities, cart contents, or checkout.
- The contact form demonstrates client-side validation and simulated submission feedback. It does not send messages to a server or email service.
- The project does not include a payment system or backend.

## Purpose

This project was built to practise core front-end development concepts, including responsive design, DOM manipulation, event handling, filtering, form validation, and Bootstrap-based layouts.

## License

This project was created for educational and assignment purposes. No license has been specified yet.
