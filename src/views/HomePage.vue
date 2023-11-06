<template>
     <div class="container mx-auto">
        <div class="grid grid-cols-2">
            <div class="flex flex-col mt-40 col-span-1 ">
                <h2>Make your shipping Easy, Fast and Safe</h2>
                <p class="mt-11">you take care of doing what you like the most,
                    <br>
                we make your orders arrive on time
                </p>
            </div>
            <img src="../assets/delivery_boy.png" alt="" class="absolute">
        </div>
     </div>
</template>

<script setup>
</script>

<style scoped>
h2{
    color: #172F53;
    font-size: 72px;
    font-weight: 700;
}

p{
    color: #7D7D7D;
    font-size: 30px;
    font-weight: 400;
    line-height: normal; 
}

img{
    max-height: 590px;
    right: 0;
    z-index: -1;
}
</style>