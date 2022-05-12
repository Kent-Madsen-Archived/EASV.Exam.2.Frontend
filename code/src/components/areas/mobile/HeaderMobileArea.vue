<script>
  import NavigationHeader 
    from '../elements/NavigationHeader.vue';
    
  import HeaderSearch 
    from '../elements/HeaderSearch.vue';


  export default 
  {
    name: 'HeaderMobileArea',
    components: 
    {
      NavigationHeader,
      HeaderSearch
    }
  }
</script>
<template>
  <header class="mobile">
    <HeaderSearch />
    <NavigationHeader />
  </header>
</template>