<template>
<div class="app">
        <HeaderLayout />
        <HomeView />
</div>
</template>

<script>
import HeaderLayout from '@/components/Layouts/HeaderLayout.vue';
import HomeView from '@/views/HomeView.vue';
export default {
    components: {
        HeaderLayout,
        HomeView

    }
}
</script>

<style>

</style>

