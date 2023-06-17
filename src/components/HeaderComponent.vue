<template>
  <div id="bottomHeaderScroll" class="bottom_header_container invisible">
    <ul>
      <li @click="goHome()">Home</li>
      <li @mouseover="hideServices"><router-link to="../aboutus">About Us</router-link></li>
      <li @mouseover="hideServices"><router-link to="../home">Services</router-link></li>
      <li @mouseover="hideServices"><router-link to="../testimonials">Testimonials</router-link></li>
      <li @mouseover="hideServices" @mouseleave="closeServiceAreas($event)"><router-link to="../home">Service Areas</router-link></li>
      <li><router-link to="../contact">Contact Us</router-link></li>
    </ul>
  </div>
  <div id="topHeader" class="top_header_wrapper">
    <div @mouseover="hideServices" class="top_header">
      <div class="header_first">
        <div class="header_logo">
          <img @click="goHome()" src="@/assets/images/logov2.png"/>
        </div>
        <div class="header_certifications">
          <img src="@/assets/images/arctick_certified.png"/>
          <img src="@/assets/images/google_reviews.jpg"/>
          <img style="width: 80px; height: 60px" src="@/assets/images/smrp.png"/>
        </div>
      </div>
      <div class="header_last">
        <i class="fa-brands fa-whatsapp fa-3x"></i>
        <h1 class="whatsapp_number">0504 767 2223</h1>
        <i @click="toggleMenu" class="fa-solid fa-bars fa-3x"></i>
      </div>
    </div>
  </div>
  <div v-show="!headerScroll" id="bottomHeader" class="bottom_header_container">
    <ul>
      <li @click="goHome()">Home</li>
      <li @mouseover="hideServices"><router-link to="../aboutus">About Us</router-link></li>
      <li @mouseover="showServices" @mouseleave="checkServices">Services</li>
      <li @mouseover="hideServices"><router-link to="../testimonials">Testimonials</router-link></li>
      <li @mouseover="openServiceAreas" @mouseleave="closeServiceAreas($event)">
        Service Areas
          <div ref="service_areas_ref" class="service_areas_wrapper">
              <div :class="[areas ? 'fadeIn' : 'fadeOut']" class="service_areas fadeActive">
                <ul class="service_areas_list">
                  <li @click="goAir"><span>Air Conditioning Areas</span><span></span></li>
                  <li @click="goElectric"><span>Electrical Areas</span><span></span></li>
                  <li @click="goEv"><span>EV Charge Areas</span><span></span></li>
                  <li><p>Trusted Service in your Area</p></li>
                </ul>
              </div>
          </div>
      </li>
      <li><router-link to="../contact">Contact Us</router-link></li>
    </ul>
  </div>
  <div v-show="mobileMenu" class="hamburger_container">
    <HamburgerMenu/>
  </div>
  <div @mouseleave="hideServices" v-show="servicesOn" class="services_window">
    <ServicesComponent/>
  </div>
</template>

