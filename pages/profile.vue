<template>
    <div>Profile Section</div>
</template>

<script setup>

 

  definePageMeta({
    layout:'sidebar',
    middleware:['auth'],//khaba case allowed for middlewares
  })

</script>