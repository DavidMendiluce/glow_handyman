<template>
  <div v-show="!serviceClicked" class="services_container">
    <div class="service_box">
      <a href="/home/air_conditioner">
        <img src="" alt="" class="services_img">
        <h3>AIR CONDITIONER SERVICES</h3>
      </a>
    </div>
    <div class="service_box">
      <a href="/home/lighting">
        <img src="" alt="" class="services_img">
        <h3>LIGHTING AND POWER</h3>
      </a>
    </div>
    <div class="service_box">
      <a href="/home/switchboards">
        <img src="" alt="" class="services_img">
        <h3>SWITCHBOARDS</h3>
      </a>
    </div>
    <div class="service_box">
      <a href="/home/electrical_fault">
        <img src="" alt="" class="services_img">
        <h3>ELECTRICAL FAULT FINDING</h3>
      </a>
    </div>
    <div class="service_box">
      <a href="/home/data">
        <img src="" alt="" class="services_img">
        <h3>DATA AND COMMUNICATIONS</h3>
      </a>
    </div>
    <div class="service_box">
      <a href="/home/antennas">
        <img src="" alt="" class="services_img">
        <h3>ANTENNAS</h3>
      </a>
    </div>
    <div class="service_box">
      <a href="/home/security_systems">
        <img src="" alt="" class="services_img">
        <h3>SECURITY SYSTEMS</h3>
      </a>
    </div>
    <div class="service_box">
      <a href="/home/security_cameras">
        <img src="" alt="" class="services_img">
        <h3>SECURITY CAMERAS</h3>
      </a>
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
    border: 1px solid red;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
    position: absolute;
    background-color: white;
    z-index: 2;
  }

  .service_box {
    border: 1px solid yellow;
    width: 300px;
    height: 210px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .service_box img {
    border: 1px solid black;
    width: 100%;
    height: 160px;
  }

  .service_box h3 {
    text-align: center;
    margin: auto auto;
  }
</style>