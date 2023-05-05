<template>
  <div class="container">
    <BannerSmall :title="'CONTACT US'"
    :description1="'Get in touch with our 24hr electrical & communication specialists.'"
    :description2="'Fast friendly 5-star service that is 100% GTD!'"
    :buttonTxt="'SEND YOUR ENQUIRY'" />
    <div class="google_reviews_wrapper">
      <GoogleReviewBox/>
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
  bottom: 7rem;
  z-index: 2;
  left: 300px;
}

.contact_info_wrapper {
  width: 100%;
  display: inline-flex;
  justify-content: center;
}

.contact_info_container {
  width: 70%;
}
</style>