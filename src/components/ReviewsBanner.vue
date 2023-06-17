<template>
  <div class="reviews_banner_container">
    <div class="reviews_box_container">
      <div class="reviews_box">
        <div class="reviews_top">
          <h1 class="rating">4.8 / 5</h1>
            <div class="stars_wrap">
              <img src="@/assets/images/rating_small.png">
              <h3>23 REVIEWS</h3>
            </div>
        </div>
        <div class="media_wrapper">
          <img style="width: 100px; height: 40px" src="@/assets/images/yelp.png">
        </div>
      </div>
    </div>
    <div class="reviews_separator"></div>
    <div class="reviews_box_container">
      <div class="reviews_box">
        <div class="reviews_top">
          <h1 class="rating">5 / 5</h1>
            <div class="stars_wrap">
              <img src="@/assets/images/rating_small.png">
              <h3>16 REVIEWS</h3>
            </div>
        </div>
        <div class="media_wrapper">
          <img style="width: 150px" src="@/assets/images/yellow.png">
        </div>
      </div>
    </div>
    <div class="reviews_separator"></div>
    <div class="reviews_box_container">
      <div class="reviews_box">
        <div class="reviews_top">
          <h1 class="rating">4.9 / 5</h1>
            <div class="stars_wrap">
              <img src="@/assets/images/rating_small.png">
              <h3>11 REVIEWS</h3>
            </div>
        </div>
        <div class="media_wrapper">
          <img style="height: 20px" src="@/assets/images/facebook.png">
        </div>
      </div>
    </div>
    <div class="reviews_separator"></div>
    <div class="reviews_box_container">
      <div class="reviews_box">
        <div class="reviews_top">
          <h1 class="rating">5 / 5</h1>
            <div class="stars_wrap">
              <img src="@/assets/images/rating_small.png">
              <h3>42 REVIEWS</h3>
            </div>
        </div>
        <div class="media_wrapper">
          <img src="@/assets/images/google.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
    name: "ReviewsBanner"
}
</script>


<style>
.reviews_banner_container {
  position: relative;
  bottom: 5rem;
  display: inline-flex;
  width: 70%;
  background-image: radial-gradient(0px 0px at 36.49% 497.55%,#ffffff 0%,#f1f1f1 100%);
  box-shadow: 0 3px 6px rgba(0,0,0,.16);
  border-radius: 2px;
}

.reviews_banner_container h1, .reviews_banner_container h3 {
  color: #213c74;
}

.reviews_box_container {
  width: 30%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.reviews_box {
  width: 70%;
  height: 80%;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.reviews_separator {
  border: 0.5px solid rgba(148, 145, 145,0.5);
  height: 80%;
  margin: auto auto;
}

.reviews_top {
  display: inline-flex;
  justify-content: center;
  height: 40%;
}

.reviews_top img {
  width: 100px;
}

.stars_wrap {
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stars_wrap h3 {
  margin: 0;
  font-size: 14px;
  font-weight: lighter;
  margin-top: 5px;
}

.media_wrapper {
  width: 100%;
  justify-content: center;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
}

.media_wrapper img {
  width: 100px;
  height: 35px;
  margin: auto;
}

.rating {
  margin: 10px 0;
}

@media screen 
and (min-width: 1200px) 
and (max-width: 1600px) {
  .reviews_banner_container {
    width: 90%;
  }

  .reviews_top h1 {
    font-size: 28px;
  }
}

@media screen 
and (min-width: 700px) 
and (max-width: 1280px) {
  .reviews_top h1 {
    font-size: 24px;
  }

  .reviews_banner_wrapper {
    min-width: 1200px;
  }

  .reviews_banner_container {
    width: 1076px;
  }
}
</style>