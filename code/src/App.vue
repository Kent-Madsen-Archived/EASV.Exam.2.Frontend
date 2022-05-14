<script>
<<<<<<< HEAD
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
<<<<<<< HEAD
      HeaderArea,
      FooterArea,
      Configuration
    },
  
    created() 
    {
=======
>>>>>>> 9c987f1a29d3e73d43d0a3dd98b88e94e6583a30
      
    }
  }
</script>
<<<<<<< HEAD
<template>
  <HeaderArea/>
  <router-view/>
  <FooterArea/>
  <Configuration />
</template>
<style scoped>
  @import "./assets/css/application.css";
</style>
=======
<style scoped>
  @import "./assets/css/application.css";
</style>
<template>

  <main>
    <router-view/>
  </main>
  
</template>
>>>>>>> 9c987f1a29d3e73d43d0a3dd98b88e94e6583a30
