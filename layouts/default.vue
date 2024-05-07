<template>
    <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="About">About</NuxtLink>
        <NuxtLink to="Contacts">Contacts</NuxtLink>
        <NuxtLink to="profile">Profile</NuxtLink>
    </nav>
    <!-- here falls the layout  -->
    <slot></slot>
</template>