<template>
  <div class="banner_container banner_small">
    <div class="banner_text_wrapper">
      <h1>
        <span>{{title}}</span>
      </h1>
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerSmall',
  props: ['title', 'description']
}
</script>


<style scoped>
h1, h2, h3, h4, h5, h6, ul li, p {
    color: white; 
  }

h1 {
  margin: 1rem 0;
  color: #213c74;
  font-size: 50px !important;
}

p {
  width: 70%;
  background-color: #213c74;
  padding: 1rem;
  border-left: 7px solid #e8c547;
  font-family: 'Poppins';
  line-height: 1.8;
}

.banner_container {
  background-image: url("@/assets/images/electrical-tools-hd.jpg");
  background-size: 100% 100%;
  background-position: 0px -50px;
  height: 400px;
  margin-bottom: 10rem;
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