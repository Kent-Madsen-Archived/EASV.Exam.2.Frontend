<script>
  /** 
   * Authors: Kent vejrup Madsen
   */
  import MainHeader 
    from '@/components/headers/MainHeader.vue';


  export default 
  {
    name: 'KanbanView',
    components: 
    {
      MainHeader
    }
  }
</script>
<template>
  <main>
    <div class="">
      <MainHeader TextArea="Kanban" />
    </div>
  </main>
</template>
