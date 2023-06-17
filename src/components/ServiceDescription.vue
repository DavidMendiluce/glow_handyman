<template>
  <div class="service_description_container">
    <div class="specialist_container specalist_1">
      <div class="specialist_wrap">
        <img :src="specialist1Img">
        <div class="specialists_text">
          <div class="d_big_title_container">
          <div class="d_big_intro_line"></div>
              <div class="d_big_title_text">
                <p>{{ specialist1TitleFirst }}</p>
                <h1>{{ specialist1TitleSecond }}</h1>
              </div>
            </div>
              <p>{{specialist1Description}}
              </p>
              <div class="google_reviews_wrapper">
                <GoogleReviewBox :description=reviewCard1Description
                :username=reviewCard1Username :profileImg=reviewCard1ProfileImg />
              </div>
        </div>
      </div>
    </div>
    <div class="description_big big_1">
      <div class="description_big_text_container">
        <div class="description_big_text">
          <div class="description_big_text_wrap">
            <div class="d_big_title_container">
              <div class="d_big_intro_line"></div>
              <div class="d_big_title_text">
                <p>{{descriptionBig1titleFirst}}</p>
                <h1>{{descriptionBig1titleSecond}} <span>{{descriptionBig1titleSecondSpan}}</span></h1>
              </div>
            </div>
            <img src="@/assets/images/interior-lighting.jpg" class="description_big_img_mobile">
            <p>{{ descriptionBig1description1 }}
            </p>
            <h3 class="d_big_second_title">{{ descriptionBig1subHeading1}}</h3>
            <p>{{ descriptionBig1description2 }}
            </p>
            <h3 class="d_big_second_title">{{ descriptionBig1subHeading2}}</h3>
            <p>{{ descriptionBig1description3 }}
            </p>
            <button class="d_big_btn">{{descriptionBig1BtnText}}</button>
          </div>
        </div>
      </div>
      <img :src="descriptionBig1Img" alt="" class="description_big_img">
    </div>
    <div class="brands_container">
      <p style="color: #203c74; font-size: 22px">We Only Use the Best Electrical Parts on Your Job</p>
      <div id="brands_desktop" class="brands_wrap">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div id="brands_mobile" class="brands_wrap">
        <div class="brands_mobile_top">
          <ul>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
    <div id="cameras" class="description_big big_2">
      <img :src="descriptionBig2Img" alt="" class="description_big_img">
      <div class="description_big_text_container">
        <div class="description_big_text">
          <div class="description_big_text_wrap">
            <div class="d_big_title_container">
              <div class="d_big_intro_line"></div>
              <div class="d_big_title_text">
                <p>{{descriptionBig2titleFirst}}</p>
                <h1>{{descriptionBig2titleSecond}} <span>{{descriptionBig2titleSecondSpan}}</span></h1>
              </div>
            </div>
            <p>{{ descriptionBig2description1 }}
            </p>
            <h3 class="d_big_second_title">{{descriptionBig2subHeading}}</h3>
            <p>{{ descriptionBig2description2 }}
            </p>
            <div class="services_list">
              <ul>
                <li>
                  <i class="fa-sharp fa-regular fa-circle-check fa-lg"></i>
                  <p>{{ descriptionBig2Li1 }}</p></li>
                <li><i class="fa-sharp fa-regular fa-circle-check fa-lg"></i>
                  <p>{{ descriptionBig2Li2 }}</p></li>
              </ul>
              <ul>
                <li><i class="fa-sharp fa-regular fa-circle-check fa-lg"></i>
                  <p>{{ descriptionBig2Li3 }}</p></li>
                <li><i class="fa-sharp fa-regular fa-circle-check fa-lg"></i>
                  <p>{{ descriptionBig2Li4 }}</p></li>
              </ul>
            </div>
            <button class="d_big_btn">{{ descriptionBig2BtnText }}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="talk_to_us">
      <h1>Your Lighting & Power Specialists</h1>
      <p>With <b>100% Guarantees & 5-Star ratings</b>, you're in safe hands with us. 
        Talk to our power and lighting experts now on <span>0555 555 555</span></p>
        <div class="bottom_bar"></div>
    </div>
    <div id="antenna" class="description_big big_3">
      <div class="description_big_text_container">
        <div class="description_big_text">
          <div class="description_big_text_wrap">
            <div class="d_big_title_container">
              <div class="d_big_intro_line"></div>
              <div class="d_big_title_text">
                <p>{{descriptionBig3titleFirst}}</p>
                <h1>{{ descriptionBig3titleSecond }} <span>{{descriptionBig3titleSecondSpan}}</span></h1>
              </div>
            </div>
            <p>{{descriptionBig3description1}}
            </p>
            <h3 class="d_big_second_title">{{descriptionBig3subHeading1}}</h3>
            <p>{{descriptionBig3description2}}
            </p>
            <h3 class="d_big_second_title">{{descriptionBig3subHeading2}}</h3>
            <p>{{descriptionBig3description3}}
            </p>
            <button class="d_big_btn">{{descriptionBig3BtnText}}</button>
          </div>
        </div>
      </div>
      <img :src="descriptionBig3Img" alt="" class="description_big_img">
    </div>
    <div class="save_advert">
      <div class="save_advert_container">
        <div class="save_advert_description">
          <h1>Book Your Job Now & Save</h1>
          <p>With <b>100% Guarantees & 5-Star ratings</b>, you're in safe hands with us. 
            Talk to our power and lighting experts now on <span>0555 555 555</span></p>
        </div>
        <div class="save_advert_boxes">
          <div class="save_advert_box">
            <div class="advert_box_img_container">
              <img src="@/assets/images/coupon_white.png"/>
              <div class="save_advert_text">
                <h1><span>$25</span> OFF</h1>
                <div class="advert_small_txt">
                  <p>All air conditioner cleaning & service jobs</p>
                </div>
                <button>GRAB THIS OFFER</button>
              </div>
            </div>
          </div>
          <div class="save_advert_box">
            <div class="advert_box_img_container">
              <img src="@/assets/images/coupon_white.png"/>
              <div class="save_advert_text">
                <h1><span>$70</span> OFF</h1>
                <div class="advert_small_txt">
                  <p>All air conditioner cleaning & service jobs</p>
                </div>
                <button>GRAB THIS OFFER</button>
              </div>
            </div>
          </div>
          <div class="save_advert_box">
            <div class="advert_box_img_container">
              <img src="@/assets/images/coupon_white.png"/>
              <div class="save_advert_text">
                <h1>FREE</h1>
                <div class="advert_small_txt">
                  <p>All air conditioner cleaning & service jobs</p>
                </div>
                <button>GRAB THIS OFFER</button>
              </div>
            </div>
          </div>
          <div class="save_advert_box">
            <div class="advert_box_img_container">
              <img src="@/assets/images/coupon_white.png"/>
              <div class="save_advert_text">
                <h1><span>$30</span> OFF</h1>
                <div class="advert_small_txt">
                  <p>All air conditioner cleaning & service jobs</p>
                </div>
                <button>GRAB THIS OFFER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="specialist_container specialist_2">
      <div class="specialist_wrap">
        <img :src="specialist2Img">
        <div class="specialists_text">
          <div class="d_big_title_container">
          <div class="d_big_intro_line"></div>
              <div class="d_big_title_text">
                <p>{{specialist2TitleFirst}}</p>
                <h1>{{specialist2TitleSecond}}</h1>
              </div>
            </div>
              <p>{{specialist2Description}}
              </p>
              <div class="google_reviews_wrapper">
                <GoogleReviewBox :description=reviewCard2Description
                :username=reviewCard2Username :profileImg=reviewCard2ProfileImg />
              </div>
        </div>
      </div>
    </div>
    <div class="specialist_container specialist_3">
      <div class="specialist_wrap">
        <div class="specialists_text">
          <div class="d_big_title_container">
          <div class="d_big_intro_line"></div>
              <div class="d_big_title_text">
                <p>{{specialist3TitleFirst}}</p>
                <h1>{{specialist3TitleSecond}}</h1>
              </div>
            </div>
              <p>{{specialist3Description}}
              </p>
              <div class="google_reviews_wrapper reviews_left">
                <GoogleReviewBox :description=reviewCard3Description
                :username=reviewCard3Username :profileImg=reviewCard3ProfileImg />
              </div>
        </div>
        <img :src="specialist3Img">
      </div>
    </div>
    <div class="contact_wrapper">
      <div class="contact_container">
        <div class="contact_text">
          <h1>Your Local Air Conditioning Specialists</h1>
          <div class="contact_text_description">
            <p>Ask us anything or book your job below. 
              Our 5-star service and 100% guarantees mean your jobs get done right!</p>
          </div>
        </div>
      <ContactComponent/>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleReviewBox from './GoogleReviewBox.vue';
