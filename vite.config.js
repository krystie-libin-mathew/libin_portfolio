import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: set base to your GitLab repo name so assets resolve correctly on Pages
// Example: if your repo is gitlab.com/username/libin-portfolio, set base to '/libin-portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/'
})

