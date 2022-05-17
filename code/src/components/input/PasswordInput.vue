<script>
  /** 
   * Authors: Kent vejrup Madsen
   */
  export default 
  {
    name: 'PasswordInput',
    props:
    {
      confirm: Boolean( false ),
    },
    data()
    {
      return {
        password_field: null,
        confirm_password_field: null
      }
    }
  }
</script>
<template>
    <span class="ui-registration-component">
      <div>
        <label>
          Password
        </label>
        <input type="password" v-model="password_field" />
      </div>
      <div v-if="confirm==true">
        <label>
          Confirm Password
        </label>
        <input type="password" v-model="confirm_password_field" />
      </div>
    </span>
</template>
