<template>
    <div class="outterContainer">
      <lazyloadContainer :class="{H100:true}">
        <heroBanner />
      </lazyloadContainer>
      <lazyloadContainer :class="{H100:true}">
        <brandSpirit />
      </lazyloadContainer>
      <lazyloadContainer :visibleRatio=0 :class="{H100:true}">
        <popularMeal />
      </lazyloadContainer>
      <lazyloadContainer :visibleRatio=0 :class="{H100:true}">
        <resEnvir />
      </lazyloadContainer>
      <lazyloadContainer :class="{H50:true}">
        <serviceBanner />
      </lazyloadContainer>
      <lazyloadContainer :visibleRatio=0 :class="{H100:true}">
        <homeContact />
      </lazyloadContainer>
    </div>
  </template>
  
  <style lang="scss">
  </style>
  
  <script>
  import lazyloadContainer from '@/components/lazyloadContainer.vue'
  import heroBanner from '@/components/heroBanner.vue'
  import brandSpirit from '@/components/brandSpirit.vue'
  import popularMeal from '@/components/popularMeal.vue'
  import resEnvir from '@/components/resEnvir.vue'
  import serviceBanner from '@/components/serviceBanner.vue'
  import homeContact from '@/components/homeContact.vue'
  
  export default {
    name: 'HomeView',
    components: {
      heroBanner,
      brandSpirit,
      resEnvir,
      lazyloadContainer,
      popularMeal,
      serviceBanner,
      homeContact
    },
    data(){
      return{
      }
    }
  }
  </script>