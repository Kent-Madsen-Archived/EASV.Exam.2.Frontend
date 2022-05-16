<script>
  /** 
   * Authors: Kent vejrup Madsen
   */
  import MainHeader 
    from '@/components/headers/MainHeader.vue';


  export default 
  {
    name: 'ProjectView',
    components: 
    {
      MainHeader
    }
  }
</script>
<template>
  <main>
    <div class="view-project">
      <MainHeader TextArea="Project" />
    </div>
  </main>
</template>
