<template>
    <div class="outterContainer">
      <lazyloadContainer :class="{H100:true}">
        <privacyPolicy />
      </lazyloadContainer>
    </div>
  </template>
  
  <script>
  import lazyloadContainer from '@/components/lazyloadContainer.vue'
  import privacyPolicy from '@/components/privacyPolicy.vue'
  
  export default {
    name: 'PrivacyView',
    components: {
      lazyloadContainer,
      privacyPolicy
    }
  }
  </script>