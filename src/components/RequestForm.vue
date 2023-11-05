<template>
    <div
        class="w-3/6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 block rounded-lg bg-white p-6 dark:bg-neutral-700">
        <form action="" id="request-form">
            <!-- city from -->
            <div>
                <label for="cityFrom" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City
                    From</label>
                <input type="text" v-model="cityFrom" id="cityFrom"
                    class="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="City From" required @change="check">
            </div>
            <!-- city to -->
            <div>
                <label for="cityTo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City To</label>
                <input type="text" v-model="cityTo" id="cityTo"
                    class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="City To" required>
            </div>
            <!-- select -->
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parcel
                type</label>
            <select id="type" v-model="parcelType"
                class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="Other">Other</option>
                <option value="Gadgets">Gadgets</option>
                <option value="Drinks">Drinks</option>
                <option value="Clothes">Clothes</option>
                <option value="Medicines">Medicines</option>
            </select>
            <!-- date -->
            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dispatch date</label>
            <div class="relative max-w-sm">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                </div>
                <input
                ref="date" 
                datepicker datepicker-autohide id="datepickerel" type="text"
                    class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Discpatch date">
            </div>
            <!-- textarea -->

            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parcel
                description</label>
            <textarea id="message" v-model="parcelDescription" rows="4"
                class="mb-3 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Parcel description"></textarea>

            <button type="button" @click="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{{ buttonText }}</button>
        </form>

    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRequestStore } from '@/stores/request';
import { useRouter } from 'vue-router';
// import { initFlowbite } from 'flowbite'
import Datepicker from 'flowbite-datepicker/Datepicker';

// import { 
//     initAccordions, 
//     initCarousels, 
//     initCollapses, 
//     initDials, 
//     initDismisses, 
//     initDrawers, 
//     initDropdowns, 
//     initModals, 
//     initPopovers, 
//     initTabs, 
//     initTooltips } from 'flowbite'

// initialize components based on data attribute selectors


export default {
    mounted() {
        const datepickerEl = document.getElementById('datepickerel');
        new Datepicker(datepickerEl, {
        
        }); 
    },
    setup() {
    const store = useRequestStore();
    const router = useRouter();
   

    let cityFrom = ref('');
    let cityTo = ref('');
    let parcelType = ref('');
    let date = ref('');
    let parcelDescription = ref('');
    
    let buttonText = ref('')
    let requestId = ref('')
  
    if(router.currentRoute.value.path == '/newrequest'){
       buttonText = 'Create a request'
    } else{
        buttonText = 'Edit request'

        const id = router.currentRoute.value.params.id;
        requestId.value = id;
        let response = store.getRequestById(id);
        let request = JSON.parse(JSON.stringify(response));

        cityFrom.value = request.cityFrom;
        cityTo.value = request.cityTo;
        parcelType.value = request.parcelType;
        parcelDescription.value = request.parcelDescription;


        onMounted( () => {
        let date = document.getElementById('datepickerel');
        date.value = request.date;
        })
    }

    function change(){
        console.log('works')
    }
   
    function submit() {
        let date = document.getElementById('datepickerel');

    if(buttonText =='Create a request'){
        let request = {
        id: Date.now() + Math.random(),
        cityFrom: cityFrom.value,
        cityTo: cityTo.value,
        parcelType: parcelType.value,
        date: date.value,
        parcelDescription: parcelDescription.value
      }
        store.createRequest(request);
      } else{
        let updatedRequest = {
        id: requestId.value ,
        cityFrom: cityFrom.value,
        cityTo: cityTo.value,
        parcelType: parcelType.value,
        date: date.value,
        parcelDescription: parcelDescription.value
      }
        store.editRequest(updatedRequest);
      }
      router.push({ name: 'requests' });
    }

    return {
      cityFrom,
      cityTo,
      parcelType,
      date,
      parcelDescription,
      submit,
      buttonText,
      change
    };

    
  },
};
</script>



<style scoped>


</style>