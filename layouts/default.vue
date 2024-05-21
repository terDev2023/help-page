<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

</script>

<template>
    <div class="app">
        <Header />
        <div class="container">
            <slot />
        </div>
        <Footer />
    </div>

</template>

<style>
.app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.container {
    margin: 0 auto;
    width: 90%;
}
</style>