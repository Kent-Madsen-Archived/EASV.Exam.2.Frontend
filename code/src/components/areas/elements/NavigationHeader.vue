<script>
  import PublicNavigation 
    from './PublicNavigation.vue';

  import LoginNavigation 
    from './LoginNavigation.vue';

  import store 
    from '@/store';


  export default 
  {
    name: 'NavigationHeader',
    components: 
    {
      PublicNavigation,
      LoginNavigation
    },
    methods:
    {
      isUserLoggedIn: function()
      {
        return store.getters.retrieveUserState;
      } 
    }
  }
</script>
<template>
    <LoginNavigation v-if="isUserLoggedIn()" />
    <PublicNavigation v-else />
</template>