<script>
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
    <div class="">
      <MainHeader TextArea="Kanban" />
    </div>
  </main>
</template>
