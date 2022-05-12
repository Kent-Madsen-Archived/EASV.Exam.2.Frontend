<script>
  import MainHeader 
    from '@/components/headers/MainHeader.vue';


  export default 
  {
    name: 'SettingsView',
    components: 
    {
      MainHeader
    }
  }
</script>
<template>
  <main>
    <div class="view-settings">
      <MainHeader TextArea="Settings" />
    </div>
  </main>
</template>
