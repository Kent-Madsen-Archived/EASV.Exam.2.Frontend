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
  <main>
    <div class="view-login">
      <LogoComponent />

      <MainHeader TextArea="Login" />

      <form @submit.prevent="signUp"
            id="ui-view-login">
        <UsernameInput />
        <PasswordInput confirm="false" />

        <LoginButton />
      </form>
    </div>
  </main>
</template>
