<script setup>
import Navbar from './components/Navbar.vue'
</script>
<template>
    <div class="main">
        <Navbar />
        <router-view />
    </div>
</template>
<script>
export default {
    name: 'kMovie',
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title
                    ? to.meta.title + ' | kMovie'
                    : 'kMovie'
                this.viewChapMode = to.name === 'comicview'
            },
        },
    },
}
</script>
