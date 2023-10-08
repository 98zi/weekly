import DefaultTheme from 'vitepress/theme'

// giscus评论
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

// 引入组件
import './custom.css';
import Layout from './Layout.vue';

// 图片放大
import { onMounted, watch, nextTick } from 'vue';
import mediumZoom from 'medium-zoom';

// 代码块添加折叠功能
import codeblocksFold from 'vitepress-plugin-codeblocks-fold';
import 'vitepress-plugin-codeblocks-fold/style/index.scss';

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
  },
  setup() {
    const { frontmatter } = useData();
    const route = useRoute();
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
    },
      true);

    codeblocksFold({ route, frontmatter }, true, 600);
  },
}