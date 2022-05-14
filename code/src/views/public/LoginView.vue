<script>
  /** 
   * Authors: Kent vejrup Madsen
   */
  import MainHeader 
    from '@/components/headers/MainHeader.vue';


  export default 
  {
    name: 'LoginView',
    components: 
    {
      MainHeader
    }
  }
</script>
<template>
  <main>
    <div class="view-login">
      <MainHeader TextArea="Login" />
    </div>
  </main>
</template>
