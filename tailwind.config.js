// tailwind.config.js
module.exports = {
  content: [
   './node_modules/flowbite/**/*.js',  // Include Flowbite components
    './assets/CSS/**/*.{css}',           // Add path to your CSS files if they use Tailwind
    './List Products/**/*.{html,js}',            // Path to your HTML and JS files in Pages
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),  // Add Flowbite plugin here
  ],
}
