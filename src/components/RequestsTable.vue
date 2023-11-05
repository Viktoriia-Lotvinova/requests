<template>
<h2 v-if="!store.getAllRequests.length">There are no requests yet</h2>
<div v-else class="overflow-x-auto mt-7">
        <div class="min-w-screen min-h-screen flex  overflow-hidden">
            <div class="w-full ">
                <div class="bg-white shadow-md rounded my-6">
                    <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-left">City from</th>
                                <th class="py-3 px-6 text-left">City to</th>
                                <th class="py-3 px-6 text-center">Parcel type</th>
                                <th class="py-3 px-6 text-center">Date of dispatch</th>
                                <th class="py-3 px-6 text-center">Parcel description</th>
                                <th class="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">
                            <Request v-for="request in store.getAllRequests" :request="request"/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Request from './Request.vue';
import { useRequestStore } from '@/stores/request'

const store = useRequestStore();
</script>

<style scoped>
h2{
    color: #172F53;
    font-size:60px;
    font-weight: 500;
    text-align: center;
}
</style>