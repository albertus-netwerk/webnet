/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				playfair: ['"Playfair Display"'],
				"quick-delight": ['"Quick Delight"'],
				"roboto-flex": ['"Roboto Flex"'],
				consolas: ['"Consolas"'],
			},
		},
	},
	plugins: [],
};
