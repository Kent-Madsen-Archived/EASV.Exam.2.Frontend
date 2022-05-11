<script>
  import HeaderDesktopArea 
    from './desktop/HeaderDesktopArea.vue';

  import HeaderMobileArea 
    from './mobile/HeaderMobileArea.vue';
  

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