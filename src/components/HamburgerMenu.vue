<template>
  <div class="container">
    <div class="bottom_header_container">
      <ul>
        <li><a href="../home">Home</a></li>
        <li><a href="../aboutus">About Us</a></li>
        <li class="services">Services
          <ul>
            <li><a href="/home/air_conditioner">Air Conditioner Services</a></li>
            <li><a href="/home/lighting">Lighting and Power</a></li>
            <li><a href="/home/switchboards">Switchboards</a></li>
            <li><a href="/home/electrical_fault">Electrical Fault Finding</a></li>
            <li><a href="/home/data">Data & Communications</a></li>
            <li><a href="/home/antennas">Antennas</a></li>
            <li><a href="/home/security_systems">Security Systems</a></li>
            <li><a href="/home/security_cameras">Security Cameras</a></li>
          </ul>
        </li>
        <li><a href="../testimonials">Testimonials</a></li>
        <li><a href="../contact">Contact Us</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HamburgerMenu'
}
</script>


<style scoped>
a, a:visited {
  color: black;
}

li {
  list-style-type: none;
  border-bottom: 1px solid #dbdbdb;
  padding: 1rem;
  font-size: 20px;
}

.services ul {
  margin-top: 1rem;
}

.services li {
  border: none;
  font-size: 18px;
}

ul {
  margin: 0;
  padding: 0;
}
</style>