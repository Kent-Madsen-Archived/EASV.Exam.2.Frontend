<script>
  /** 
   * Authors: Kent vejrup Madsen
   */
  export default 
  {
    name: 'SecondaryHeader',
    props: 
    {
        TextArea: String
    }
  }
</script>
<template>
    <h2>
        {{ TextArea }}
    </h2>
</template>