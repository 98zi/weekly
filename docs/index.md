---
layout: home

hero:
  name: weekly / wiki
  text: 一个周刊，记录有趣的软件和网站。
  tagline: 并且存储了一些代码资源，点击 Wiki 即可搜索。
  image:
    src: https://vitepress.dev/vitepress-logo-large.webp
    alt: weekly
  actions:
    - theme: brand
      text: 阅读周刊
      link: /guide/index.md
    - theme: alt
      text: 搜索Wiki
      link: /wiki/index.md

features:
  - icon: ❤️
    title: 分享生活
    details: share life
  - icon: 😎
    title: 分享有趣
    details: Share interesting
  - icon: 👾
    title: 分享技术
    details: Share technology

---

<style>
.VPHero .text {
  font-size: 18px;
}

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>