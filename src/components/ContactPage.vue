<template>
  <div class="container">
    <BannerSmall :title="'CONTACT US'"
    :description1="'Get in touch with our 24hr electrical & communication specialists.'"
    :description2="'Fast friendly 5-star service that is 100% GTD!'"
    :buttonTxt="''" />
    <div class="google_reviews_wrapper">
      <GoogleReviewBox description="Richard's work, communication, punctuality and advice was terrific. Nothing seemed to be too much trouble. We are really happy with the outcome."
                username="Sherley Briar" profileImg="https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/profile/profile_1.png"/>
    </div>
    <div class="contact_info_wrapper">
      <div class="contact_info_container">
        <ContactComponent/>
      </div>
    </div>
  </div>
</template>

<script>
import BannerSmall from './BannerSmall';
import GoogleReviewBox from './GoogleReviewBox';
import ContactComponent from './ContactComponent';

export default {
  name: 'ContactPage',
    components: { BannerSmall, GoogleReviewBox, ContactComponent}
}
</script>


<style scoped>
.google_reviews_wrapper {
  position: relative;
  bottom: 12rem;
  z-index: 2;
  left: 300px;
}

.contact_info_wrapper {
  width: 100%;
  display: inline-flex;
  justify-content: center;
  position: relative;
  bottom: 8rem;
}

.contact_info_container {
  width: 70%;
}

@media screen 
and (min-width: 1200px) 
and (max-width: 1600px) {
  .google_reviews_wrapper {
    left: 30px;
    bottom: 13rem;
  }

  .contact_info_wrapper {
    bottom: 5rem;
    position: relative;
  }

  .contact_info_container {
    width: 90%;
  }
}

@media screen 
and (min-width: 700px)
and (max-width: 1300px) {
  .google_reviews_wrapper {
    left: 30px;
  }

  .contact_info_wrapper {
    position: relative;
    bottom: 10rem;
  }
}

@media screen and (max-width: 700px) {
  .google_reviews_wrapper {
    left: 0;
    bottom: 0;
    top: 2rem;
  }

  .contact_info_container {
    width: 100%;
  }
}
</style>