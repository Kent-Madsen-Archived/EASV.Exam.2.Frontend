<script>
  /** 
   * Authors: Kent vejrup Madsen
   */
  export default 
  {
    name: 'UsernameInput',
    data()
    {
      return {
        username_field: null
      }
    }
  }
</script>
<template>
    <span>
        <label>
          Username
        </label>
        <input type="text" v-model="username_field" />
    </span>
</template>
