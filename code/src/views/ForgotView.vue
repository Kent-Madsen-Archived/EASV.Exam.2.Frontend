<script>
  import MainHeader 
    from '@/components/headers/MainHeader.vue';


  export default 
  {
    name: 'HomeView',
    components: 
    {
      MainHeader
    }
  }
</script>
<template>
  <main>
    <div class="view-home">
      <MainHeader TextArea="Home" />
    </div>
  </main>
</template>
