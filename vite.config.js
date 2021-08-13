import { defineConfig } from 'vite'
import { ViteFaviconsPlugin } from "vite-plugin-favicon"
import reactRefresh from '@vitejs/plugin-react-refresh'
import reactIcons from 'vite-plugin-react-icons'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ViteFaviconsPlugin({
      logo: './assets/favicons/favicon.png',
      favicons: {
        appName: 'Noneedsave',
        appDescription: 'Mulai Percakapan di Whatsapp',
        developerName: 'Iamgdev',
        url: "https://noneedsave.my.id/",
        developerURL: 'https://iamgedv.my.id', // prevent retrieving from the nearest package.json
        background: '#67e8f9',
        theme_color: '#67e8f9',
        path: './assets/',
        lang: 'id',
        logging: false, // Print logs to console? `boolean`
        pixel_art: false, // Keeps pixels "sharp" when scaling up, for pixel art.  Only supported in offline mode.
        loadManifestWithCredentials: false,
      }
    }),
    reactRefresh(),
    reactIcons(),
    WindiCSS({
      scan: {
        dirs: ["."],
        fileExtensions: ["jsx", "js", "ts", "css"],
      },
    }),
  ],
});
