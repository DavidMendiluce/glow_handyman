<template>
  <div v-show="!serviceClicked" class="services_container">
    <div class="services_wrapper">
      <div class="service_box">
        <a href="/home/air_conditioner">
          <img src="@/assets/images/air_conditioner.jpeg" alt="" class="services_img">
          <div class="border_Wrapper">
            <div class="bottom-border"></div>
          </div>
          <h3>AIR CONDITIONER SERVICES</h3>
        </a>
      </div>
      <div class="service_box">
        <a href="/home/lighting">
          <img src="@/assets/images/lighting.jpg" alt="" class="services_img">
          <div class="border_Wrapper">
            <div class="bottom-border"></div>
          </div>
          <h3>LIGHTING AND POWER</h3>
        </a>
      </div>
      <div class="service_box">
        <a href="/home/switchboards">
          <img src="@/assets/images/switchboards_beauty.png" alt="" class="services_img">
          <div class="border_Wrapper">
            <div class="bottom-border"></div>
          </div>
          <h3>SWITCHBOARDS</h3>
        </a>
      </div>
      <div class="service_box">
        <a href="/home/electrical_fault">
          <img src="@/assets/images/electrical_fault.jpg" alt="" class="services_img">
          <div class="border_Wrapper">
            <div class="bottom-border"></div>
          </div>
          <h3>ELECTRICAL FAULT FINDING</h3>
        </a>
      </div>
      <div class="service_box">
        <a href="/home/data">
          <img src="@/assets/images/router.jpg" alt="" class="services_img">
          <div class="border_Wrapper">
            <div class="bottom-border"></div>
          </div>
          <h3>DATA AND COMMUNICATIONS</h3>
        </a>
      </div>
      <div class="service_box">
        <a href="/home/antennas#antenna">
          <img src="@/assets/images/antennas.jpg" alt="" class="services_img">
          <div class="border_Wrapper">
            <div class="bottom-border"></div>
          </div>
          <h3>ANTENNAS</h3>
        </a>
      </div>
      <div class="service_box">
        <a href="/home/security_systems">
          <img src="@/assets/images/security_system.jpg" alt="" class="services_img">
          <div class="border_Wrapper">
            <div class="bottom-border"></div>
          </div>
          <h3>SECURITY SYSTEMS</h3>
        </a>
      </div>
      <div class="service_box">
        <a href="/home/security_cameras#cameras">
          <img src="@/assets/images/camera.jpg" alt="" class="services_img">
          <div class="border_Wrapper">
            <div class="bottom-border"></div>
          </div>
          <h3>SECURITY CAMERAS</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesComponent'
}
</script>


<style scoped>
  .services_container {
    width: 100%;
    height: 550px;
    position: absolute;
    background-color: white;
    z-index: 2;
    display: inline-flex;
    justify-content: center;
    border-bottom: 2px solid #213c74;
  }

  .services_wrapper {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
  }

  .service_box {
    width: 300px;
    height: 210px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .service_box img {
    width: 100%;
    height: 160px;
  }

  .service_box h3 {
    text-align: center;
    margin: auto auto;
    color: black;
    padding: 1rem;
    font-family: 'Poppins';
  }

  .border_Wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 5px;
  }

  .bottom-border {
    width: 70%;
    height: 100%;
    background-color: #213c74;
  }

  @media screen 
  and (min-width: 1200px) 
  and (max-width: 1600px) {
    .services_wrapper {
      width: 100%;
    }
  }

  @media screen 
  and (max-width: 1300px) {
    .services_container {
      height: 900px;
    }

    .service_box {
      margin: 2rem;
    }
  }
</style>