<script>
  /** 
   * Authors: Kent vejrup Madsen
   */
  export default 
  {
    name: 'MainHeader',
    props: 
    {
        TextArea: String
    }
  }
</script>
<template>
    <h1>
        {{ TextArea }}
    </h1>
</template>