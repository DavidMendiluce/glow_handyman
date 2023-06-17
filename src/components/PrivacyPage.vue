<template>
<div class="container">
  <div class="top_container">
    <TermsPrivacyBanner 
    title="PRIVACY POLICY" 
    description="We respect your personal information, & we're committed to protecting your privacy. Our team always does its utmost to protect your information"/>
  </div>
  <div class="bottom_container">
    <div class="bottom_wrapper">
      <ol class="list">
        <li class="heading">PURPOSE
          <ol>
            <li class="subheading">Spark Innovation Pty Ltd is dedicated to maintaining your privacy. This Privacy Policy reflects to the requirements of the Commonwealth Privacy Act 1988 and the Australian Privacy Principles regarding the use, collection, disclosure, storage and access of personal information.</li>
            <li class="subheading">This policy applies to all Spark Innovation staff, sub-contractors, clients and other individuals where personal information is derived from.</li>
            <li class="subheading">Personal information may be collected for the purpose of being a Spark Innovation employee, client or stakeholder. The collection of your personal information requires your knowledge and consent and shall be by lawful means at all times.</li>
          </ol>
        </li>
        <li class="heading">COLLECTING PERSONAL INFORMATION
          <ol>
            <li class="subheading">Spark Innovation collects your personal information through its own website when you choose to make an inquiry.</li>
            <li class="subheading">In order to respond to your inquiry, Spark Innovation may use your contact information, such as telephone number or email address.</li>
            <li class="subheading">For general inquiries over the telephone, Spark Innovation may obtain your name and telephone number, address or email contact.</li>
          </ol>
        </li>
        <li class="heading">USE OF PERSONAL INFORMATION
          <ol>
            <li class="subheading">Spark Innovation uses your personal information in order to:
              <ol>
                <li class="deepSubheading">Verify your identity</li>
                <li class="deepSubheading">Communicate with you</li>
                <li class="deepSubheading">Meet your needs and provide a service you request</li>
                <li class="deepSubheading">Comply with any legal contractual obligations</li>
              </ol>
            </li>
          </ol>
        </li>
        <li class="heading">DISCLOSURE
          <ol>
            <li class="subheading">Spark Innovation will not use or disclose your personal information to a third party without your consent, unless the use or disclosure of the information is required or authorised by or under an Australian law, or a court/tribunal order.</li>
            <li class="subheading">Spark Innovation does not use or disclose your personal information for the purpose of direct marketing.</li>
          </ol>
        </li>
        <li class="heading">SECURITY OF PERSONAL INFORMATION
          <ol>
            <li class="subheading">Spark Innovation takes all reasonable steps to protect all personal information from misuse, interference, loss and unauthorised access, modification or disclosure to third parties.</li>
          </ol>
        </li>
        <li class="heading">SOCIAL NETWORKING
          <ol>
            <li class="subheading">Spark Innovation uses social networking services such as Facebook, Twitter and YouTube, to communicate with clients and stakeholders.</li>
            <li class="subheading">All communication is in relation to the services Spark Innovation provides.</li>
            <li class="subheading">When communicating with Spark Innovation through any of these social networking avenues, Spark Innovation may collect your personal information in order to communicate with you. Note: Facebook, Twitter and Youtube have their own privacy policies.</li>
          </ol>
        </li>
      </ol>
    </div>
  </div>
  <div class="phone_wrap">
    <i class="fa-brands fa-whatsapp fa-3x"></i>
    <h1 class="whatsapp_number">0504 767 2223</h1>
  </div>
</div>
</template>

<script>
import TermsPrivacyBanner from './TermsPrivacyBanner';

export default {
    name: "PrivacyPage",
    components: { TermsPrivacyBanner }
}
</script>


<style scoped>
.top_container {
  height: 300px;
  width: 100%;
  margin-bottom: 5rem;
  overflow: hidden;
}

.bottom_container {
  width: 100%;
  display: inline-flex;
  justify-content: center;
}

.bottom_wrapper {
  width: 60%;
}

ol { counter-reset: item; list-style-type: circle; }
li{ display: block }
li:before { content: counters(item, ".") ". "; counter-increment: item }

.heading {
  font-size: 30px;
  font-family: 'Poppins';
  font-weight: 700;
  color: #3d3d3d;
  margin-bottom: 4rem;
}

.heading {
  font-size: 25px;
}

.deepSubheading ,.subheading {
  font-size: 16px;
  color: black;
  line-height: 1.5;
  font-family: arial;
  font-weight: 300;
  padding-bottom: 1rem;
  margin: 0.5rem 0;
  border-bottom: 1px solid #cccccc;
  padding: 1rem 0;
}

.deepSubheading {
  border-bottom: none;
}

.subheading:nth-child(1) {
  margin-top: 0.5rem;
}

.phone_wrap {
  height: 100px;
  display: inline-flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 3rem;
}

.phone_wrap i {
  color: #213c74;
  margin: auto 1rem;
}

.phone_wrap h1 {
  color: #213c74;
  margin: auto 0;
  font-size: 40px;
}

@media screen 
and (min-width: 1200px) 
and (max-width: 1600px) {
  .top_container {
    margin-bottom: 2rem;
  }

  .bottom_wrapper {
    width: 88%;
  }

  .bottom_wrapper  {
    padding: 0;
  }

  .list {
    padding: 0;
  }
}
</style>