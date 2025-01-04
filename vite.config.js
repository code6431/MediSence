import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: parseInt(process.env.PORT) || 3000, // Use PORT environment variable or default to 3000
  },
  preview: {
    host: '0.0.0.0', // Ensure preview mode also binds to all interfaces
    port: parseInt(process.env.PORT) || 5000, // Use PORT for preview or default to 5000
  },
});
