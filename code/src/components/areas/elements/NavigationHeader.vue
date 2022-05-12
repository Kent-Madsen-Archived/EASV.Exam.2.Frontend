<script>
  import HeaderButton 
    from './HeaderButton.vue';


  export default 
  {
    name: 'NavigationHeader',
    components: 
    {
      HeaderButton
    }
  }
</script>
<template>
  <ul>
    <HeaderButton LinkTo="/" ButtonName="Home"/>
    <HeaderButton LinkTo="/about" ButtonName="About"/>
    
    <HeaderButton LinkTo="/features" ButtonName="Features"/>
    <HeaderButton LinkTo="/prices" ButtonName="Prices"/>

    <HeaderButton LinkTo="/login" ButtonName="Login"/>
    <HeaderButton LinkTo="/registration" ButtonName="Sign up"/>
  </ul>
</template>