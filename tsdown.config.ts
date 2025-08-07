import { defineConfig } from 'tsdown';
import vue from 'unplugin-vue/rolldown';

export default defineConfig({
  plugins: [vue()],
  dts: {
    vue: true,
  },
});
