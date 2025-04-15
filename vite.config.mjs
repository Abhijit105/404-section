import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    assetsDir: 'img', // This will put assets in dist/img instead of dist/assets
    rollupOptions: {
      output: {
        assetFileNames: assetInfo => {
          // Don't hash image files
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `img/[name].[ext]`
          }
          return `assets/[name]-[hash].[ext]`
        },
      },
    },
  },
})
