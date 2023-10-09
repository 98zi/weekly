---
layout: home

hero:
  name: 不如吃茶去
  text:  周刊，学习笔记等，记录有趣的软件和网站。
  tagline: weekly / note / wiki
  image:
    # src: https://vitepress.dev/vitepress-logo-large.webp
    src: https://imgurl.zishu.me/author.png
    alt: weekly
  actions:
    - theme: brand
      text: 学习笔记
      link: /note/index
    - theme: brand
      text: 阅读周刊
      link: /weekly/index
    - theme: alt
      text: 搜索 Wiki
      link: /wiki/index

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

.VPImage {
  border-radius: 50%;
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