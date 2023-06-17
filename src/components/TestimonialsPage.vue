<template>
  <BannerSmall :title="'TESTIMONIALS'"
    :description1="'You can count on our team of experienced electricians & air'"
    :description2="'conditioner technicians to get your job done right!'"
    :buttonTxt="'GET A FAST FREE QUOTE'"/>
  <div class="quote_container">
    <img src="@/assets/images/quote.png">
    <h3>Our guaranteed services & 5-Star reviews means you're in safe hands. 
      You can trust the experienced team from Glow Handyman.</h3>
  </div>
  <div class="reviews_card_wrap">
    <div class="reviews_card_container">
      <div class="left_reviews_column">
        <ReviewCard :key="card.id" v-for="card in reviewCards.slice(0,3)" :title="card.title"
        :description="card.description"
        :username="card.username"
        :profileImg="card.profileImg"/>
      </div>
      <div class="right_reviews_column">
        <ReviewCard :key="card.id" v-for="card in reviewCards.slice(3,6)" :title="card.title"
        :description="card.description"
        :username="card.username"
        :profileImg="card.profileImg"/>
      </div>
    </div>
  </div>
</template>

<script>
import BannerSmall from './BannerSmall';
import ReviewCard from './ReviewCard';

export default {
    name: "TestimonialsPage",
    data() {
      return {
          reviewCards: [
          {
            id: 1,
            title: 'Punctuality & Advice was Terrific',
            description: "Richard's work, communication, punctuality and advice was terrific. Nothing seemed to be too much trouble. We are really happy with the outcome.",
            username: 'Sherley Briar',
            profileImg: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/profile/profile_1.png'
          },
          {
            id: 2,
            title: 'Responsive, on Time, Tidy & Transparent',
            description: "They've solved a few tricky problems for me and are good at working with dodgy old electrics in the 100 year old apartment. Highly recommended.",
            username: 'Dan Kenny',
            profileImg: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/profile/profile_4.png'
          },
          {
            id: 3,
            title: 'Recommend Them to Friends & Family',
            description: "They were quick to come out and fix the problem - their service was great and the team was friendly. I'll definitely use their service again and recommend them to friends and family.",
            username: 'Raquel Sydnie',
            profileImg: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/profile/profile_2.png'
          },
          {
            id: 4,
            title: 'Highly Recommend Him & His Company',
            description: "A very big thank you to Daniel at Spark Innovation for the early morning call out, that was fast & efficient. My family highly recommend him and his company for their professional service.",
            username: 'William Monty',
            profileImg: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/profile/profile_5.png'
          },
          {
            id: 5,
            title: 'Really Happy with the Outcome',
            description: "Communication, punctuality and advice was terrific. We are really happy with the outcome. Nothing seemed to be too much trouble.",
            username: 'Harmonie Rorie',
            profileImg: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/profile/profile_3.png'
          },
          {
            id: 6,
            title: 'Took on a Tricky Job & Delivered',
            description: "Excellent comms; arrived when arranged, took on a tricky job and delivered. Neat work and also tidied up afterwards. I'll have no hesitation calling back next time! Thanks.",
            username: 'Duke Huxley',
            profileImg: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/profile/profile_6.png'
          }
        ]
      }
    },
    components: { BannerSmall, ReviewCard }
}
</script>


<style>
.reviews_card_wrap {
  width: 100%;
  display: inline-flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.reviews_card_container {
  width: 70%;
  display: inline-flex;
  justify-content: space-between;
}

.quote_container img {
  width: 70px;
  height: 70px;
}

.quote_container {
  display: inline-flex;
  margin-left: 200px;
}

.quote_container h3 {
  width: 70%;
  font-family: 'Poppins';
  margin-left: 10px;
  font-style: italic;
  font-size: 25px;
}

@media screen 
and (min-width: 1200px) 
and (max-width: 1600px) {
  .reviews_card_container {
    width: 95%;
  }
}

@media screen 
and (min-width: 700px)
and (max-width: 1200px) {
  .reviews_card_wrap {
    min-width: 1200px;
  }

  .reviews_card_container {
    width: 1200px;
  }
}

@media screen and (max-width: 700px) {
  .reviews_card_wrap {
    display: flex;
    flex-direction: column;
    margin-top: 0;
  }

  .reviews_card_container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .quote_container {
    margin: 2rem;
  }
}
</style>