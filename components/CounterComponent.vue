<template>
     <button v-on:click="incrementCounter">Increment counter+</button>
    {{ counter }}
    <button v-on:click="decrementCounter">Decrement counter-</button>
</template>

<script setup>
  const counter=ref(0);

  const incrementCounter=()=>{
    counter.value+=1;
  };

  const decrementCounter=()=>{
    if(counter.value>0){
      counter.value-=1;
    }
  };
</script>