import ContactComponent from './ContactComponent.vue';


export default {
  name: "ServiceDescription",
  props: [
    'specialist1TitleFirst',
    'specialist1TitleSecond',
    'specialist1Description',
    'specialist1Img',
    'specialist2TitleFirst',
    'specialist2TitleSecond',
    'specialist2Description',
    'specialist2Img',
    'specialist3TitleFirst',
    'specialist3TitleSecond',
    'specialist3Description',
    'specialist3Img',
    'descriptionBig1titleFirst',
    'descriptionBig1titleSecond',
    'descriptionBig1titleSecondSpan',
    'descriptionBig1description1',
    'descriptionBig1subHeading1',
    'descriptionBig1description2',
    'descriptionBig1subHeading2',
    'descriptionBig1description3',
    'descriptionBig1BtnText',
    'descriptionBig1Img',
    'descriptionBig2titleFirst',
    'descriptionBig2titleSecond',
    'descriptionBig2titleSecondSpan',
    'descriptionBig2description1',
    'descriptionBig2subHeading',
    'descriptionBig2description2',
    'descriptionBig2Li1',
    'descriptionBig2Li2',
    'descriptionBig2Li3',
    'descriptionBig2Li4',
    'descriptionBig2BtnText',
    'descriptionBig2Img',
    'descriptionBig3titleFirst',
    'descriptionBig3titleSecond',
    'descriptionBig3titleSecondSpan',
    'descriptionBig3description1',
    'descriptionBig3subHeading1',
    'descriptionBig3description2',
    'descriptionBig3subHeading2',
    'descriptionBig3description3',
    'descriptionBig3BtnText',
    'descriptionBig3Img',
    'reviewCard1Title',
    'reviewCard1Description',
    'reviewCard1Username',
    'reviewCard1ProfileImg',
    'reviewCard2Title',
    'reviewCard2Description',
    'reviewCard2Username',
    'reviewCard2ProfileImg',
    'reviewCard3Title',
    'reviewCard3Description',
    'reviewCard3Username',
    'reviewCard3ProfileImg'
  ],
  components: { GoogleReviewBox, ContactComponent }
}
</script>


