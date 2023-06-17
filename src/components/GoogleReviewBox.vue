<template>
  <div class="google_review_container">
    <div class="google_user_img">
      <img :src=profileImg>
    </div>
    <div class="google_review_text">
      <p>{{ description }}
      </p>
      <div class="google_review_user_container">
        <h3>{{username}}</h3>
        <img src="@/assets/images/google_and_stars.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoogleReview',
  props: ['description', 'username', 'profileImg']
}
</script>


<style scoped>
.google_review_container {
  max-width: 521px;
  box-shadow: 0 14px 30px rgba(0,0,0,7%);
  border: 1px solid #f0edee;
  border-top-left-radius: 30px;
  padding: 13px 27px 18px 20px;
  display: inline-flex;
  background-color: white;
}

.google_review_text {
  margin-left: 1rem;
}

.google_review_text p {
  margin: 0.5rem 0;
}

.google_user_img {
  width: 100px;
}

.google_user_img img {
  width: 80px;
  height: 80px;
  border: 1px solid #e8c547;
  border-radius: 50px;
}

.google_review_user_container {
  display: inline-flex;
  margin: 0.5rem 0;
}

.google_review_user_container img {
  width: 100px;
  height: 25px;
  position: relative;
  bottom: 0.1em;
  margin-left: 1rem;
}

.google_review_user_container h3 {
  margin: 0;
}

@media screen and (max-width: 700px) {
  .google_review_container {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    border-top-right-radius: 30px;
  }

  .google_user_img {
    width: 100%;
    display: flex;
  }

  .google_user_img img {
    margin: auto;
  }

  .google_review_text p {
    text-align: center;
  }

  .google_review_user_container {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  .google_review_user_container h3 {
    text-align: center;
  }

  .google_review_user_container img {
    margin: 0.5rem auto;
  }

}

</style>