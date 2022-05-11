<script>
  import NavigationComponent 
    from "./NavigationComponent.vue";

  export default 
  {
    name:"HeaderAreaComponent",
    props:{},
    components:
    {
      NavigationComponent,
      PageLogoComponent
    }
  }
</script>
<template>
    <header id="header-primary">
        <div>
          
        </div>
        <div>
            <NavigationComponent/>
        </div>
    </header>
</template>