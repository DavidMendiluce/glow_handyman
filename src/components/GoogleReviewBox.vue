<template>
  <div class="google_review_container">
    <div class="google_user_img">
      <img>
    </div>
    <div class="google_review_text">
      <p>Daniel's work, communication, punctuality and advice was terrific. 
        We are really happy with the outcome.
      </p>
      <div class="google_review_user_container">
        <h3>Donna Sinclair</h3>
        <img src="@/assets/images/google_and_stars.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoogleReview'
}
</script>


<style scoped>
.google_review_container {
  max-width: 521px;
  height: 95px;
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
  border: 1px solid red;
}

.google_user_img img {
  width: 80px;
  height: 80px;
  border: 1px solid yellow;
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

</style>