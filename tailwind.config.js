const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'about_background': "url('./src/assets/fwdserviceicon/background.png')",
      },
    },
  },
  plugins: [require('flowbite/plugin'),],
});