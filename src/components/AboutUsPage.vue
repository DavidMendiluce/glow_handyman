<template>
  <div class="container">
    <BannerSmall :title="'ABOUT US'"
    :description1="'Our team of electricians are dedicated to safety & quality service.'"
    :description2="'You can count on us to get your job done right.'"
    :buttonTxt="'GET A FAST FREE QUOTE'" />
  </div>
</template>

<script>
import BannerSmall from './BannerSmall';

export default {
    name: "AboutUsPage",
    components: { BannerSmall }
}
</script>


<style>

</style>