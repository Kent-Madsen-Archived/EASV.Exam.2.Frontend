<script>
  import NavigationHeader 
    from '../elements/NavigationHeader.vue';

  import HeaderSearch 
    from '../elements/HeaderSearch.vue';


  export default 
  {
    name: 'HeaderDesktopArea',
    components: 
    {
      NavigationHeader,
      HeaderSearch
    }
  }
</script>
<template>
    <header class="desktop">
      <NavigationHeader />
      <HeaderSearch />
    </header>
</template>