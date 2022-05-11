<script>
    import FooterNavigationComponent
        from './footer/FooterNavigationComponent.vue';

    import FooterMiscNavigationComponent 
        from './footer/FooterMiscNavigationComponent.vue';

    export default 
    {
        name:"FooterAreaComponent",
        props:{},
        components:
        {
            FooterNavigationComponent,
            FooterMiscNavigationComponent
        }
    }
</script>
<template>
    <footer>
        <div class="boundary">
            <FooterNavigationComponent :FooterNavigationMenu="A" />
            <FooterNavigationComponent :FooterNavigationMenu="B" />
            <FooterNavigationComponent :FooterNavigationMenu="C" />
            <FooterNavigationComponent :FooterNavigationMenu="D" />
        </div>
    </footer>
    <div id="footer-misc">
        <div class="boundary">
            <FooterMiscNavigationComponent />
        </div>
    </div>
</template>