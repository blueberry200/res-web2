<template>
  <div>
    <div class="bgFixed"></div>
    <transition name="preload" mode="out-in">
      <preloadPage v-if="isShow" />
      <navArea v-else />
    </transition>
  </div>
</template>

<style lang="scss">
  .bgFixed{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: #000000;
    z-index: -20;
  }
  .preload-leave-from{
    opacity: 1;
  }
  .preload-leave-active{
    transition: all 1s;
  }
  .preload-leave-to{
    opacity: 0;
  }
</style>

<script>
import { imgsPreloader } from '@/components/imgPreloader.js';
import imgPreloaderList from '@/components/imgPreloaderList.js';
import preloadPage from '@/components/preloadPage.vue'
import navArea from '@/components/navArea.vue'

export default{
  data(){
    return{
      isShow:true
    }
  },
  components: {
    navArea,
    preloadPage
  },
  methods:{

  },
  mounted(){
    imgsPreloader(imgPreloaderList);
    //在前動畫結束後再關掉動畫元件，前動畫4s左右
    setTimeout(() => {
      this.isShow = 0;
    },4000)
  }
}

</script>