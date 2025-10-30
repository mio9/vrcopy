import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["reka-ui/nuxt", "@nuxt/fonts", "@vite-pwa/nuxt"],
	fonts: {
		provider: "google",
	},
	css: ["~/assets/css/main.css"],
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	devServer: {
		port: 3890,
	},
	vite: {
		plugins: [tailwindcss()],
	},
	nitro: {
		// satisfy cloudflare route matching rules
		prerender: {
			autoSubfolderIndex: false,
		},
	},
	pwa: {
		manifest: {
			name: "VR Copyboard",
			short_name: "VR Copyboard",
			description: "An input tool collection for VR",
			theme_color: "#000000",
			background_color: "#000000",
			display: "standalone",
			icons: [
				{
					src: "/icon-256.png",
					sizes: "256x256",
					type: "image/png",
				}
			],
		},
	},
});
