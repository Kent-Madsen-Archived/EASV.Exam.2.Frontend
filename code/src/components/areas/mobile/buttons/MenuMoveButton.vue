<script>
  export default
  {
    name: 'MenuMoveButton',
    data() 
    {
      return {
        currentDirection: 'down'
      }
    },
    methods:
    {
      /**
       * 
       */
      onAction()
      {

      },

      DirectionUpwards()
      {
        this.$data.currentDirection = 'up';
        return this.$data.currentDirection;
      },

      DirectionDownwards()
      {
        this.$data.currentDirection = 'down';
        return this.$data.currentDirection;
      },

      isUp()
      {
        let r = this.$data.currentDirection === 'up';
        return r;
      },

      isDown()
      {
        let r = this.$data.currentDirection === 'down';
        return r;
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
      <img v-if="isUp()" src="@/assets/svg/angle-up-solid.svg" alt="" />
      <img v-if="isDown()" src="@/assets/svg/angle-down-solid.svg" alt="" />
    </div>
  </a>
</template>