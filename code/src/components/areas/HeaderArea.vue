<script>
  import HeaderMobileArea 
    from './mobile/HeaderMobileArea.vue';

  import HeaderDesktopArea 
    from './desktop/HeaderDesktopArea.vue';

  import MobileMenu 
    from './MobileMenu.vue';
  

  export default 
  {
    name: 'HeaderArea',
    components: 
    {
      HeaderDesktopArea,
      HeaderMobileArea,
      MobileMenu
    }
  }
</script>
<template>
  <HeaderDesktopArea />
  <HeaderMobileArea />
  <MobileMenu />
</template>