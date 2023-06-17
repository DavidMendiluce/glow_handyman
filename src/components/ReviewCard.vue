<template>
<div class="card_container">
  <div class="user_img">
    <img :src="profileImg">
  </div>
  <div class="card_review">
    <div class="card_title">
      <h3>{{title}}</h3>
    </div>
    <div class="card_description">
      <p>{{description}}
      </p>
      <img class="google_stars" src="@/assets/images/google_and_stars.png">
      <h4 class="username">{{username}}</h4>
      <div class="verified">
        <i class="fa-solid fa-circle-check fa-xl"></i>
        <h5>Verified Customer</h5>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ReviewCard',
  props: ['title', 'description', 'username', 'profileImg']
}
</script>


<style scoped>
h3, h4, p {
  color: #213c74;
}

.card_container {
  width: 600px;
  display: inline-flex;
  margin-top: 1rem;
}

.card_review {
  background-image: url('@/assets/images/review_card.png');
  width: 95%;
  height: 300px;
  background-size: 100%;
  background-repeat: no-repeat;
  padding: 1rem;
}

.card_title {
  padding-left: 50px;
}

.card_description {
  padding-left: 50px;
}

.card_description p {
  height: 80px;
}

.google_stars {
  width: 100px;
  height: 25px;
  position: relative;
  right: 5px;
}

.fa-circle-check {
  color: #30cf3f;
  margin: auto
}

h4 {
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

h5 {
  margin: 0 10px;
  font-size: 18px;
  color: grey;
}

.verified {
  display: inline-flex;
}

.verified h1 {
  margin: 0 1rem;
}

.user_img {
  position: relative;
  top: 6.5rem;
  left: 37px;
}

.user_img img {
  width: 70px;
  border-radius: 50px;
  border: 1px solid #e8c547;
}

@media screen and (max-device-width: 500px) {
  h4 {
    text-align: start;
  }

  .left_reviews_column .card_container:nth-child(1) {
    margin-top: 0;
  }

  .card_container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 4rem;
  }

  .card_container p {
    height: 140px;
  }
  
  .user_img {
    text-align: center;
    margin: auto;
    top: 2rem;
    left: 0;
    width: 100%;
  }
  
  .card_review {
    width: 80%;
    margin: auto;
    background-size: contain !important;
    background-position: center;
    height: 450px;
    background-image: url('@/assets/images/review_card_mobile_2.png');
    background-size: 95%;
  }

  .card_title {
    margin-top: 4rem;
    padding: 0;
    margin: 1rem auto 0 auto;
    width: 80%;
  }

  .card_description {
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }

  .verified i {
    margin: auto 0;
  }
}
</style>