import { defineConfig } from '@umijs/max';
import routes from './router';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Follow',
  },
  // layout:false,
  routes: routes,
  npmClient: 'pnpm',
  theme: {
    'primary-color': '#1aebb7',
  },
  proxy: {
    '/api/v1': {
      target: 'http://liupengbo.com:3003',
      changeOrigin: true,
      //改写url
      pathRewrite: { '^/api/v1': '' },
    },
  },
});
