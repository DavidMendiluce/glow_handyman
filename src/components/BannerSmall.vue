<template>
  <div class="banner_container banner_small">
    <div class="banner_text_wrapper">
      <h1>
        <span>{{ title }}</span>
      </h1>
      <p>{{ description1 }}</p>
      <p>{{ description2 }}</p>
      <button v-if="buttonTxt !== ''">{{ buttonTxt }}</button>
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

h1 {
  margin: 1rem 0;
}

.banner_container {
  background-image: url("@/assets/images/bannerSmall4.png");
  background-size: 110% 90%;
  height: 400px;
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

@media screen 
and (min-width: 1200px) 
and (max-width: 1600px) {
  .banner_small {
    background-size: 100% 80%;
  }

  .banner_small .banner_text_wrapper {
    padding: 1rem 4rem;
  }

  .banner_container {
    background-image: url("@/assets/images/bannerSmallLaptop.png");
  }
}

@media screen 
and (max-width: 1200px) {
  .banner_container {
    margin-top: 5rem;
  }
}

@media screen and (max-width: 700px) {
  .banner_small {
    height: 200px;
    background-size: 100% 100%;
  }

  .banner_small h1 span{
    font-size: 35px;
    text-align: center;
  }

  .banner_small p {
    text-align: center;
    width: 90%;
    margin: 0.5rem auto;
  }
}
</style>