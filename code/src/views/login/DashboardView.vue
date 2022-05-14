<script>
  /** 
   * Authors: Kent vejrup Madsen
   */
  import MainHeader 
    from '@/components/headers/MainHeader.vue';


  export default 
  {
    name: 'DashboardView',
    components: 
    {
      MainHeader
    }
  }
</script>
<template>
  <main>
    <div class="">
      <MainHeader TextArea="Dashboard" />
    </div>
  </main>
</template>