<script>
import HamburgerMenu from './HamburgerMenu.vue';
import ServicesComponent from './ServicesComponent.vue';
require('@/assets/styles/fade.css')
export default {
  name: "HeaderComponent",
  data() {
    return {
      servicesOn: false,
      enteredServices: false,
      areas: false,
      mobileMenu: false,
      headerScroll: false
    }
  },
  methods: {
    showServices() {
      this.servicesOn = true
    },

    hideServices() {
      this.servicesOn = false
    },

    openServiceAreas() {
      this.areas = true;
    },

    closeServiceAreas() {
      this.areas = false
    },

    goAir() {
      window.location.href = '../home/air_areas'
    },

    goEv() {
      window.location.href = '../home/ev_areas'
    },

    goElectric() {
      window.location.href = "../home/electrical_areas"
    },

    goHome() {
      window.location.href = "../home"
    },

    toggleMenu() {
      if(this.mobileMenu === true) {
        this.mobileMenu = false;
      } else {
        this.mobileMenu = true;
      }
    },

    handleScroll() {
      let scroll = window.scrollY;
      const header = document.getElementById('bottomHeaderScroll');
        console.log(this.headerScroll);
        if(scroll > 190) {
        header.classList.remove('invisible')
      } else {
        header.classList.add('invisible')
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  components: {
    HamburgerMenu,
    ServicesComponent
  }
}
</script>

<style scoped>

  .invisible {
    visibility: hidden;
  }

  #bottomHeaderScroll {
    position: fixed;
    z-index: 10;
  }

  .service_areas_list {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100% !important;
  }

  .service_areas_list li {
    color: white;
    margin: 1rem;
    height: 40px;
    list-style-type: none;
    display: flex;
    justify-content: end;
  }

  .service_areas_list li:first-child {
    margin-top: 2rem;
  }

  .service_areas_list li:last-child:hover {
    background-color: transparent;
    cursor: auto;
  }

  .service_areas_list li:hover {
    background-color: grey;
  }

  .service_areas_list li span:first-child {
    font-size: 19px;
    margin: auto 0;
    margin-right: 1rem;
  }

  .service_areas_list li span:last-child {
    background-color: #e8c547;
    width: 5px;
    height: 100%;
  }

  .service_areas_list li:last-child {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    margin: 0;
  }

  .service_areas_list li p {
    font-size: 14px;
    text-align: center;
    margin: auto;
    font-style: italic;
    font-size: 17px;
  }

  .fadeActive {
    transition: all 0.3s ease-out;
  }

  .fadeIn {
    max-height: 500px;
    opacity: 1;
    visibility: visible;
  }

  .fadeOut {
    max-height: 0px;
    opacity: 0;
    visibility: hidden;
  }
  .top_header_wrapper {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    z-index: 1;
  }

  .top_header {
    display: inline-flex;
    justify-content: space-between;
    width: 60%;
  }

  .top_header .header_first {
    display: inline-flex;
  }

  .header_logo {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
  }

  .top_header .header_logo img {
    width: 180px;
    height: 85px;
  }
  .header_certifications {
    height: 100px;
    display: flex;
    justify-content: start;
    margin-left: 2rem;
  }
  
  .header_certifications img {
    width: 140px;
    height: 70px;
    margin: auto 1rem;
  }

  .header_last {
    height: 100px;
    display: flex;
  }

  .header_last i:nth-child(1) {
    color: #213c74;
    margin: auto 1rem;
  }

  .header_last h1 {
    color: #213c74;
    margin: auto 0;
    font-size: 40px;
  }

  .header_certifications img:nth-child(3) {
    height: 50px;
  }

  .bottom_header_container {
    display: inline-flex;
    justify-content: center;
    background-color: #202020;
    width: 100%;
    z-index: 1;
  }

  .bottom_header_container ul {
    padding: 0;
    display: inline-flex;
    justify-content: space-around;
    width: 60%;
    color: white;
  }

  .bottom_header_container ul li {
    list-style-type: none;
    font-size: 19px;
  }

  .bottom_header_container ul li:hover {
    cursor: pointer;
  }

  .service_areas {
    width: 20%;
    position: absolute;
    left: 52%;
    background-color: #202020;
    top: 9rem;
  }

  .fa-bars {
    display: none;
    color: #213c74;
    margin: auto 2rem;
    cursor: pointer;
  }

  .navbarHide {
    display: none;
  }

  .navbarScroll {
    position: fixed;
  }

  @media screen 
  and (min-width: 1200px) 
  and (max-width: 1600px) {
    .top_header {
      width: 90%;
    }

    .bottom_header_container ul {
      width: 90%;
    }
  }

  @media screen 
  and (max-width: 1200px) {
    .top_header {
      z-index: 5;
      top: 0px;
      position: fixed;
      background: white;
      width: 100%;
      border-bottom: 1px solid #dbdbdb;
    }

    .top_header_wrapper {
      border-bottom: 1px solid #dbdbdb;
    }

    .bottom_header_container{
      display: none;
    }

    .header_certifications img:nth-child(3) {
      display: none;
    }

    .fa-bars {
      display: block;
    }

    .hamburger_container .container {
      z-index: 5;
      top: 0px;
      position: fixed;
      background: white;
      width: 100%;
      margin-top: 6.3rem;
    }
  }

  @media screen 
  and (max-width: 1100px) {
    .header_certifications img:nth-child(2) {
      display: none;
    }
  }

  @media screen 
  and (max-width: 900px) {
    .header_certifications img:nth-child(1) {
      display: none;
    }
  }

  @media screen 
  and (max-width: 700px) {
    .whatsapp_number {
      display: none;
    }

    .header_certifications {
      display: none;
    }

    .header_last i:nth-child(1) {
      margin: auto 0;
    }

    .top_header .header_logo img {
      width: 150px;
      height: 75px;
      margin: 1rem;
    }
  }
</style>