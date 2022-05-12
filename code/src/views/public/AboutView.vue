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
    <div class="view-about">
      <MainHeader TextArea="About us" />
    </div>
  </main>
</template>
