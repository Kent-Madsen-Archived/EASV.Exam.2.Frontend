<script>
  import axios 
    from 'axios';

  import HeaderArea 
    from './components/areas/HeaderArea.vue';

  import FooterArea 
    from './components/areas/FooterArea.vue';


  export default 
  {
    name: "Application",

    components: 
    {
      HeaderArea,
      FooterArea
    },
  
    created() 
    {
      console.log("created");
    }
  }
</script>
<template>
  <HeaderArea/>
  
  <main>
    <router-view/>
  </main>

  <FooterArea/>
</template>
<style scoped>
  @import "./assets/css/application.css";
</style>