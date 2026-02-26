import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'spa-fallback',
      configureServer(server) {
        // Return a function to run AFTER Vite's own middleware stack
        return () => {
          server.middlewares.use(async (req, res, next) => {
            if (req.url && !req.url.includes('.') && req.url !== '/app.html') {
              const { readFileSync } = await import('fs')
              const html = readFileSync('./app.html', 'utf-8')
              const transformed = await server.transformIndexHtml(req.url, html)
              res.setHeader('Content-Type', 'text/html')
              res.end(transformed)
              return
            }
            next()
          })
        }
      }
    }
  ],
  server: {
    open: '/app.html'
  },
  root: '.',
  build: {
    outDir: 'site-dist',
    rollupOptions: {
      input: { index: 'app.html' }
    }
  }
})
