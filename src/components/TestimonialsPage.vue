<template>
  <BannerSmall :title="'TESTIMONIALS'"
    :description1="'You can count on our team of experienced electricians & air'"
    :description2="'conditioner technicians to get your job done right!'"
    :buttonTxt="'GET A FAST FREE QUOTE'"/>
</template>

<script>
import BannerSmall from './BannerSmall.vue';

export default {
    name: "TestimonialsPage",
    components: { BannerSmall }
}
</script>


<style>

</style>