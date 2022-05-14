<script>
  import store 
    from '@/store';


  export default
  {
    name: 'MenuAvailableButton',
    methods:
    {
      clicked()
      {
        store.dispatch('InvertOfMenu');
      }
    },
    computed:
    {

    }
  }
</script>
<template>
  <a class="menu-button-click">
    <div class="menu-button ui-button-mobile" @click="clicked()">
      <img src="@/assets/svg/bars-solid.svg" alt="" :class="{ active:isActive }" />
    </div>
  </a>
</template>