<script>
  import MainHeader 
    from '@/components/headers/MainHeader.vue';


  export default 
  {
    name: 'ForgotView',
    components: 
    {
      MainHeader
    }
  }
</script>
<template>
  <main>
    <div class="view-forgot-user-credentiels">
      <MainHeader TextArea="Forgot password" />
    </div>
  </main>
</template>
