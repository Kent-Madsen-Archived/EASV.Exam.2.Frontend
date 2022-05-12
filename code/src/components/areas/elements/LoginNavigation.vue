<script>
  import HeaderButton 
    from './HeaderButton.vue';


  export default 
  {
    name: 'LoginHeader',
    components: 
    {
        HeaderButton
    }
  }
</script>
<template>
  <ul class="login">
      <HeaderButton LinkTo="/dashboard" ButtonName="Home" />
      <HeaderButton LinkTo="/profile" ButtonName="Profile" />
      <HeaderButton LinkTo="/projects" ButtonName="Project" />
      <HeaderButton LinkTo="/kanbans" ButtonName="Kanban" />
      <HeaderButton LinkTo="/settings" ButtonName="Setting" />
  </ul>
</template>