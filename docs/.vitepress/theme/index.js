import DefaultTheme from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

import './custom.css'

import Layout from './Layout.vue'

import { onMounted, watch, nextTick } from 'vue'
import mediumZoom from 'medium-zoom'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    // ...
  },
  setup() {
    const route = useRoute();
    const { frontmatter } = useData();
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )

    // Obtain configuration from: https://giscus.app/
    giscusTalk({
      repo: '98zi/blog',
      repoId: 'R_kgDOJWODqg',
      category: 'Announcements',
      categoryId: 'DIC_kwDOJWODqs4CV8b5',
      mapping: 'pathname',
      inputPosition: 'top',
      lang: 'zh-CN',
      loading: "lazy",
      theme: "light_tritanopia",
    }, {
      frontmatter, route
    });
  },
}