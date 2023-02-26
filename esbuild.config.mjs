import html from '@chialab/esbuild-plugin-html';

import { createDevServer } from '@zhourengui/esbuild-dev-server';

createDevServer(
  {
    entryPoints: {
      main: './src/main.tsx',
      popupHtml: './src/index.html',
    },
    bundle: true,
    minify: true,
    format: 'cjs',
    sourcemap: true,
    outdir: './dist',
    logLevel: 'info',
    plugins: [html()],
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
  },
  {
    servedir: './dist',
    port: 8888,
  }
);
