<template>
    <!-- <span>All iphones falls here</span> -->
    <!-- create a list of cards for the iphones -->
    <div class="grid grid-cols-1">
        <IphoneItemCard v-for="iphone in iphones" :key="iphone.id" :iphone="iphone" />
    </div>
</template>

<script setup>

// some dum data for iphones
const iphones = ref([
    {
        id:1,
        iphone_name:"iphone 11",
        price:9000,
        model:'AAZZ11',
        photo:'/images/iphone11.png',
        desc:'Brand new iphone 11, buy and use',
        discount:0.2
    },
    {
        id:2,
        iphone_name:"iphone 11 pro",
        price:10000,
        model:'AAZZ11-Pro',
        photo:'/images/iphone11Pro.jpg',
        desc:'Brand new iphone 11 Pro, buy and use',
        discount:0.3
    },
    {
        id:3,
        iphone_name:"iphone 12",
        price:11000,
        model:'AAZZ12',
        photo:'/images/iphone12.png',
        desc:'Brand new iphone 12, buy and use',
        discount:0.4
    },
    {
        id:4,
        iphone_name:"iphone 13 Pro",
        price:12000,
        model:'AAZZ12-Pro',
        photo:'/images/iphone13Pro.png',
        desc:'Brand new iphone 13 pro, buy and use',
        discount:0.5
    }
]);

  useHead({
    title:"Iphone-market"
  });

</script>