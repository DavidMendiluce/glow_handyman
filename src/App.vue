<template>
  <HeaderComponent/>
  <HomePage v-if="!navigation"/>
  <router-view></router-view>
</template>

<script>
import HeaderComponent from './components/HeaderComponent';
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  data() {
    return {
      navigation: false,
      
    }
  },
  components: {
    HeaderComponent,
    HomePage
  },
  watch: {
    $route(currentRoute) {
      if(currentRoute.fullPath === '' || currentRoute.fullPath === '/' || currentRoute.fullPath.includes('home')) {
        this.navigation = false
      } else {
        this.navigation = true
      } 
    }
  }
}
</script>

<style>
  body {
    font-family: Arial,helvetica neue,Helvetica,sans-serif;
    margin: 0;
  }

  .router-link {
    text-decoration: none;
    color: white;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:visited {
    color: white;
  }
</style>