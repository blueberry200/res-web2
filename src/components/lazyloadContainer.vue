<template>
    <div class="animeContainer" ref="scrollRef">
      <div>
        <transition :name="animationType" mode="out-in">
          <div v-if="animate">
            <slot></slot>
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
    .animeContainer{
      width: 100%;
      min-height: 10vh;
    }
    .H100{
      //高度可以被內容物撐大，但IntersectionObserver的threshold還是以高度的初值與root做視口比例運算
      min-height: 100vh;
    }
    .H80{
      //高度可以被內容物撐大，但IntersectionObserver的threshold還是以高度的初值與root做視口比例運算
      min-height: 80vh;
    }
    .H50{
      //高度可以被內容物撐大，但IntersectionObserver的threshold還是以高度的初值與root做視口比例運算
      min-height: 50vh;
    }
    .H30{
      //高度可以被內容物撐大，但IntersectionObserver的threshold還是以高度的初值與root做視口比例運算
      min-height: 30vh;
    }
    .leftFade-enter-active, .leftFade-leave-active,
    .rightFade-enter-active, .rightFade-leave-active,
    .fade-enter-active, .fade-leave-active {
      transition: all 4s ease;
    }
    .leftFade-enter-from, .leftFade-leave-to,
    .rightFade-enter-from, .rightFade-leave-to,
    .fade-enter-from, .fade-leave-to {
      opacity: 0;
    }
    .rightFade-enter-from, .rightFade-leave-to {
      transform: translateX(-100px);
    }
    .leftFade-enter-from, .leftFade-leave-to {
      transform: translateX(100px);
    }
  
  </style>
  
  <script>
  //本元件可以由外部傳入animationType由:name接收來選擇transition的動畫; 本元件還可以由外部傳入:class決定被observer交集的框的高度;
  export default {
    name: 'lazyloadContainer',
    props:{
      animationType:{
        type: String,
        required: false,
        default: 'fade'
      },
      visibleRatio:{
        type: Number,
        required: false,
        default: 0.5
      }
    },
    data(){
      return{
        animate: false,
        observer: {}
      }
    },
    mounted(){
      setTimeout(()=>{
        this.lazyload();
        //使用dom監聽會有資料污染問題，使用ref可以針對元件做選取
        this.observer.observe(this.$refs.scrollRef);
      },0);
    },
    methods:{
      lazyload(){
        const observer = new IntersectionObserver(([entry])=>{
          if(entry && entry.isIntersecting){
            //監聽到元件後觸發動畫
            this.animate = entry.isIntersecting;
          }
        }, {
          //以整個視窗作為監聽的範圍
          root: null,
          rootMargin: "0px 0px 0px 0px",
          //觸發動畫需要的元件與監測窗口交集比例
          threshold: this.visibleRatio
        });
        this.observer = observer;
      }
    }
  }
  </script>