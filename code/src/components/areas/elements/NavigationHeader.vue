<script>
  import PublicNavigation 
    from './PublicNavigation.vue';

  import LoginNavigation 
    from './LoginNavigation.vue';


  export default 
  {
    name: 'NavigationHeader',
    components: 
    {
      PublicNavigation,
      LoginNavigation
    }
  }
</script>
<template>
  <PublicNavigation />
  <LoginNavigation />
</template>