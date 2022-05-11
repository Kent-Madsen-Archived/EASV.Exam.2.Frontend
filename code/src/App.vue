<script>
  import FooterAreaComponent 
    from "./components/Areas/FooterAreaComponent.vue";

  import HeaderAreaComponent 
    from "./components/Areas/HeaderAreaComponent.vue";


  export default 
  {
    name: "Application",
    components: 
    {
    FooterAreaComponent,
    HeaderAreaComponent
}
  }
</script>
<style scoped>
  @import "style.css";
</style>
<template>
  <HeaderAreaComponent/>
  <main>
    <router-view/>
  </main>
  <FooterAreaComponent/>
</template>