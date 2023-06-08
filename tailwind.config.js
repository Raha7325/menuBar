/* eslint-disable no-undef */
module.exports = {
	mode: 'jit',
	purge: {
		content: ['./src/**/*.{vue,js,ts,jsx,tsx,.html}'],
		options: {
			keyframes: true,
		},
	},
	theme: {
		container: {
		  center: true,
		},
	  },

};
