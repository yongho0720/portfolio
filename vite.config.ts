import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function githubPagesBase() {
  if (process.env.VITE_BASE_PATH) return process.env.VITE_BASE_PATH
  const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
  const owner = process.env.GITHUB_REPOSITORY_OWNER
  if (!repository) return '/'
  return repository.toLowerCase() === `${owner?.toLowerCase()}.github.io` ? '/' : `/${repository}/`
}

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? githubPagesBase() : '/',
}))
