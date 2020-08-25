<template>
  <div class>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banner="banner"/>
    <recommend :recommend="recommend"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from './childComps/HomeSwiper';
  import Recommend from './childComps/Recommend';

  import { findMulti } from "network/home";

  export default {
    name: "Home",
    data() {
      return {
        banner: [],
        recommend: [],
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      Recommend
    },
    created() {
      // 请求多个数据
      findMulti()
        .then((res) => {
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
        .catch((err) => console.log(err));
    },
  };
</script>
<style less scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>