<style scoped>
h1, h2, h3, h4, h5, h6, p {
  font-family: 'Poppins';
}

.contact_wrapper {
  display: inline-flex;
  justify-content: center;
  width: 100%;
  margin: 5rem 0;
}

.contact_container {
  width: 70%;
}

.contact_text h1, .contact_text p {
  text-align: center;
  color: black;
}

.contact_text h1 {
  text-decoration: underline;
  font-size: 44px;
  margin-bottom: 1rem;
}

.contact_text_description {
  display: inline-flex;
  justify-content: center;
  width: 100%;
}

.contact_text p {
  width: 50%;
  font-size: 22px;
  line-height: 1.5;
  margin-top: 1rem;
}

.description_big {
  display: inline-flex;
  height: 950px;
}

.description_big button {
  width: 300px;
  margin-top: 1rem;
}


.description_big_img_mobile {
  display: none;
}

.big_1 {
  margin-top: 4rem;
}

.big_1 .description_big_text_wrap, .big_3 .description_big_text_wrap{
  margin: auto 5rem;
} 

.description_big_text_container {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.big_2 .description_big_text {
  justify-content: start;
  background-color: #202020;
}

.description_big_text {
  background-color: #203c74;
  width: 100%;
  display: inline-flex;
  justify-content: end;
  height: 850px;
}

.description_big_text_wrap {
  width: 60%;
  margin: auto 3rem;
}

.big_2 .description_big_text_wrap {
  margin-left: 5rem;
}

.d_big_title_container {
  display: inline-flex;
}

.d_big_intro_line {
  width: 6px;
  height: 70px;
  background-color: #e8c547;
}

.d_big_title_text {
  margin-left: 1rem;
}

p:nth-child(2) {
  margin-top: 2rem;
}

p {
  color: white;
  font-size: 18px;
  font-weight: lighter;
  line-height: 2;
}

h1 {
  margin: 0;
  font-size: 44px;
  line-height: 0.8;
  color: white;
}

h1 span {
  color: #e8c547;
}

h3 {
  font-size: 26px;
  font-weight: lighter;
  margin: 1rem 0;
  color: white;
}

.description_big_text_wrap .d_big_title_text p {
  margin: 0;
  font-size: 16px;
  width: 100%;
}

img {
  width: 40%;
}

button {
  border: 1px solid white;
  background: transparent;
  width: 250px;
  height: 60px;
  font-size: 18px;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #e8c547;
  color: black;
}

.brands_container {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.brands_container p {
  color: black;
  text-align: center;
  width: 80%;
  margin: 2rem auto;
}

.services_list {
  display: inline-flex;
  width: 120%;
  margin-bottom: 1rem;
}

.services_list ul {
  padding-left: 0;
  margin: auto;
}

.services_list ul:nth-child(1) {
  width: 60%;
}

.services_list ul:nth-child(1) li {
  margin-left: 0;
}

.services_list ul li {
  color: white;
  font-size: 20px;
  margin: 1rem;
  list-style-type: none;
  display: inline-flex;
}

.services_list ul li i {
  padding-right: 1rem;
  margin: auto;
}

.services_list ul li p {
  margin: auto;
}

.talk_to_us {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.talk_to_us h1, .talk_to_us p{
  color: black;
}

.talk_to_us p {
  width: 40%;
  text-align: center;
  margin: 1rem auto;
}

.talk_to_us p span {
  text-decoration: underline;
}

.talk_to_us h1 {
  margin: 1rem auto;
}

.talk_to_us .bottom_bar {
  width: 200px;
  height: 5px;
  background-color: #e8c547;
  margin: 0 auto;
}

#brands_mobile {
  display: none;
}

.brands_mobile_top {
  display: inline-flex;
  margin: auto;
}
.brands_mobile_top ul {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0 1rem;
}

#brands_mobile .brands_mobile_top ul li {
  width: 100px;
  height: 50px;
  margin: 1rem;
}

.brands_mobile_bottom {
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.brands_mobile_bottom ul {
  margin: 0;
}

.brands_wrap {
  width: 100%;
  display: inline-flex;
  justify-content: center;
}

.brands_container ul {
  display: inline-flex;
  justify-content: space-around;
  width: 80%;
}

.brands_container ul li {
  width: 170px;
  height: 120px;
  list-style-type: none;
}

.specialist_container {
  display: inline-flex;
  justify-content: center;
  margin: 5rem 0;
}

.specialist_wrap {
  width: 70%;
  display: inline-flex;
}

.specialist_wrap img {
  width: 45%;
  height: 400px;
}

.specialists_text {
  width: 60%;
  margin-left: 3rem;
}

.specialists_text p{
  color: black;
  margin: 0;
}

.specialist_3 .specialists_text p {
  width: 90%;
}

.specialists_text .d_big_title_text {
  margin-bottom: 2rem;
}

.specialists_text .d_big_title_container {
  display: inline-flex;
}

.specialists_text .d_big_title_container .d_big_intro_line {
  background-color: #b63332;
}

.specialists_text .d_big_title_text h1 {
  font-size: 28px;
  color: #203c74;
  margin: 0.5rem 0;
}

.google_reviews_wrapper {
  position: relative;
  right: 9rem;
  top: 2rem;
  z-index: 2;
}

.reviews_left {
  right: -200px;
}

.save_advert {
  width: 100%;
  height: 600px;
}
.save_advert_box {
  width: 300px;
  height: 300px;
  background-color: white;
  border: 12px solid #fff;
  box-shadow: 0 3px 8px rgba(0,0,0,.32);
  display: flex;
  justify-content: center;
}

.advert_box_img_container {
  width: 95%;
  height: 95%;
  position: relative;
  background-color: #203c74;
  margin: auto;
  display: flex;
  justify-content: center;
}

.advert_box_img_container img {
  position: absolute;
  width: 100%;
  height: 100%;
}

.advert_box_img_container p {
  z-index: 1;
  position: absolute;
  color: white;
}

.save_advert_text {
  margin: auto;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.save_advert_text h1 {
  margin: 1rem;
  margin-top: 1rem;
  text-align: center;
}

.save_advert_text .advert_small_txt {
  width: 100%;
  display: inline-flex;
  justify-content: center;
}

.save_advert_text p {
  margin: 1rem;
  margin-top: 0;
  text-align: center;
  width: 70%;
  line-height: 1;
}

.save_advert_text button {
  margin: 1rem;
  background-color: #e8c547;
  border: none;
  border-radius: 2px;
  color: black;
  font-weight: 700;
  z-index: 3;
  width: 200px;
  height: 50px;
  margin-top: 5rem;
  font-size: 16px;
  font-family: 'Poppins';
}

.save_advert_text button:hover {
  color: #203c74;
  cursor: pointer;
}

.save_advert_text span {
  color: #e8c547;
}

.save_advert_boxes {
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
}

.brands_wrap li {
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.brands_wrap li:nth-child(1) {
  background-image: url('@/assets/images/logo_1.png');
}

.brands_wrap li:nth-child(2) {
  background-image: url('@/assets/images/logo_2.png');
}

.brands_wrap li:nth-child(3) {
  background-image: url('@/assets/images/logo_3.png');
}

.brands_wrap li:nth-child(4) {
  background-image: url('@/assets/images/logo_4.png');
}

.brands_wrap li:nth-child(5) {
  background-image: url('@/assets/images/logo_5.png');
}

@media screen and (min-width: 700px)
and (max-width: 1200px) {
  .description_big {
    max-width: 1200px;
    height: 780px;
  }

  .description_big_text_container {
    height: 750px;
  }

  .description_big_text {
    height: 800px;
    width: 750px;
  }

  .description_big_text_wrap {
    width: 572px;
  }

  .description_big_text p {
    font-size: 16px;
  }

  .description_big_img {
    width: 488px;
  }
}

@media screen 
and (min-width: 700px)
and (max-width: 1000px) {
  .description_big_text_container {
    height: 780px;
  }
}

@media screen 
and (min-width: 700px) 
and (max-width: 1300px) {
  .service_description_container {
    min-width: 1220px;
  }

  .specialist_container {
    width: 1200px;
  }

  .specialist_wrap {
    width: 1100px;
  }

  .service_description_container .specialist_wrap img {
    width: 500px;
    height: 400px;
  }

  .specialists_text {
    width: 600px;
  }

  .service_description_container .save_advert_boxes {
    width: 1200px;
    min-width: 1200px;
  }

  .save_advert {
    height: 450px;
  }

  .save_advert_box {
    width: 250px;
    height: 250px;
  }

  .save_advert_boxes {
    width: 95%;
  }

  .save_advert_text h1 {
    font-size: 35px;
  }

  .save_advert_text p {
    font-size: 14px;
    line-height: 1.2;
  }

  .save_advert_text button {
    font-size: 14px;
    margin-top: 3rem;
    width: 180px;
  }
}
 
@media screen 
and (min-width: 1200px) 
and (max-width: 1600px) {
 .save_advert {
    height: 450px;
  }

  .save_advert_box {
    width: 250px;
    height: 250px;
  }

  .save_advert_boxes {
    width: 95%;
  }

  .save_advert_text h1 {
    font-size: 35px;
  }

  .save_advert_text p {
    font-size: 14px;
    line-height: 1.2;
  }

  .save_advert_text button {
    font-size: 14px;
    margin-top: 3rem;
    width: 180px;
  }

  .contact_container {
    width: 95%;
  }

  .description_big {
    height: 900px;
  }

  .description_big_text {
    height: 100%;
  }

  .description_big_text_wrap {
    width: 80%;
  }

  .description_big button {
    width: 300px;
    margin-top: 1rem;
  }

  .specialist_wrap {
    width: 88%;
  }

  .description_big {
    height: 850px;
  }

  .container ul li {
    line-height: 2;
  }

  .specialist_wrap img {
    height: 350px;
    width: 40%;
  }

  .contact_text {
    margin-bottom: 6rem;
  }
}

@media screen 
and (min-width: 700px)
and (max-width: 1200px) {
  .contact_text h1 {
    line-height: 1.3;
  }
}

@media screen 
and (min-width: 1000px) 
and (max-width: 1300px) {
  .description_big p {
    font-size: 16px;
  }

  .description_big {
    height: 750px;
  }
} 

@media screen and (max-width: 700px) {
  .specialist_container {
    margin-top: 2rem;
  }

  .specialist_3 {
    margin-top: 5rem;
  }

  .specialist_3 .specialists_text p {
    width: 100%;
  }

  .specialists_text .d_big_title_text {
    margin-bottom: 0;
  }

  .big_1 {
    margin-top: 0;
  }

  .specialist_wrap {
    flex-direction: column-reverse;
    width: 100%;
  }

  .specialist_wrap img {
    width: 95%;
    height: 300px;
    position: relative;
    bottom: 9rem;
    margin: auto;
  }

  .specialists_text {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    height: 50%;
  }

  .d_big_title_container {
    flex-direction: column;
    margin: auto;
  }

  .big_3 {
    margin-top: 0;
  }

  .d_big_intro_line {
    width: 70px;
    height: 6px;
    text-align: center;
    margin: auto;
  }

  .d_big_title_text p {
    text-align: center;
    margin: 0 !important;
    margin-top: 1rem !important;
  }

  .d_big_title_text h1 {
    text-align: center;
    line-height: 1.2;
    font-size: 26px;
  }

  .specialists_text p {
    width: 90%;
    text-align: center;
    margin: 1rem auto;
  }

  .description_big_img {
    display: none;
  }

 .description_big_img_mobile {
    display: block;
    margin: 1rem auto !important;
  }

  .google_reviews_wrapper {
    right: 0;
    top: 25rem;
    display: flex;
  }

  .description_big_text_container {
    width: 100%;
  }

  .description_big_text {
    background: transparent;
  }

  .description_big_text_wrap {
    width: 100%;
    margin: 0 !important;
    display: flex;
    flex-direction: column;
  }

  .d_big_intro_line {
    width: 30%;
  }

  .description_big .d_big_intro_line {
    width: 40%;
  }

  .d_big_title_text {
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  .d_big_title_text p {
    color: black;
    margin-top: 1rem;
    letter-spacing: 1.5px;
    width: 100%;
  }

  .d_big_title_text h1 {
    color: black;
    line-height: 1;
    position: relative;
    bottom: 0.5rem;
    font-family: 'Poppins';
    font-size: 30px;
    margin-top: 0.5rem;
    width: 100%;
    margin: 1rem auto;
  }

  .d_big_title_text h1 span {
    font-size: 30px;
  }

  .specialist_container .d_big_title_text h1 {
    margin: 1rem auto;
    width: 90%;
    line-height: 1.3;
  }

  .description_big_text_wrap img {
    width: 95%;
    height: 40%;
    margin: 1rem;
  }

  .description_big_text_wrap p {
    color: black;
    text-align: center;
    width: 90%;
    margin: 2rem auto;
  }
  
  .d_big_second_title {
    color: black;
    text-align: center;
    font-weight: bold;
    margin: 0;
    font-size: 22px;
    margin: auto;
    width: 80%;
  }

  .description_big_text_wrap p:nth-child(2), .description_big_text_wrap p:nth-child(3) {
    margin-top: 1rem;
  }

  .brands_container {
    margin-top: 35rem;
  }

  #brands_mobile {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  .brands_wrap ul:nth-child(1) li:nth-child(1) {
    background-image: url('@/assets/images/logo_1.png');
  }
  
  .brands_wrap ul:nth-child(1) li:nth-child(2) {
    background-image: url('@/assets/images/logo_2.png');
  }
  
  .brands_wrap ul:nth-child(2) li:nth-child(1) {
    background-image: url('@/assets/images/logo_3.png');
  }
  
  .brands_wrap ul:nth-child(2) li:nth-child(2) {
    background-image: url('@/assets/images/logo_4.png');
  }

  #brands_desktop {
    display: none;
  }

  .description_big .d_big_btn {
    display: none;
  }

  .big_2 .description_big_text {
    background: transparent;
  }

  .talk_to_us h1 {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
  }

  .talk_to_us p {
    width: 90%;
  }

  .services_list {
    display: none;
  }

  .save_advert {
    margin-top: 10rem;
  }
  .save_advert_boxes {
    width: 100%;
  }

  .save_advert h1, .save_advert p {
    color: black;
  }

  .save_advert_description {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .save_advert h1 {
    text-align: center;
    font-size: 30px;
    width: 80%;
    margin: auto;
    line-height: 1.5;
  }

  .save_advert p {
    margin: 1rem auto;
    width: 90%;
    text-align: center;
  }

  .save_advert_boxes {
    flex-direction: column;
  }

  .save_advert_box {
    width: 300px;
    height: 250px;
    margin: 2rem auto;
  }

  .save_advert_text {
    width: 100%;
  }

  .save_advert_text h1 {
    margin: 1rem auto;
    color: white;
  }

  .save_advert_text h1 span {
    font-size: 40px;
  }

  .advert_small_txt {
    position: relative;
    bottom: 1rem;
  }

  .advert_small_txt p {
    width: 80%;
    font-size: 16px;
    margin: 0 auto;
    color: white;
  }

  .save_advert_text button {
    font-size: 16px;
    width: 80%;
    margin: auto;
  }

  .specialist_2 {
    margin-top: 65rem;
  }

  .specialist_3 .specialist_wrap {
    flex-direction: column;
  }

  .contact_container {
    width: 100%;
    margin-top: 6rem;
  }
  
  .contact_text h1 {
    font-size: 25px;
    width: 90%;
    margin: auto;
    line-height: 1.5;
  }

  .contact_text_description {
    margin-top: 1rem;
  }

  .contact_text p {
    width: 80%;
  }
 }

 @media screen and (min-width: 360px)
 and (max-width: 380px) {
  .brands_container {
    margin-top: 42rem;
  }
  .save_advert {
    margin-top: 15rem;
  }
 }
</style>