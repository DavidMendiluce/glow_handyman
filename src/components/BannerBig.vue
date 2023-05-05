<template>
  <div class="banner_container">
    <div class="banner_text_wrapper">
      <h4>SPECIALIST IN</h4>
      <h1>
        <span>{{ titleFirst }}</span>
        <span>{{ titleSecond }}</span>
      </h1>
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
  props: ['titleFirst', 'titleSecond', 'buttonTxt']
}
</script>


<style scoped>
  h1, h2, h3, h4, h5, h6, ul li, p {
    color: white; 
  }

  .no_content::before {
    content: "" !important;
    margin: 0 !important;
  }
</style>

<style>
  .banner_container {
    background-image: url("@/assets/images/electrician_banner.png");
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
    width: 200px;
    height: 50px;
    margin-top: 1rem;
    color: #213c74;
    background-color: #e8c547;
    border: none;
    border-radius: 3px;
    font-family: 'poppins', sans-serif;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
  }

  .banner_text_wrapper button:hover {
    background-color: #ebbd28;
    color: #143273;
  }

  .banner_text_wrapper h4 {
    margin-bottom: 0;
  }

  .banner_text_wrapper h1 {
    padding-left: 0.1rem;
    font-size: 65px;
    font-family: 'poppins' ,sans-serif;
    display: flex;
    flex-direction: column;
    line-height: 1.2;
    margin-bottom: 0;
    margin-top: 0;
  }

  .banner_text_wrapper h1 span:nth-child(2) {
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
</style>