// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/sagarmalla/',   // <-- change this
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
