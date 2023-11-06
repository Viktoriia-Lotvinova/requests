<template>
  <div class="container mx-auto">
    <header class="h-14 mt-3">
      <nav>
        <ul class="flex items-center">
          <li>
            <router-link to="/" class="flex items-center">
              <img src="../assets/logo.svg" alt="" class="max-h-14">
              <h1>Delivery</h1>
            </router-link>
          </li>
          <li class="ml-auto">
            <router-link to="/requests">Request list</router-link>
          </li>
          <li class="ml-7">
            <router-link to="/newrequest"><button>Create request</button></router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup>

</script>

<style scoped>
h1{
  color: #172F53; 
  font-size: 32px;
  font-weight: 700; 
}

a{
  color: #172F53;
  font-size: 20px;
  font-weight: 400; 
}

button{
  border-radius: 5px;
  padding: 5px 20px;
  border: 1px solid #000; 
  color: #172F53;
  font-size: 20px;
  font-weight: 400;
  transition: all .5s ease;
}

button:hover{
  background: #21D8E3; 
  color: #fff;
  border-color:#21D8E3 ;
}
</style>