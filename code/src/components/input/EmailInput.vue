<script>
  /** 
   * Authors: Kent vejrup Madsen
   */
  export default 
  {
    name: 'EmailInput',
    data()
    {
      return {
        email_field: null
      }
    }
  }
</script>
<template>
    <span>
        <label>
          Email
        </label>
        <input type="text" v-model="email_field" />
    </span>
</template>
