module.exports = {
	
	content: ['./src/**/*.svelte'],
	//content: ['./src/**/*.svelte'], this is how it was before cept for the word content was purge
	//darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily:{
				'heading': ['Playfair' , 'sans-serif']
			}
		}
	},
	
	plugins: []
};
