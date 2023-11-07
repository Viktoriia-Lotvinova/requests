<template>
    <div class="container mx-auto"> 
        <RequestsTable/>
        <RouterView/>
    </div>
</template>

<script setup>
import RequestsTable from '../components/RequestsTable.vue';
</script>

<style scoped>
</style>