<template>
    <div>
        <nav class="b bg-teal-800 p-2 text-white flex items-center justify-between">
            <div class="flex items-center gap-2 text-[12px]">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/iphone">Iphones</NuxtLink>
                <NuxtLink to="/about">About</NuxtLink>
                <NuxtLink v-if="auth.isAuthennticated == false" to="/auth/login">
                    Login
                </NuxtLink>

                <NuxtLink v-else to="/profile">Profile</NuxtLink>
            </div>
            <div class="text-[12px]">
                <!-- add to cart -->
                <NuxtLink to="#">cart({{ cart.length }})</NuxtLink>
            </div>
        </nav>
        <!-- here falls the layout  -->
        <slot></slot>
    </div>
</template>
<script setup>
const cart = useCart();
const auth = useAuth();

</script>
