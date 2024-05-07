<template>
    <div>the competition id:{{compt_id}}</div>
</template>

<script setup>
  const route = useRoute();

  const compt_id=computed(()=>{
    return route.params.compt_id;
  });

</script>