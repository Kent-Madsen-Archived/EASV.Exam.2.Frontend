<script>
  import NavigationHeader 
    from '../elements/NavigationHeader.vue';
    
  import HeaderSearch 
    from '../elements/HeaderSearch.vue';

  import store 
    from '@/store';


  export default 
  {
    name: 'HeaderMobileArea',
    components: 
    {
      NavigationHeader,
      HeaderSearch
    },
    methods:
    {
      ShowMobileMenu: function( event )
      {
        return store.getters.RetrieveShowMobileMenu; 
      }
    }
  }
</script>
<template>
  <header class="mobile" v-if="ShowMobileMenu()">
    <HeaderSearch />
    <NavigationHeader />
  </header>
</template>