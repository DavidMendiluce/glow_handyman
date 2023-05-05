<template>
  <BannerBig
    :titleFirst="banner.titleFirst"
    :titleSecond="banner.titleSecond"
    :buttonTxt="banner.buttonTxt"  
  />
  <div class="reviews_banner_wrapper">
    <ReviewsBanner/>
  </div>
  <ServiceDescription/>
</template>

<script>
import BannerBig from './BannerBig.vue';
import ReviewsBanner from './ReviewsBanner.vue';
import ServiceDescription from './ServiceDescription.vue';

export default {
  name: "HomePage",
  data() {
    return {
      banner: {
        titleFirst: 'Electrical Repairs &',
        titleSecond: 'Lighting',
        backgroundImg: '',
        buttonTxt: 'CONCTACT US'
      }
    }
  },
  watch: {
    $route(currentRoute) {
      if(currentRoute.fullPath === '/home/switchboards') {
        this.banner.titleFirst = 'Switchboards';
        this.banner.titleSecond = 'Electricians';
        this.banner.buttonTxt = 'GET IT FIXED';
      } else if(currentRoute.fullPath === '/home/air_conditioner') {
        this.banner.titleFirst = 'Air Conditioning';
        this.banner.titleSecond = 'Specialist';
        this.banner.buttonTxt = 'CONTACT US';
      } else if(currentRoute.fullPath === '/home/lighting') {
        this.banner.titleFirst = 'Lighting and Power';
        this.banner.titleSecond = 'Upgrades';
        this.banner.buttonTxt = 'BOOK MY JOB NOW';
      } else if(currentRoute.fullPath === '/home/electrical_fault') {
        this.banner.titleFirst = 'Electrical Fault';
        this.banner.titleSecond = 'Finding';
        this.banner.buttonTxt = 'BOOK MY JOB NOW';
      } else if(currentRoute.fullPath === '/home/data') {
        this.banner.titleFirst = 'Data and';
        this.banner.titleSecond = 'Communications';
        this.banner.buttonTxt = 'YES, BOOK MY JOB';
      } else if(currentRoute.fullPath === '/home/antennas') {
        this.banner.titleFirst = 'All type of';
        this.banner.titleSecond = 'Antennas';
        this.banner.buttonTxt = 'CONTACT US';
      } else if(currentRoute.fullPath === '/home/security_systems') {
        this.banner.titleFirst = 'Security Systems';
        this.banner.titleSecond = 'Installation';
        this.banner.buttonTxt = 'CONTACT US';
      } else if(currentRoute.fullPath === '/home/security_cameras') {
        this.banner.titleFirst = 'Security Cameras';
        this.banner.titleSecond = 'Installation';
        this.banner.buttonTxt = 'INSTALL MY CCTV';
      }
    }
  },
  components: { BannerBig, ReviewsBanner, ServiceDescription }
}
</script>


<style>
.reviews_banner_wrapper {
  width: 100%;
  display: inline-flex;
  justify-content: center;
}
</style>
