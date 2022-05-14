<script>
  import MainHeader 
    from '@/components/headers/MainHeader.vue';

  export default 
  {
    name: 'RedirectView',
    components: 
    {
      MainHeader 
    }
  }
</script>
<template>
  <main>
    <div class="view-redirect">
      <MainHeader TextArea="Redirect" />
    </div>
  </main>
</template>
