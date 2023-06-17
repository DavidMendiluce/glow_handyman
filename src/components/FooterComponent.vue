<template>
  <div class="wrapper">
    <div class="container">
      <ul class="contact">
        <li class="logo"></li>
        <li><i class="fa-solid fa-angle-right"></i><router-link to="../contact">Contact Us</router-link></li>
        <li><i class="fa-solid fa-angle-right"></i><router-link to="../aboutus">About Us</router-link></li>
        <li><i class="fa-solid fa-angle-right"></i><router-link to="../testimonials">Testimonials Us</router-link></li>
        <li class="arctick"></li>
      </ul>
      <ul class="electrical">
        <li class="title">ELECTRICAL SERVICES</li>
        <li><i class="fa-solid fa-angle-right"></i><router-link to="../home/air_conditioner">Air Conditioner Services</router-link></li>
        <li><i class="fa-solid fa-angle-right"></i><router-link to="../home/lighting">Lighting and Power</router-link></li>
        <li><i class="fa-solid fa-angle-right"></i><router-link to="../home/switchboards">Switchboards</router-link></li>
        <li><i class="fa-solid fa-angle-right"></i><router-link to="../home/electrical_fault">Electrical Fault Finding</router-link></li>
        <li><i class="fa-solid fa-angle-right"></i><router-link to="../home/data">Data and Communications</router-link></li>
        <li><i class="fa-solid fa-angle-right"></i><router-link to="../home/antennas">Antennas</router-link></li>
        <li><i class="fa-solid fa-angle-right"></i><router-link to="../home/security_systems">Security Systems</router-link></li>
        <li><i class="fa-solid fa-angle-right"></i><router-link to="../home/security_cameras">Security Cameras</router-link></li>
      </ul>
      <ul class="ac">
        <li class="title">AC REPAIRS & SERVICES</li>
        <li><i class="fa-solid fa-angle-right"></i><router-link to="../home/air_conditioner">AirCon installations</router-link></li>
        <li><i class="fa-solid fa-angle-right"></i><router-link to="../terms">Terms & Conditions</router-link></li>
        <li><i class="fa-solid fa-angle-right"></i><router-link to="../privacy">Privacy Policy</router-link></li>
      </ul>
      <ul class="details">
        <li class="title">OUR DETAILS</li>
        <li><i class="fa-sharp fa-solid fa-location-dot fa-xl"></i>Valladolid, Spain</li>
        <li><i class="fa-brands fa-whatsapp fa-xl"></i>0504 767 2223</li>
        <li><i class="fa-regular fa-envelope fa-xl"></i>davidmendiluce@gmail.com</li>
        <li><i class="fa-regular fa-clock fa-xl"></i>09:00 - 15:00 / 18:00 - 22:00 GMT+2</li>
        <li><img src="@/assets/images/upwork_logo.png"><a href="https://www.upwork.com/freelancers/davidmarcosmendiluce2">Contact me on upwork</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>


<style scoped>
.wrapper {
  width: 100%;
  display: inline-flex;
  justify-content: center;
  background-color: #eaeaea;
  margin-top: 1rem;
}

.container {
  width: 70%;
  display: inline-flex;
  justify-content: space-around;
  margin: 3rem;
}

.logo {
  position: relative;
  width: 225px;
  height: 70px;
  background-image: url("@/assets/images/logov2.png");
  background-size: cover;
  margin-bottom: 2rem;
  right: 0.5rem;
}

.arctick {
  background-image: url("@/assets/images/arctick_certified.png");
  background-size: cover;
  width: 220px;
  height: 70px;
}

li, a, a:visited {
  color: black;
  list-style-type: none;
}

li {
  border-bottom: 1px solid #cccccc;
  padding: 1rem 0;
  width: 350px;
}

a {
  margin-left: 15px;
}

.title {
  font-size: 16px;
  color: #203c74;
  font-weight: 600;
  border-bottom: none;
  margin: 1rem 0;
}

.details i {
  padding-right: 15px;
}

.details li:last-child {
  border-bottom: none;
  display: inline-flex;
}

.contact :nth-child(n+4), .contact :nth-child(1) {
  border-bottom: none;
}

.details img {
  width: 25px;
  height: 25px;
}

.details a {
  text-decoration: underline;
  cursor: pointer;
  margin: auto 15px;
}

@media screen 
and (min-width: 1200px) 
and (max-width: 1600px) {
  .container {
    width: 100%;
  }

  .container ul:nth-child(1) {
    padding: 0;
  }

  .container ul li {
    width: 250px;
  }

  .container .details li {
    width: 300px;
  }
}

@media screen and (max-width: 1200px) {
  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
  }

  .container ul {
    padding: 0;
    width: 80%;
    margin: auto;
    margin-top: 2rem;
  }

  .container ul:nth-child(1) li:nth-child(1) {
    width: 200px;
    height: 50px;
    margin: 2rem auto 3rem auto;
  }

  .container ul li {
    width: 100%;
  }

  .contact:nth-child(n+4) {
    border-bottom: 1px solid #cccccc;
  }

  .arctick {
    display: none;
  }

  .details li:nth-child(5) {
    font-size: 14px;
  }

  .details {
    padding-bottom: 3rem !important;
  }
}
</style>