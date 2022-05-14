<script>
  import store 
    from '@/store';


  export default
  {
    name: 'MenuAvailableButton',
    methods:
    {
      onAction()
      {
        store.dispatch('InvertOfMenu');
      },

      isActive()
      {
        return false;
      }
    },
    computed:
    {
    }
  }
</script>
<template>
  <a class="menu-button-click">
    <div class="menu-button ui-button-mobile" @click="onAction()">
      <img src="@/assets/svg/bars-solid.svg" alt="" :class="{ active:isActive }" />
    </div>
  </a>
</template>