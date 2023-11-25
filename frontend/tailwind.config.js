/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary-color": "#7D6608",
      },
      backgroundImage: {
        "image-one": "url('images/pic-one.jpg')",
        "image-two": "url('images/pic-two.jpg')",
        "image-three": "url('images/pic-three.jpg')",
        "image-four": "url('images/pic-four.jpg')",
      },
    },
  },
  plugins: [],
};
