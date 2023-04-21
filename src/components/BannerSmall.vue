<template>
  <div class="banner_container banner_small">
    <div class="banner_text_wrapper">
      <h1>
        <span>{{ title }}</span>
      </h1>
      <p>{{ description1 }}</p>
      <p>{{ description2 }}</p>
      <button>{{ buttonTxt }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerSmall',
  props: ['title', 'description1', 'description2', 'buttonTxt']
}
</script>


<style scoped>
  h1, h2, h3, h4, h5, h6, ul li, p {
      color: white; 
    }

  .banner_small button {
    width: 300px;
    height: 60px;
  }

  .banner_small h1 {
    font-size: 38px;
  }

  .banner_small p {
    margin: 0.4rem 0;
  }
</style>