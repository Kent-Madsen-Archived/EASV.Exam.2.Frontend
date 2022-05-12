<script>
  export default 
  {
    name: 'HeaderDesktopArea',
    components: 
    {
      
    }
  }
</script>
<template>
    <header class="desktop">
        <ul>
          <li>
            <router-link to="/about"> About </router-link>
          </li>
          <li>
            <router-link to="/redirect"> Redirect </router-link>
          </li>
          <li>
            <router-link to="/about"> About </router-link>
          </li>
        </ul>
    </header>
</template>