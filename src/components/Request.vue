<template>
    <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="py-3 px-6 text-left max-w-xs">
            <span class="font-medium">{{ request.cityFrom }}</span>
        </td>
        <td class="py-3 px-6 text-left max-w-xs">
            <span class="font-medium">{{ request.cityTo }}</span>
        </td>
        <td class="py-3 px-6 text-center max-w-lg">
            <span class="font-medium">{{ request.parcelType }}</span>
        </td>
        <td class="py-3 px-6 text-center max-w-lg">
            <span class="font-medium">{{ request.date }}</span>
        </td>
        <td class="py-3 px-6 text-center max-w-lg">
            <div class="font-medium">{{ request.parcelDescription }}</div>
        </td>
        <td class="py-3 px-6 text-center">
            <div class="flex item-center justify-center">
                <div class="w-4 mr-2 transform hover:text-cyan-500 hover:scale-110">
                    <router-link :to="editRequestLink"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </router-link>
                </div>
                <div class="w-4 mr-2 transform  hover:text-red-700 hover:scale-110"  data-modal-target="popup-modal" data-modal-toggle="popup-modal" @click="deleteRequest(request.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </div>
            </div>
        </td>
    </tr>   
</template>

<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';
import { useRequestStore } from '@/stores/request';

const props = defineProps({
  request: Object
});

const editRequestLink = computed(() => ({
  name: 'editrequest',
  params: { id: props.request.id }
})); 

const store = useRequestStore();

function deleteRequest(id) {
    let confirmation = confirm('Do you really want to delete this request?');

    if (!confirmation) {
        return;
    }

    store.deleteRequest(id);
}
</script>

<style scoped>

</style>