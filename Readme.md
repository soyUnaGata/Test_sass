# Gulp SCSS Portfolio Project

This project is a portfolio website built using Gulp and SCSS.

## Live Demo

Check out the live demo of the portfolio project: [Live Demo](https://grand-fairy-18deb6.netlify.app/)

## Features

- Responsive design for various screen sizes.
- Use of Gulp for automating tasks like compiling SCSS, minifying CSS, merging HTML.
- SCSS used for modular and maintainable styling.
- Clean and organized project structure.

## Getting Started

### Prerequisites

- Node.js and npm must be installed on your machine.

### Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd digital-project-scss`
3. Install dependencies: `npm install`

### Usage

1. Run `npm run watch` to start the development server.
2. The website will be available at `http://localhost:3000`.
3. Gulp will watch for changes in SCSS files and automatically compile them into CSS.
4. Any changes to HTML, CSS, or JavaScript will be automatically reflected in the browser.

### Build

1. Run `npm run build` to build the production-ready assets.
2. The optimized and minified assets will be available in the `dist` directory.

## Folder Structure

- `src/` - Contains the source code and assets.
  - `index.html` - The main HTML file.
  - `css/` - Contains CSS files.
  - `fonts/` - Contains font files.
  - `html/` - Contains partial html files.
  - `img/` - Contains image files.
  - `js/` - Contains JS files.
  - `scss/` - Contains SCSS files.
- `dist/` - Contains the compiled and optimized assets for production.
- `gulpfile.js` - Configuration for Gulp tasks.
- `package.json` - Lists the project's dependencies and scripts.