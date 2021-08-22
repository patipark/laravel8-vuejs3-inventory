<template>
    <NavBar />
    <main>
        <router-view></router-view>
    </main>
    <Footer />
</template>

<script>
import NavBar from '../components/frontend/Nav.vue';
import Footer from '../components/frontend/Foot.vue';
export default {
    name: 'FrontendLayout',
    components: {
        NavBar,
        Footer
    }
}
</script>




