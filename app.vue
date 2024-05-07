<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <!-- <p>Am the counter NUXT</p>
    <button v-on:click="toggle">Toggle UI</button> -->
    <!--  -->
    <!-- <component :is="MyComponent"/> -->

    <!-- <a href="#" v-on:click="view('home')">Home page</a>
    <a href="#"v-on:click="view('about')">About page</a>
    <a href="#"v-on:click="view('contacts')">Contact page</a> -->

    <!-- dynamic components -->
    <!-- <div v-if="MyRoute=='about'">
      <LazyAbout/>
    </div>

    <div v-else-if="MyRoute=='contacts'">
      <LazyContacts/>
    </div> -->

    <!-- <Home v-else/> -->
    <!-- <NuxtPage /> -->
    <NuxtLayout>
       <NuxtPage />

    </NuxtLayout>
  </div>
</template>

<script setup>

  // const MyComponent = shallowRef(resolveComponent("CounterComponent"));
  const MyRoute = ref("");


  // function toggle(name){
  //   console.log(MyComponent.value.__name);
  // }

  function view(name){
    MyRoute.value=name;
  }

</script>

