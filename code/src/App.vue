<script>
  import axios from 'axios';

  export default 
  {
    name: "Application",
    components: 
    {
      
    },
  
    created() 
    {
      console.log("created");
    }
  }
</script>
<template>

  <main>
    <router-view/>
  </main>
  
</template>
<style scoped>
  @import "./assets/css/application.css";
</style>