<script>
  import HeaderArea 
    from './components/areas/HeaderArea.vue';

  import FooterArea 
    from './components/areas/FooterArea.vue';

  import Configuration
    from './components/Configuration.vue';


  export default 
  {
    name: "Application",

    components: 
    {
      HeaderArea,
      FooterArea,
      Configuration
    },
  
    created() 
    {
      
    }
  }
</script>
<template>
  <HeaderArea/>
  <main>
    <router-view/>
  </main>
  <FooterArea/>
  <Configuration />
</template>
<style scoped>
  @import "./assets/css/application.css";
</style>