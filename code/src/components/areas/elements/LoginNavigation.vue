<script>
  import HeaderButton 
    from './HeaderButton.vue';


  export default 
  {
    name: 'LoginHeader',
    components: 
    {
        
    }
  }
</script>
<template>
  <ul class="login">
      <HeaderButton LinkTo="/dashboard" ButtonName="" />
      <HeaderButton LinkTo="/profile" ButtonName="" />
      <HeaderButton LinkTo="/project" ButtonName="" />
      <HeaderButton LinkTo="/kanban" ButtonName="" />
      <HeaderButton LinkTo="" ButtonName="" />
  </ul>
</template>