<template>
    <div>am the index page...</div>
</template>

<script setup lang="ts">
    const {data}=useFetch("/api/iphone");

    console.log(data.value);

</script>