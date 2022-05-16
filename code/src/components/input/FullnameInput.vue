<script>
  /** 
   * Authors: Kent vejrup Madsen
   */
  export default 
  {
    name: 'FullnameInput',
    data()
    {
      return {
        fullname_field: null
      }
    }
  }
</script>
<template>
    <span>
        <label>
          Full name
        </label>
        <input type="text" v-model="fullname_field" />
    </span>
</template>
