<script>
  import MenuAvailableButton 
    from "./mobile/buttons/MenuAvailableButton.vue";

  import MenuMoveButton 
    from "./mobile/buttons/MenuMoveButton.vue";


  export default 
  {
    name: 'MobileMenu',
    components: 
    {
      MenuAvailableButton,
      MenuMoveButton
    }
  }
</script>
<template>
  <div id="mobile-button-area" 
       class="mobile">
    <nav class="">
      <MenuMoveButton />
      <MenuAvailableButton />
    </nav>
  </div>
</template>