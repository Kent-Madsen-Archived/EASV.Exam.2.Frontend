<script>
  import MainHeader 
    from '@/components/headers/MainHeader.vue';


  export default 
  {
    name: 'RegistrationView',
    components: 
    {
      MainHeader
    }
  }
</script>
<template>
  <main>
    <div class="view-registration">
      <MainHeader TextArea="Registration" />
    </div>
  </main>
</template>
