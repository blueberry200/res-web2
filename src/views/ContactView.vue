<template>
    <div class="outterContainer">
      <lazyloadContainer :class="{H30:true}">
        <storeInformation />
      </lazyloadContainer>
      <lazyloadContainer :class="{H50:true}">
        <contactForm />
      </lazyloadContainer>
    </div>
  </template>
  
  <script>
  import lazyloadContainer from '@/components/lazyloadContainer.vue'
  import storeInformation from '@/components/storeInformation.vue'
  import contactForm from '@/components/contactForm.vue'
  
  export default {
    name: 'ContactView',
    components: {
      lazyloadContainer,
      storeInformation,
      contactForm
    }
  }
  </script>