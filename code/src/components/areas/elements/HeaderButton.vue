<script>
  export default 
  {
    name: 'HeaderButton',
    components: 
    {
        
    },
    props: 
    {
        LinkTo: String,
        ButtonName: String
    }
  }
</script>
<template>
    <li>
        <router-link :to="LinkTo">
            <div class="header-button">
                {{ ButtonName }}
            </div>
        </router-link>
    </li>
</template>