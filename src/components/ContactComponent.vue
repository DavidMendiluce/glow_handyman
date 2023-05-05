<template>
      <div class="contact_form">
        <img>
        <div class="contact_inputs">
          <div class="input_section">
            <input placeholder="First name" class="name">
            <input placeholder="Your phone number" class="phone">
          </div>
          <div class="input_section">
            <input placeholder="Your email" class="email">
            <input placeholder="Job location" class="location">
          </div>
          <textarea placeholder="Your message" class="message"></textarea>
          <div class="upload_img_section">
            <label for="file-upload" class="custom-file-upload">
              Upload any files here
            </label>
            <input @change="uploadImage($event)" name="imageUpload" id="file-upload" type="file" />
            <p>{{imageFile}}</p>
          </div>
          <div class="button_wrapper">
            <button>SEND YOUR ENQUIRY</button>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'ContactComponent',
  data() {
    return {
      imageFile: ''
    }
  },
  methods: {
    async uploadImage(event) {
        this.imageFile = event.target.files[0].name;
      }
  }
}
</script>


<style scoped>
h1, p {
  text-align: center;
}

h1 {
  text-decoration: underline;
  font-size: 44px;
  margin-bottom: 1rem;
}

.contact_text_description {
  display: inline-flex;
  justify-content: center;
  width: 100%;
}

p {
  width: 50%;
  font-size: 22px;
  line-height: 1.5;
  margin-top: 1rem;
}

.contact_wrapper {
  display: inline-flex;
  justify-content: center;
  width: 100%;
}

.contact_form {
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 4rem;
}

img {
  border: 1px solid red;
  width: 35%;
  height: 620px;
}

.contact_inputs {
  width: 60%;
}

.input_section {
  display: inline-flex;
  justify-content: space-between;
  width: 790px;
}

input {
  margin-bottom: 2rem;
  width: 360px;
  height: 60px;
  border: 1px solid #c9c9c9;
  padding-left: 20px;
  outline: none;
}

textarea {
  width: 770px;
  height: 200px;
  padding-left: 20px;
  padding-top: 20px;
  outline: none;
}

.container {
  width: 70%;
}

.upload_img_section {
  width: 790px;
  height: 165px;
  border: 1px solid red;
  display: flex;
  margin-top: 2rem;
}

.upload_img_section p {
  position: absolute;
  text-align: center;
  margin-top: 8rem;
  margin-left: 28px;
  font-size: 14px;
}

.upload_img_section .custom_file_upload {
  margin: auto;
}

input[type="file"] {
  display: none;
}

.custom-file-upload {
  border: 1px solid #ccc;
  padding: 1rem 2rem !important;
  box-shadow: 0 3px 8px rgba(0,0,0,.32);
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  margin: auto;
}

.button_wrapper {
  width: 100%;
  display: inline-flex;
  justify-content: center;
}

button {
  width: 412px;
  height: 60px;
  box-shadow: 0 3px 6px rgba(0,0,0,.16);
  margin: 30px auto;
  padding-top: 2px;
  background-color: #203c74;
  color: white;
  border: none;
  font-weight: 500;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
}

button:hover {
  background-color: #e8c547;
  color: black;
}

@media screen 
and (min-width: 1200px) 
and (max-width: 1700px) {
  .container {
    width: 90%;
  }
}
</style>