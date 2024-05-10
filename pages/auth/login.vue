<template>
  <div class="h-full w-full flex  flex-col items-center select-none">
    <div class="w-full p-4 sm:w-[950px] mt-8 grid grid-cols-1 sm:grid-cols-2">
      <!-- advert -->
      <div class="b">
        <figure>
          <img src="/images/login01.png" />
        </figure>

      </div>
      <!-- form section -->
      <div class="flex flex-col justify-center">
        <p class="b text-center font-medium text-[18px] mb-8 uppercase">Login to Z-AppShop</p>
        <form v-on:submit.prevent="onSubmit">
          <div v-if="_error">
            <span>{{_error}}</span>
          </div>
          <div class="mb-3">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">
              Email address
            </label>
            <input v-model="form.email" type="email" id="email"
              class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com" required />
          </div>
          <div class="mb-3">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input v-model="form.password" type="password" id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••" required />
          </div>
          <button :disabled="isLoading" class="b bg-teal-800 text-white w-full py-2">
            <span v-if="isLoading">Loading....</span>
            <span v-else>Submit</span>
          </button>
        </form>
      </div>
    </div>
    <span class="text-[12px] text-[#5c5c5c]">Powered by apple</span>
  </div>
</template>
<script setup>
const isLoading=ref(false);
const _error=ref(null);
const auth=useAuth();


 const form = reactive({
  email:'eve.holt@reqres.in',
  password:'cityslicka'
 });



async function onSubmit() {
  isLoading.value=true;
 
  const url ="https://reqres.in/api/login";
  const { data, pending, error, refresh } = await useFetch(url, {
    method: "POST",
    body: form
  });

  if(data.value){
    isLoading.value=false;

    // redirect to home
    //return;
    auth.value.isAuthennticated=true;
    navigateTo('/');
  }

  if(error.value){
    isLoading.value=false;
    _error.value=error.value.data.error;
  }

};


  

</script>