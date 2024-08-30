import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        appDir: 'app', // Required as the default is _app
        adapter: adapter({
            pages: 'build',
			assets: 'build',
			fallback: '404.html',
        }),
			paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}   
    },  
	preprocess: sveltePreprocess(),
};

export default config;
