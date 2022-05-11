<template>
  <div class="view-forgot">
    <MainHeader Message="Forgot account information" />
  </div>
</template>
<script>
  import MainHeader 
    from "@/components/MainHeader.vue";

  export default 
  {
    name: 'ForgotView',
    components: 
    {
      PageLogoComponent,
      MainHeader
    }
  }
</script>