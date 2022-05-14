<script>
  import MainHeader 
    from '@/components/headers/MainHeader.vue';


  export default 
  {
    name: 'AboutView',
    components: 
    {
      MainHeader
    }
  }
</script>
<template>
  <main>
    <div class="view-features">
      <MainHeader TextArea="Features" />
    </div>
  </main>
</template>
