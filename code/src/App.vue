<script>
  import NavigationComponent 
    from "./components/Areas/NavigationComponent.vue";

  import PageLogoComponent 
    from "./components/PageLogoComponent.vue";

  import FooterAreaComponent 
    from "./components/Areas/FooterAreaComponent.vue";

  export default 
  {
    name: "Application",
    components: 
    {
      NavigationComponent,
      PageLogoComponent,
      FooterAreaComponent
    }
  }
</script>
<style scoped>
  @import "style.css";
</style>
<template>
  <header id="header-primary">
    <div>
      <router-link to="/">
        <PageLogoComponent/>
      </router-link>
    </div>
    <div>
      <NavigationComponent/>
    </div>
  </header>
  <main>
    <router-view/>
  </main>
  <FooterAreaComponent/>
</template>