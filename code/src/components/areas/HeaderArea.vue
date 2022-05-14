<script>
  import HeaderMobileArea 
    from './mobile/HeaderMobileArea.vue';

  import HeaderDesktopArea 
    from './desktop/HeaderDesktopArea.vue';
  

  export default 
  {
    name: 'HeaderArea',
    components: 
    {
      HeaderDesktopArea,
      HeaderMobileArea
    }
  }
</script>
<template>
  <HeaderDesktopArea />
  <HeaderMobileArea />
</template>