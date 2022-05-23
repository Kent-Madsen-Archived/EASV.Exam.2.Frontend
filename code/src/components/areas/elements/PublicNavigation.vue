<script>
  import HeaderButton 
    from './HeaderButton.vue';

  export default 
  {
    name: 'PublicNavigation',
    components: 
    {
      HeaderButton
    }
  }
</script>
<template>
  <ul class="public">
    <HeaderButton LinkTo="/" ButtonName="Home"/>
    <HeaderButton LinkTo="/about" ButtonName="About"/>
    
    <HeaderButton LinkTo="/features" ButtonName="Features"/>
    <HeaderButton LinkTo="/prices" ButtonName="Prices"/>

    <HeaderButton LinkTo="/login" ButtonName="Login"/>
  </ul>
</template>