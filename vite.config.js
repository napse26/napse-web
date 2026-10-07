import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'napse-dev-middleware',
      configureServer(server) {
        // API endpoint handler
        server.middlewares.use('/api/contactus', (req, res, next) => {
          if (req.method === 'POST') {
            res.setHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                status: 'success',
                message: 'Thank you for contacting NAPSE! Your message has been received successfully.'
              })
            );
            return;
          }
          next();
        });

        // HTML routing rewrite to SPA index
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url !== '/' && req.url.endsWith('.html')) {
            req.url = '/index.html';
          }
          next();
        });
      }
    }
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
  }
});
