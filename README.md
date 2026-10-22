# Tiffin Planet

A responsive static website built for Tiffin Planet, a tiffin (home-style meal) delivery service, showcasing meal plans, how ordering works, customer reviews and delivery locations.

![HTML5](https://img.shields.io/badge/HTML5-CSS3-E34F26?logo=html5&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-4.3-7952B3?logo=bootstrap&logoColor=white) ![jQuery](https://img.shields.io/badge/jQuery-Owl_Carousel-0769AD?logo=jquery&logoColor=white)

## Overview

A two-page front-end build from 2020–2021 (homepage and meal plan details page). Some copy is still Lorem Ipsum placeholder text, and ordering is not connected to a back end.

## Features

**Homepage (`index.html`)**

- Top contact bar and responsive navigation
- Hero banner with an "Order Tiffin" call to action
- "How it works" steps: place an order, we cook, tiffin is delivered
- Veg, non-veg and mixed meal plan carousels (7 to 10 meal plans) built with Owl Carousel
- "Order on Uber Eats" banner and an About section
- Customer reviews carousel
- Google Maps embed with custom markers and info windows

**Plan details page (`details.html`)**

- Product image gallery with zoom (exZoom)
- Plan description, rating and reviews
- Additional items (raita, rice, chapati, and more) with plus/minus quantity controls

## Tech Stack

- HTML5, CSS3 (custom + responsive stylesheets)
- Bootstrap 4.3 grid
- jQuery, Owl Carousel, exZoom, Masonry
- Google Maps JavaScript API
- Font Awesome

## Getting Started

No build step is needed – open `index.html` in a browser, or serve the folder with any static server:

```bash
git clone https://github.com/coderasraf/tiffin-planet.git
cd tiffin-planet
npx serve .
```

The map section needs a Google Maps JavaScript API key. Replace the key in the Maps `<script>` tag at the bottom of `index.html` with your own restricted key.

## Project Structure

```text
index.html          # Homepage
details.html        # Meal plan details page
assets/
├── css/            # style.css, details.css, responsive.css
├── js/main.js      # Carousels, quantity controls, Google Map
└── img/            # Images
vendors/            # Bootstrap, Owl Carousel, exZoom, Masonry, Font Awesome
```

## Author

Built by **Ashraf Siddik**, Shopify developer & CRO specialist.
- Website: [ashraf-siddik.com](https://ashraf-siddik.com)
- GitHub: [@coderasraf](https://github.com/coderasraf)
