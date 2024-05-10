<script setup>

 const props=defineProps(['iphone']);
 const {id,iphone_name,price,model,photo,desc}=props.iphone;
 const ratings = computed(()=>{
    return [...Array(4).keys()]
 });
 const routePath = `/iphone/iphone-${iphone_name.toString()}`;

 const cart = useCart();

 const discount = computed(()=>{
    return price*0.24;
 });

 const addToCart=()=>{
    cart.value.push({
        id,
        iphone_name,
        price,
        model,
        photo,
        desc,
        discount:discount
    });
 };

 const removeFromcart=()=>{
    const _cartCopy=[...cart.value];
    const foundIndex = _cartCopy.findIndex((item) => item?.id == id);

    if(foundIndex>=0){
        _cartCopy.splice(foundIndex,1);
        cart.value=_cartCopy;
    }

 };

const isProductExistInCart = computed(() => {
    const foundIndex = cart.value.findIndex((item) => item?.id == id);
    console.log(foundIndex,"the found_index");
    return (foundIndex>=0)?true:false;
}); 


 console.log(cart.value);

</script>

<template>
    <div class="flex flex-row gap-3 m-3 items-center">
        <NuxtLink :to="routePath" class="basis-[80%]">
            <figure class="w-full h-full">
                <img :src="photo" :alt="photo" class="object-cover" />
            </figure>
        </NuxtLink>
        <div class="leading-5 text-[13px] text-[#5c5c5c]">
            <p class="text-[15px] font-medium capitalize">{{ iphone_name }}</p>
            <p>Model: {{ model }}</p>
            <p>Price: K{{ price }}</p>
            <div class="flex items-center">
                <p>Rating:</p>
                <LucideStar 
                    :key="rating" 
                    v-for="rating in ratings" 
                    size="17" 
                    color="gold"
                    class="b cursor-pointer hover:scale-105 hover:text-teal-800" />
            </div>
            <div class="flex flex-row gap-1">
                <p class="b font-medium">desc</p>
                <p class="flex-1 text-justify">{{ desc }}</p>
            </div>
            <!-- button display -->
            <button
                v-if="isProductExistInCart==true"
                v-on:click="removeFromcart" 
                class="b mt-2 bg-teal-700 w-full text-center active:scale-95 cursor-pointer rounded-sm text-white p-1 shadow-sm">
                Remove from cart
            </button>
            <button
                v-else
                v-on:click="addToCart" 
                class="b mt-2 bg-teal-700 w-full text-center active:scale-95 cursor-pointer rounded-sm text-white p-1 shadow-sm">
                Buy Now
            </button>
        </div>
    </div>
</template>



