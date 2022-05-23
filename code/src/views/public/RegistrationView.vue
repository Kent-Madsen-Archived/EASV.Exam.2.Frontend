<script>
  /** 
   * Authors: Kent vejrup Madsen
   */
  import MainHeader 
    from '@/components/headers/MainHeader.vue';
  import LogoComponent from "@/components/ui/LogoComponent";
  import RegisterButton from "@/components/input/RegisterButton";
  import EmailInput from "@/components/input/EmailInput";
  import PasswordInput from "@/components/input/PasswordInput";
  import FullnameInput from "@/components/input/FullnameInput";
  import UsernameInput from "@/components/input/UsernameInput";


  export default 
  {
    name: 'RegistrationView',
    components: 
    {
      UsernameInput,
      FullnameInput,
      PasswordInput,
      EmailInput,
      RegisterButton,
      LogoComponent,
      MainHeader
    },
    methods:
    {
      Register()
      {

      }
    }
  }
</script>
<template>
  <main>
    <div class="view-registration">
      <LogoComponent />
      <MainHeader TextArea="Registration" />
      <form @submit.prevent="Register" id="ui-view-registration">
        <username-input />
        <fullname-input />
        <email-input />
        <password-input :confirm="true" />
        <register-button />
      </form>
    </div>
  </main>
</template>
