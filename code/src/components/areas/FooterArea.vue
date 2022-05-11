<script>
  import FooterMobileArea 
    from './desktop/FooterMobileArea.vue';

  import FooterDesktopArea 
    from './desktop/FooterDesktopArea.vue';


  export default 
  {
    name: 'FooterArea',
    components: 
    {
      FooterMobileArea,
      FooterDesktopArea
    }
  }
</script>
<template>
  <FooterDesktopArea/>
  <FooterMobileArea/>
</template>