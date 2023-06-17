<template>
  <div class="container">
    <BannerSmall :title="'ABOUT US'"
    :description1="'Our team of electricians are dedicated to safety & quality service.'"
    :description2="'You can count on us to get your job done right.'"
    :buttonTxt="'GET A FAST FREE QUOTE'" />
  </div>
  <div class="quote_container">
    <img src="@/assets/images/quote.png">
    <h3>From small residential projects to full commercial solutions, we would love to hear from you. We provide 5-star service that's 100% guaranteed!</h3>
  </div>
  <div class="about_boxes">
    <div class="about_box_column">
      <div class="about_box">
        <h1>Talk to a Real Person</h1>
        <div class="border_Wrapper">
          <div class="bottom-border"></div>
        </div>
        <img src="https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/electrician.jpg"/>
        <div class="border_Wrapper yellow_border">
          <div class="bottom-border"></div>
        </div>
        <p>Talk to real people and don't wait on hold! 
          We understand how frustrating it can be when you need 
          someone to attend to your enquiry as quickly as possible. 
          We provide the very best service to our customers in the fastest manner possible.
        </p>
      </div>
      <div class="about_box">
        <h1>All Types of Electrical Work</h1>
        <div class="border_Wrapper">
          <div class="bottom-border"></div>
        </div>
        <img src="https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/electrical_fault.jpg"/>
        <div class="border_Wrapper yellow_border">
          <div class="bottom-border"></div>
        </div>
        <p>Our team performs the full spectrum of electrical work. 
          From small residential jobs to large industrial fault-finding work, 
          we can help. We strive to trouble shoot and resolve your problem on our first visit.
           Our prices are affordable, and provide a true 5-star service.
        </p>
      </div>
    </div>
    <div class="about_box_column">
      <div class="about_box">
        <h1>All Air-conditioner Services</h1>
        <div class="border_Wrapper">
          <div class="bottom-border"></div>
        </div>
        <img src="https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/air_conditioner_description_1.jpg"/>
        <div class="border_Wrapper yellow_border">
          <div class="bottom-border"></div>
        </div>
        <p>The Glow Handyman team specialises in all types of air-conditioning repairs, 
          servicing and installations. We carry a wide range of air conditioner spare parts,
           and all of the special cleaning equipment for our amazing air-conditioner cleaning services.
        </p>
      </div>
      <div class="about_box">
        <h1>Residential & Commercial</h1>
        <div class="border_Wrapper">
          <div class="bottom-border"></div>
        </div>
        <img src="https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/duct_repair.jpeg"/>
        <div class="border_Wrapper yellow_border">
          <div class="bottom-border"></div>
        </div>
        <p>We can perform all types of residential, commercial and industrial 
          air-conditioning and electrical work. Our team maintain the highest possible 
          WH+S standards in the industry, and we have a flawless track record 
          in electrical safety and compliance.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BannerSmall from './BannerSmall';


export default {
    name: "AboutUsPage",
    components: { BannerSmall}
}
</script>


<style>
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

.border_Wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 5px;
  justify-content: start;
}

.bottom-border {
  width: 100%;
  height: 100%;
  background-color: #213c74;
}

.about_box .yellow_border {
  justify-content: center;
}

.yellow_border .bottom-border {
  background-color: #fcde56;
  width: 20%;
  margin: 1rem 0;
}

.about_boxes {
  display: inline-flex;
  width: 100%;
  justify-content: center;
}

.about_box_column {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
}

.about_box {
  width: 550px;
  margin: 2rem 5rem;
}

.about_box h1 {
  text-align: center;
  font-size: 25px;
  margin: 0;
  padding: 1rem;
}

.about_box img {
  width: 100%;
  height: 360px;
}

.about_box p {
  margin: 2rem 0;
  font-family: 'Poppins';
  text-align: center;
}

@media screen 
and (min-width: 1200px) 
and (max-width: 1600px) {
  .about_box {
    margin: 2rem 3rem;
  }
}

@media screen 
and (min-width: 700px) 
and (max-width: 1300px) {
  .about_boxes {
    min-width: 1220px;
  }

  .about_box {
    margin: 2rem 1rem;
  }
}
</style>