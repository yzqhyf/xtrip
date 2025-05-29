/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			maxWidth: {
				sm: "480px",
			},
		},
	},
	plugins: [],
};
