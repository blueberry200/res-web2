<template>
    <div class="outterContainer">
      <lazyloadContainer :class="{H100:true}">
        <founderDiv />
      </lazyloadContainer>
      <lazyloadContainer :visibleRatio=0 :class="{H100:true}">
        <historySlide />
      </lazyloadContainer>
    </div>
  </template>
  
  <style lang="scss">
  </style>
  
  <script>
  import lazyloadContainer from '@/components/lazyloadContainer.vue'
  import founderDiv from '@/components/founderDiv.vue'
  import historySlide from '@/components/historySlide.vue'
  
  
  export default {
    name: 'AboutView',
    components: {
      lazyloadContainer,
      founderDiv,
      historySlide
    },
    data(){
      return{
      }
    }
  }
  </script>