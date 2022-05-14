<script>
  import MenuAvailableButton 
    from "./mobile/buttons/MenuAvailableButton.vue";


  export default 
  {
    name: 'MobileMenu',
    components: 
    {
      MenuAvailableButton
    }
  }
</script>
<template>
  <div id="mobile-button-area" 
       class="mobile">
    <nav class="">
      <MenuAvailableButton />
      
    </nav>
  </div>
</template>