import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import electron from 'vite-plugin-electron';
import path from 'path';
import type { ConfigEnv } from 'vite';

export default ({ mode }: ConfigEnv) => {
  // 获取env环境变量
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    base: '',
    plugins: [
      react(),
      electron({
        entry: 'electron/main.ts'
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      host: true,
      open: false,
      port: 8020,
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL,
          ws: true,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    },
    build: {
      outDir: 'dist',
      assetsDir: 'static',
      sourcemap: false,
      terserOptions: {
        compress: {
          drop_console: false,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.dir']
        }
      },
      rollupOptions: {
        // js/css/img分不同文件夹存放
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/name-[hash].[ext]'
        }
      }
    }
  });
};
