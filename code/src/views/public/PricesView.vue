<script>
  import MainHeader 
    from '@/components/headers/MainHeader.vue';


  export default 
  {
    name: 'PricesView',
    components: 
    {
      MainHeader
    }
  }
</script>
<template>
  <main>
    <div class="view-prices">
      <MainHeader TextArea="Prices" />
    </div>
  </main>
</template>
