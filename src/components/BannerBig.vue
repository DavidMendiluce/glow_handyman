<template>
  <div v-bind:style="{ backgroundImage: 'url(' + imagePath + ')' }" class="banner_container">
    <div class="banner_text_wrapper">
      <h4>SPECIALIST IN</h4>
      <div class="title">
        <span>{{ titleFirst }}</span>
        <span>{{ titleSecond }}</span>
      </div>
      <ul>
        <li class="no_content">
          <span>Repairs</span>
        </li>
        <li>
          <span>Installation</span>
        </li>
        <li>
          <span>Electrical</span>
        </li>
      </ul>
      <button>{{ buttonTxt }}</button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'BannerBig',
  props: ['titleFirst', 'titleSecond', 'buttonTxt', 'imagePath']
}
</script>


<style scoped>
  h1, h2, h3, h4, h5, h6, ul li, p, .title {
    color: white; 
  }

  .no_content::before {
    content: "" !important;
    margin: 0 !important;
  }
</style>

<style>
  .banner_container {
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    display: inline-flex;
    justify-content: center;
    height: 600px;
  }

  .banner_text_wrapper {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    width: 60%;
  }

  .banner_text_wrapper button {
    width: 320px;
    height: 60px;
    margin-top: 1rem;
    color: #213c74;
    background-color: #e8c547;
    border: none;
    border-radius: 3px;
    font-family: 'poppins', sans-serif;
    font-weight: 600;
    font-size: 22px;
    cursor: pointer;
  }

  .banner_text_wrapper button:hover {
    background-color: #ebbd28;
    color: #143273;
  }

  .banner_text_wrapper h4 {
    margin-bottom: 0;
  }

  .banner_text_wrapper h1, .banner_text_wrapper .title {
    padding-left: 0.1rem;
    font-size: 65px;
    font-family: 'poppins' ,sans-serif;
    display: flex;
    flex-direction: column;
    line-height: 1.2;
    margin-bottom: 0;
    margin-top: 0;
    font-weight: 700;
  }

  .banner_text_wrapper .title span:nth-child(2) {
    color: #e8c547;
  }

  .banner_text_wrapper ul {
    list-style-type: none;
    display: inline-flex;
    padding: 0;
    margin-top: 1rem;
  }

  .banner_text_wrapper ul li {
    font-size: 50px;
    display: flex;
    cursor: pointer;
  }

  .banner_text_wrapper ul li span {
    font-size: 20px;
    margin: auto;
  }

  .banner_text_wrapper ul li::before {
    content: "\2022";
    color: #e8c547;
    margin: 1rem;
  }

  @media screen 
  and (min-width: 1200px) 
  and (max-width: 1600px) {
    .banner_text_wrapper {
      width: 100%;
    }
  }

  @media screen 
  and (min-width: 700px) 
  and (max-width: 1300px) {
    .banner_container {
      min-width: 1200px;
    }

    .banner_text_wrapper {
      width: 100%;
    }
  }

  @media screen and (max-width: 700px) {
    .banner_container {
      background-image: url('@/assets/images/mobileBanner.png') !important;
      height: 90px;
      display: flex;
      flex-direction: column;
      margin-top: 5rem;
    }

    .banner_text_wrapper {
      padding: 0;
      width: 100%;
    }

    h4 {
      font-weight: normal;
      font-family: 'Poppins';
      letter-spacing: 2px;
      text-align: center;
      margin-top: 0;
      font-size: 14px;
    }

    .banner_text_wrapper .title {
      display: inline-flex;
      justify-content: center;
      flex-direction: unset;
      margin-top: 0.5rem;
    }

    .banner_container .title span {
      font-size: 20px;
      margin-right: 10px;
      text-align: center;
    }

    .banner_container ul {
      display: none;
    }

    .banner_container button {
      display: none;
    }

    .banner_text_wrapper button {
      margin-top: 0;
    }

    .banner_text_wrapper ul li {
      font-size: 30px;
    }

    h1 span {
      font-size: 50px;
    }
  }
</style>