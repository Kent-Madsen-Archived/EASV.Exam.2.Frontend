<script>
  /** 
   * Authors: Kent vejrup Madsen
   */
  import MainHeader
    from '@/components/headers/MainHeader.vue';

  import LoginButton
    from '@/components/input/LoginButton.vue';

  import UsernameInput
    from '@/components/input/UsernameInput.vue';

  import PasswordInput
    from '@/components/input/PasswordInput.vue';

  import LogoComponent
    from "@/components/ui/LogoComponent";


  export default 
  {
    name: 'LoginView',
    components: 
    {
      LogoComponent,
      MainHeader,
      LoginButton,
      UsernameInput,
      PasswordInput
    },
    methods:
    {
      signUp()
      {

      }
    }
  }
</script>
<template>
<<<<<<< HEAD
  <main>
    <div class="view-login">
      <LogoComponent />

      <MainHeader TextArea="Login" />

      <form @submit.prevent="signUp"
            id="ui-view-login">
        <UsernameInput />
        <PasswordInput confirm="false" />

        <LoginButton />
        <div class="other-options">
          <router-link to="/registration"> register account </router-link>
          <router-link to="/forgot_my_account"> forgot my account</router-link>
        </div>
      </form>
    </div>
  </main>
=======
  <div class="view-home">
    
  </div>
>>>>>>> 9c987f1a29d3e73d43d0a3dd98b88e94e6583a30
</template>
