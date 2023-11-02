<template>
    <div class="outterContainer">
      <lazyloadContainer :class="{H100:true}">
        <menuList />
      </lazyloadContainer>
    </div>
  </template>
  
  <script>
  import lazyloadContainer from '@/components/lazyloadContainer.vue'
  import menuList from '@/components/menuList.vue'
  
  export default {
    name: 'MenuView',
    components: {
      lazyloadContainer,
      menuList
    }
  }
  </script>