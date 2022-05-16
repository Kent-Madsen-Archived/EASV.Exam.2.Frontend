<script>
  /** 
   * Authors: Kent vejrup Madsen
   */
  import MainHeader 
    from '@/components/headers/MainHeader.vue';


  export default 
  {
    name: 'ProfileView',
    components: 
    {
      MainHeader
    }
  }
</script>
<template>
  <main>
    <div class="">
      <MainHeader TextArea="Profile" />
    </div>
  </main>
</template>
