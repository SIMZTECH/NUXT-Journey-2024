<template>
    <div>
        <span>Am showing you an</span>
        <p>{{ route.params.iphone_model }}</p>
    </div>
</template>

<script setup>
const cart = useCart();
 const route=useRoute();

 useHead({
   title:route.params.iphone_model
 });

 console.log(cart.value,"the cart value.....");

</script>