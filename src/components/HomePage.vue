<template>
  <BannerBig
    :titleFirst="banner.titleFirst"
    :titleSecond="banner.titleSecond"
    :buttonTxt="banner.buttonTxt"  
    :imagePath="banner.imagePath"
  />
  <img class="banner_mobile" src="@/assets/images/electrician.png">
  <div class="phone_number_mobile_wrap">
    <div class="phone_number_mobile">
      <i class="fa-brands fa-whatsapp fa-2x"></i>
      <h1>0504 767 2223</h1>
    </div>
  </div>
  <div class="reviews_banner_wrapper">
    <ReviewsBanner/>
  </div>
  <ServiceDescription 
    :specialist1TitleFirst="specialist1.titleFirst"
    :specialist1TitleSecond="specialist1.titleSecond"
    :specialist1Description="specialist1.description"
    :specialist1Img="specialist1.img"
    :specialist2TitleFirst="specialist2.titleFirst"
    :specialist2TitleSecond="specialist2.titleSecond"
    :specialist2Description="specialist2.description"
    :specialist2Img="specialist2.img"
    :specialist3TitleFirst="specialist3.titleFirst"
    :specialist3TitleSecond="specialist3.titleSecond"
    :specialist3Description="specialist3.description"
    :specialist3Img="specialist3.img"
    :descriptionBig1titleFirst="descriptionBig1.titleFirst"
    :descriptionBig1titleSecond="descriptionBig1.titleSecond"
    :descriptionBig1titleSecondSpan="descriptionBig1.titleSecondSpan"
    :descriptionBig1description1="descriptionBig1.description1"
    :descriptionBig1subHeading1="descriptionBig1.subHeading1"
    :descriptionBig1description2="descriptionBig1.description2"
    :descriptionBig1subHeading2="descriptionBig1.subHeading2"
    :descriptionBig1description3="descriptionBig1.description3"
    :descriptionBig1BtnText="descriptionBig1.btnText"
    :descriptionBig1Img="descriptionBig1.img"
    :descriptionBig2titleFirst="descriptionBig2.titleFirst"
    :descriptionBig2titleSecond="descriptionBig2.titleSecond"
    :descriptionBig2titleSecondSpan="descriptionBig2.titleSecondSpan"
    :descriptionBig2description1="descriptionBig2.description1"
    :descriptionBig2subHeading="descriptionBig2.subHeading"
    :descriptionBig2description2="descriptionBig2.description2"
    :descriptionBig2Li1="descriptionBig2.li1"
    :descriptionBig2Li2="descriptionBig2.li2"
    :descriptionBig2Li3="descriptionBig2.li3"
    :descriptionBig2Li4="descriptionBig2.li4"
    :descriptionBig2BtnText="descriptionBig2.btnText"
    :descriptionBig2Img="descriptionBig2.img"
    :descriptionBig3titleFirst="descriptionBig3.titleFirst"
    :descriptionBig3titleSecond="descriptionBig3.titleSecond"
    :descriptionBig3titleSecondSpan="descriptionBig3.titleSecondSpan"
    :descriptionBig3description1="descriptionBig3.description1"
    :descriptionBig3subHeading1="descriptionBig3.subHeading1"
    :descriptionBig3description2="descriptionBig3.description2"
    :descriptionBig3subHeading2="descriptionBig3.subHeading2"
    :descriptionBig3description3="descriptionBig3.description3"
    :descriptionBig3BtnText="descriptionBig3.btnText"
    :descriptionBig3Img="descriptionBig3.img"
    :reviewCard1Title="review1.title"
    :reviewCard1Description="review1.description"
    :reviewCard1ProfileImg="review1.profileImg"
    :reviewCard1Username="review1.username"
    :reviewCard2Title="review2.title"
    :reviewCard2Description="review2.description"
    :reviewCard2ProfileImg="review2.profileImg"
    :reviewCard2Username="review2.username"
    :reviewCard3Title="review3.title"
    :reviewCard3Description="review3.description"
    :reviewCard3ProfileImg="review3.profileImg"
    :reviewCard3Username="review3.username"
   />
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
      },
      specialist1: {
        titleFirst: 'YOUR LOCAL TEAM OF',
        titleSecond: 'Air Conditioner Experts & Electricians',
        description: "Glow Handyman is one of the most trusted teams of air conditioning specialists & electricians. Our licensed team of electricians perform residential and commercial air-conditioning repairs and installations, and we do all kinds of electrical work.",
        img: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/electrician.jpg'
      },
      specialist2: {
        titleFirst: 'AIR CONDITIONER DUCTING',
        titleSecond: 'YES! We Also Work on Aircon Ducting',
        description: "From hundreds of metres of commercial air conditioning ducting in offices and factories to simple ducting repairs or installations in your home, our Aircon experts can get it done. Work with our 5-Star rated team today.",
        img: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/electrician.jpg'
      },
      specialist3: {
        titleFirst: 'LICENSED ELECTRICIANS',
        titleSecond: 'Your Safety Always Comes First',
        description: "When you work with Spark Innovation Group, you'll be using a team with 20+ years of electrical experience and a flawless safety record. When performing electrical work on your home or business, we always adhere to Australian electrical safety codes of practice.",
        img: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/electrician.jpg'
      },
      descriptionBig1: {
        titleFirst: 'ALL AIR CONDITIONER BRANDS',
        titleSecond: 'Reapirs &',
        titleSecondSpan: 'Servicing',
        description1: 'We provide affordable repairs and servicing of all air-conditioner brands & models. We also offer regular servicing schedules & 24-hour emergency air-conditioner repairs for residential & commercial air conditioning systems.',
        subHeading1: 'Refrigerant Leaks',
        description2: "With our advanced air-conditioner diagnostic equipment we're able to easily find and repair refrigerant leaks. We can recharge your Aircon's refrigerant levels according to the manufacturers specifications.",
        subHeading2: 'Compressor Fan & Condenser Coils',
        description3: "When these elements start to fail it can cause more extensive damage to the air conditioners' compressor. We can unblock and service condenser coils, and replace compressor fans and thermostats.",
        btnText: "LET'S GET IT FIXED",
        img: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/aircon-install.png'
      },
      descriptionBig2: {
        titleFirst: 'AFFORDABLE & PROFESSIONAL',
        titleSecond: 'Air Conditioner Cleaning',
        titleSecondSpan: 'Servicing',
        description1: 'Need your air conditioner cleaned properly? We thoroughly remove built-up contaminants and harmful mould spores. We also carry a wide range of replacement filters for all popular AC brands.',
        subHeading: 'We Clean all Makes & Models',
        description2: "From Multi-split wall mounted units, to large outdoor VRV units, we can bring your air conditioner back to new again with our thorough cleaning processes. All coils, filters and drain pipes are pressure cleaned and undergo antibacterial treatment.",
        li1: 'Low-pressure coil cleaning',
        li2: 'Mould & Bacteria removed',
        li3: 'Water injection to clean barrels',
        li4: 'Air-Con Professionals',
        btnText: "LET'S GET IT FIXED",
        img: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/aircon_clean.png' 
      },
      descriptionBig3: {
        titleFirst: 'ALL AIR CONDITIONER BRANDS',
        titleSecond: 'Reapirs & Servicing',
        titleSecondSpan: 'Servicing',
        description1: 'We provide affordable repairs and servicing of all air-conditioner brands & models. We also offer regular servicing schedules & 24-hour emergency air-conditioner repairs for residential & commercial air conditioning systems.',
        subHeading1: 'Refrigerant Leaks',
        description2: "With our advanced air-conditioner diagnostic equipment we're able to easily find and repair refrigerant leaks. We can recharge your Aircon's refrigerant levels according to the manufacturers specifications.",
        subHeading2: 'Compressor Fan & Condenser Coils',
        description3: "When these elements start to fail it can cause more extensive damage to the air conditioners' compressor. We can unblock and service condenser coils, and replace compressor fans and thermostats.",
        btnText: "LET'S GET IT FIXED",
        img: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/aircon-install.png'
      },
      review1: {
        title: 'Punctuality & Advice was Terrific',
        description: "Richard's work, communication, punctuality and advice was terrific. Nothing seemed to be too much trouble. We are really happy with the outcome.",
        username: 'Sherley Briar',
        profileImg: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/profile/profile_1.png'
      },
      review2: {
        title: 'Responsive, on Time, Tidy & Transparent',
        description: "They've solved a few tricky problems for me and are good at working with dodgy old electrics in the 100 year old apartment. Highly recommended.",
        username: 'Dan Kenny',
        profileImg: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/profile/profile_4.png'
      },
      review3: {
        title: 'Recommend Them to Friends & Family',
        description: "They were quick to come out and fix the problem - their service was great and the team was friendly. I'll definitely use their service again and recommend them to friends and family.",
        username: 'Raquel Sydnie',
        profileImg: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/profile/profile_2.png'
      },
      reviewCards: [
          {
            id: 1,
            title: 'Punctuality & Advice was Terrific',
            description: "Richard's work, communication, punctuality and advice was terrific. Nothing seemed to be too much trouble. We are really happy with the outcome.",
            username: 'Sherley Briar',
            profileImg: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/profile/profile_1.png'
          },
          {
            id: 2,
            title: 'Responsive, on Time, Tidy & Transparent',
            description: "They've solved a few tricky problems for me and are good at working with dodgy old electrics in the 100 year old apartment. Highly recommended.",
            username: 'Dan Kenny',
            profileImg: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/profile/profile_4.png'
          },
          {
            id: 3,
            title: 'Recommend Them to Friends & Family',
            description: "They were quick to come out and fix the problem - their service was great and the team was friendly. I'll definitely use their service again and recommend them to friends and family.",
            username: 'Raquel Sydnie',
            profileImg: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/profile/profile_2.png'
          },
          {
            id: 4,
            title: 'Highly Recommend Him & His Company',
            description: "A very big thank you to Daniel at Spark Innovation for the early morning call out, that was fast & efficient. My family highly recommend him and his company for their professional service.",
            username: 'William Monty',
            profileImg: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/profile/profile_5.png'
          },
          {
            id: 5,
            title: 'Really Happy with the Outcome',
            description: "Communication, punctuality and advice was terrific. We are really happy with the outcome. Nothing seemed to be too much trouble.",
            username: 'Harmonie Rorie',
            profileImg: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/profile/profile_3.png'
          },
          {
            id: 6,
            title: 'Took on a Tricky Job & Delivered',
            description: "Excellent comms; arrived when arranged, took on a tricky job and delivered. Neat work and also tidied up afterwards. I'll have no hesitation calling back next time! Thanks.",
            username: 'Duke Huxley',
            profileImg: 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/profile/profile_6.png'
          }
        ]
    }
  },
  watch: {
    $route(currentRoute) {
      if(currentRoute.fullPath === '/home/switchboards') {
        //Banner
        this.banner.titleFirst = 'Switchboards';
        this.banner.titleSecond = 'Electricians';
        this.banner.buttonTxt = 'GET IT FIXED';
        this.banner.imagePath = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/switchboards.png';
        //Specialist
        this.specialist1.titleFirst = 'YOUR LOCAL TEAM OF'
        this.specialist1.titleSecond = 'Electrical Switchboard Specialists'
        this.specialist1.description = 'Get our local team of friendly electricians to repair your switchboard the right way. We specialise in residential and commercial switchboard repairs and replacements. From a circuit breaker to an RCD safety switch or new metre box, our team can do it for you, and everything is 100% guaranteed!'
        this.specialist1.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/switchboards.jpg'
        this.specialist2.titleFirst = 'FACTORIES & INDUSTRIAL'
        this.specialist2.titleSecond = 'Electrical Control Panels'
        this.specialist2.description = 'Our team of experienced commercial electricians can tackle any electrical Control Panel jobs you need done. From complex fault finding to installing new circuits and replacing contactors and surge protectors, our electricians can get it done for you.'
        this.specialist2.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/electrical_repair.jpeg'
        this.specialist3.titleFirst = 'LICENSED PROFESSIONALS'
        this.specialist3.titleSecond = 'Your Safety Always Comes First'
        this.specialist3.description = "The Glowing Handyman team is fully licensed and insured to perform all types of electrical work. When performing switchboard repairs we follow a systematic process that strictly adheres to all electrical safety best practices. We'll get your switchboard job done the right way."
        this.specialist3.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/voltimeter.jpg'
        //DescriptionBig
        this.descriptionBig1.titleFirst = 'RESIDENTIAL SWITCHBOARD'
        this.descriptionBig1.titleSecond = 'Repairs'
        this.descriptionBig1.titleSecondSpan = '& Servicing'
        this.descriptionBig1.description1 = "From periodic inspections and servicing of commercial switchboards and control panels to replacing a single ceramic fuse in your home's switchboard, the experienced team from Spark Innovation Group can get it done.",
        this.descriptionBig1.subHeading1 = 'Meter Boxes & Surge Protectors',
        this.descriptionBig1.description2 = "We can install a new digital metre box in your switchboard, so your electricity usage is measured correctly. If you want to protect your computers and electronics from electrical surges, we can install a surge protector.",
        this.descriptionBig1.subHeading2 = 'RCD Safety Switches'
        this.descriptionBig1.description3 = "A fixed RCD electrical safety switch provides your family with the highest level of protection against an electrical mishap. We can test and replace your RCD safety switch if need be, and we can install a new one for you.",
        this.descriptionBig1.btnText = "Book my switchboard job"
        this.descriptionBig1.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/residentialSwitch.jpg"
        this.descriptionBig2.titleFirst = 'ELECTRICAL CONTACTORS &'
        this.descriptionBig2.titleSecond = 'Circuit'
        this.descriptionBig2.titleSecondSpan = 'Breakers'
        this.descriptionBig2.description1 = 'Properly functioning electrical circuit breakers are imperative for electrical safety. We can repair single breakers or install entire multi-pole circuit breaker boxes inside of your existing switchboard or in a distribution box.',
        this.descriptionBig2.subHeading = 'Electrical Contactors'
        this.descriptionBig2.description2 = "Worn electrical contactors can cause excessive arcing and become sticky. We can inspect, repair and replace any worn contactors in electrical control panels for factories, industrial sites and commercial businesses.",
        this.descriptionBig2.li1 = 'Residential & Commercial'
        this.descriptionBig2.li2 = 'Single Breaker or Multi-pole'
        this.descriptionBig2.li3 = 'All Work 100% Guaranteed'
        this.descriptionBig2.li4 = 'Highest Quality Brands'
        this.descriptionBig2.btnText = 'Book your switchboard job'
        this.descriptionBig2.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/circuitBreaker.jpg"
        this.descriptionBig3.titleFirst = 'NEW CONTROL PANEL &'
        this.descriptionBig3.titleSecond = 'Switchboard'
        this.descriptionBig3.titleSecondSpan = 'Installation'
        this.descriptionBig3.description1 = "Quite often, residential switchboards are beyond repair. We can replace your badly worn switchboard with a brand-new one, and improve the overall safety of your home's electrical circuits and safety switches.",
        this.descriptionBig3.subHeading1 = 'Improved Electrical Safety'
        this.descriptionBig3.description2 = "When you get our team of electricians to install a new switchboard in your home, you get the added safety benefits of having a modern electrical failsafe system protecting your family from electrical mishaps.",
        this.descriptionBig3.subHeading2 = 'Accurate Electricity Usage'
        this.descriptionBig3.description3 = "You can use one of our discount coupons below to get a discount on a new electrical metre box. Or, when we install a new switchboard, we can also fit a new metre box to ensure accurate measurement of your electricity usage.",
        this.descriptionBig3.btnText = "Get a new switchboard"
        this.descriptionBig3.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/switchboard_installation.jpg"
        //Reviews
        this.review1.title = this.reviewCards[1].title
        this.review1.description = this.reviewCards[1].description
        this.review1.profileImg = this.reviewCards[1].profileImg
        this.review1.username = this.reviewCards[1].username
        this.review2.title = this.reviewCards[2].title
        this.review2.description = this.reviewCards[2].description
        this.review2.profileImg = this.reviewCards[2].profileImg
        this.review2.username = this.reviewCards[2].username
        this.review3.title = this.reviewCards[3].title
        this.review3.description = this.reviewCards[3].description
        this.review3.profileImg = this.reviewCards[3].profileImg
        this.review3.username = this.reviewCards[3].username
      } else if(currentRoute.fullPath === '/home/air_conditioner') {
        //Banner
        this.banner.titleFirst = 'Air Conditioning';
        this.banner.titleSecond = 'Specialist';
        this.banner.buttonTxt = 'CONTACT US';
        this.banner.imagePath = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/airConRepairs.png';
        //Specialist
        this.specialist1.titleFirst = 'YOUR LOCAL TRUSTED'
        this.specialist1.titleSecond = 'Team of Air Conditioning Experts'
        this.specialist1.description = "You can book your air-conditioning repair, installation or service job with confidence knowing that we are Cronulla's leading team of air-conditioning experts. From multi-split residential systems to full commercial VRV systems, we'll keep your system running clean and cool!"
        this.specialist1.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/air_conditioner_description_1.jpg'
        this.specialist2.titleFirst = 'LICENSED PROFESSIONALS'
        this.specialist2.titleSecond = 'Safety Always Comes First'
        this.specialist2.description = "Our team are fully licensed to perform all types of air-conditioner work, and we're also licensed electricians! We treat your home with the utmost respect and stringently follow all electrical safety protocols. Our flawless safety record is proof of our commitment to quality and safety."
        this.specialist2.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/voltimeter.jpg'
        this.specialist3.titleFirst = 'AIR CONDITIONER DUCTS'
        this.specialist3.titleSecond = 'YES! We Also Work on Aircon Ducting'
        this.specialist3.description = "Holes in your Air-conditioning ducting will cause your system to run poorly and inefficiently. We can repair any existing damage to your ducting and we can also install brand-new ducting for you. Trust us to get the job done right the first time and book your repairs today!"
        this.specialist3.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/duct_repair.jpeg'
        //DescriptionBig
        this.descriptionBig1.titleFirst = 'AFFORDABLE & PROFESSIONAL',
        this.descriptionBig1.titleSecond = 'Repairs',
        this.descriptionBig1.titleSecondSpan = '& Servicing',
        this.descriptionBig1.description1 = "We provide affordable repairs and servicing of all air-conditioner brands & models. We also offer regular servicing schedules & 24-hour emergency air-conditioner repairs for residential & commercial air conditioning systems.",
        this.descriptionBig1.subHeading1 = 'Refrigerant Leaks',
        this.descriptionBig1.description2 = "With our advanced air-conditioner diagnostic equipment we're able to easily find and repair refrigerant leaks. We can recharge your Aircon's refrigerant levels according to the manufacturers specifications.",
        this.descriptionBig1.subHeading2 = 'Compressor Fan & Condenser Coils',
        this.descriptionBig1.description3 = "When these elements start to fail it can cause more extensive damage to the air conditioners' compressor. We can unblock and service condenser coils, and replace compressor fans and thermostats.",
        this.descriptionBig1.btnText = "LET'S GET IT FIXED"
        this.descriptionBig1.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/aircon-install-6ui8.png"
        this.descriptionBig2.titleFirst = 'AFFORDABLE & PROFESSIONAL',
        this.descriptionBig2.titleSecond = 'Air Conditioner',
        this.descriptionBig2.titleSecondSpan = 'Cleaning',
        this.descriptionBig2.description1 = 'Need your air conditioner cleaned properly? We thoroughly remove built-up contaminants and harmful mould spores. We also carry a wide range of replacement filters for all popular AC brands.',
        this.descriptionBig2.subHeading = 'We Clean all Makes & Models',
        this.descriptionBig2.description2 = "From Multi-split wall mounted units, to large outdoor VRV units, we can bring your air conditioner back to new again with our thorough cleaning processes. All coils, filters and drain pipes are pressure cleaned and undergo antibacterial treatment.",
        this.descriptionBig2.li1 = 'Low-pressure coil cleaning',
        this.descriptionBig2.li2 = 'Mould & Bacteria removed',
        this.descriptionBig2.li3 = 'Air-Con Professionals',
        this.descriptionBig2.li4 = 'Water injection to clean barrels',
        this.descriptionBig2.btnText = 'BOOK A CLEAN OR SERVICE',
        this.descriptionBig2.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/aircon_clean.png"
        this.descriptionBig3.titleFirst = 'NEW AIR CONDITIONER',
        this.descriptionBig3.titleSecond = 'Installations',
        this.descriptionBig3.titleSecondSpan = '',
        this.descriptionBig3.description1 = "Book your installation job with confidence! Our experienced air-conditioner technicians are also fully qualified electricians. We can install any type of new air-conditioning system including complex split ducted systems.",
        this.descriptionBig3.subHeading1 = 'Aircon Installation Done Right!',
        this.descriptionBig3.description2 = "We can wire up modern electronic air-conditioner control systems & install complex air ducting, exactly as per manufacturers specifications. We install all air-conditioner brands including Fujitsu, Daikin, Rinnai & many more.",
        this.descriptionBig3.subHeading2 = 'Residential & Commercial',
        this.descriptionBig3.description3 = "Our friendly technicians walk you through the installation process & provide you with instructions on how to use your new AC unit. From package & cassette systems, to multi-split wall units & VRV systems; we can help.",
        this.descriptionBig3.btnText = "BOOK YOUR AC INSTALL"
        this.descriptionBig3.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/airConInstall.jpg"
        //Reviews
        this.review1.title = this.reviewCards[4].title
        this.review1.description = this.reviewCards[4].description
        this.review1.profileImg = this.reviewCards[4].profileImg
        this.review1.username = this.reviewCards[4].username
        this.review2.title = this.reviewCards[5].title
        this.review2.description = this.reviewCards[5].description
        this.review2.profileImg = this.reviewCards[5].profileImg
        this.review2.username = this.reviewCards[5].username
        this.review3.title = this.reviewCards[3].title
        this.review3.description = this.reviewCards[3].description
        this.review3.profileImg = this.reviewCards[3].profileImg
        this.review3.username = this.reviewCards[3].username
      } else if(currentRoute.fullPath === '/home/air_areas') {
        //Banner
        this.banner.titleFirst = 'Air Conditioning';
        this.banner.titleSecond = 'Service Areas';
        this.banner.buttonTxt = 'CONTACT US';
        this.banner.imagePath = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/airConRepairs.png';
        //Specialist
        this.specialist1.titleFirst = 'FAST, RELIABLE & FRIENDLY.'
        this.specialist1.titleSecond = 'Air Conditioning Service Specialists'
        this.specialist1.description = "Our ARC-certified team of air conditioning specialists provide 100% guarantees on all Air Con installations and repairs. No matter where you are in the Sydney area, let our friendly team of air conditioner technicians get your job done the right way."
        this.specialist1.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/air_conditioner_description_1.jpg'
        this.specialist2.titleFirst = 'YES, WE ALSO REPAIR & INSTALL'
        this.specialist2.titleSecond = 'Air Conditioner Ducting'
        this.specialist2.description = "Our team are fully licensed to perform all types of air-conditioner work, and we're also licensed electricians! We treat your home with the utmost respect and stringently follow all electrical safety protocols. Our flawless safety record is proof of our commitment to quality and safety."
        this.specialist2.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/voltimeter.jpg'
        this.specialist3.titleFirst = 'AIR CONDITIONER DUCTS'
        this.specialist3.titleSecond = 'YES! We Also Work on Aircon Ducting'
        this.specialist3.description = "Holes in your Air-conditioning ducting will cause your system to run poorly and inefficiently. We can repair any existing damage to your ducting and we can also install brand-new ducting for you. Trust us to get the job done right the first time and book your repairs today!"
        this.specialist3.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/duct_repair.jpeg'
        //DescriptionBig
        this.descriptionBig1.titleFirst = 'AFFORDABLE & PROFESSIONAL',
        this.descriptionBig1.titleSecond = 'Repairs',
        this.descriptionBig1.titleSecondSpan = '& Servicing',
        this.descriptionBig1.description1 = "We provide affordable repairs and servicing of all air-conditioner brands & models. We also offer regular servicing schedules & 24-hour emergency air-conditioner repairs for residential & commercial air conditioning systems.",
        this.descriptionBig1.subHeading1 = 'Refrigerant Leaks',
        this.descriptionBig1.description2 = "With our advanced air-conditioner diagnostic equipment we're able to easily find and repair refrigerant leaks. We can recharge your Aircon's refrigerant levels according to the manufacturers specifications.",
        this.descriptionBig1.subHeading2 = 'Compressor Fan & Condenser Coils',
        this.descriptionBig1.description3 = "When these elements start to fail it can cause more extensive damage to the air conditioners' compressor. We can unblock and service condenser coils, and replace compressor fans and thermostats.",
        this.descriptionBig1.btnText = "LET'S GET IT FIXED"
        this.descriptionBig1.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/aircon-install-6ui8.png"
        this.descriptionBig2.titleFirst = 'AFFORDABLE & PROFESSIONAL',
        this.descriptionBig2.titleSecond = 'Air Conditioner',
        this.descriptionBig2.titleSecondSpan = 'Cleaning',
        this.descriptionBig2.description1 = 'Need your air conditioner cleaned properly? We thoroughly remove built-up contaminants and harmful mould spores. We also carry a wide range of replacement filters for all popular AC brands.',
        this.descriptionBig2.subHeading = 'We Clean all Makes & Models',
        this.descriptionBig2.description2 = "From Multi-split wall mounted units, to large outdoor VRV units, we can bring your air conditioner back to new again with our thorough cleaning processes. All coils, filters and drain pipes are pressure cleaned and undergo antibacterial treatment.",
        this.descriptionBig2.li1 = 'Low-pressure coil cleaning',
        this.descriptionBig2.li2 = 'Mould & Bacteria removed',
        this.descriptionBig2.li3 = 'Air-Con Professionals',
        this.descriptionBig2.li4 = 'Water injection to clean barrels',
        this.descriptionBig2.btnText = 'BOOK A CLEAN OR SERVICE',
        this.descriptionBig2.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/aircon_clean.png"
        this.descriptionBig3.titleFirst = 'NEW AIR CONDITIONER',
        this.descriptionBig3.titleSecond = 'Installations',
        this.descriptionBig3.titleSecondSpan = '',
        this.descriptionBig3.description1 = "Book your installation job with confidence! Our experienced air-conditioner technicians are also fully qualified electricians. We can install any type of new air-conditioning system including complex split ducted systems.",
        this.descriptionBig3.subHeading1 = 'Aircon Installation Done Right!',
        this.descriptionBig3.description2 = "We can wire up modern electronic air-conditioner control systems & install complex air ducting, exactly as per manufacturers specifications. We install all air-conditioner brands including Fujitsu, Daikin, Rinnai & many more.",
        this.descriptionBig3.subHeading2 = 'Residential & Commercial',
        this.descriptionBig3.description3 = "Our friendly technicians walk you through the installation process & provide you with instructions on how to use your new AC unit. From package & cassette systems, to multi-split wall units & VRV systems; we can help.",
        this.descriptionBig3.btnText = "BOOK YOUR AC INSTALL"
        this.descriptionBig3.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/airConInstall.jpg"
        //Reviews
        this.review1.title = this.reviewCards[5].title
        this.review1.description = this.reviewCards[5].description
        this.review1.profileImg = this.reviewCards[5].profileImg
        this.review1.username = this.reviewCards[5].username
        this.review2.title = this.reviewCards[0].title
        this.review2.description = this.reviewCards[0].description
        this.review2.profileImg = this.reviewCards[0].profileImg
        this.review2.username = this.reviewCards[0].username
        this.review3.title = this.reviewCards[4].title
        this.review3.description = this.reviewCards[4].description
        this.review3.profileImg = this.reviewCards[4].profileImg
        this.review3.username = this.reviewCards[4].username
      } else if(currentRoute.fullPath === '/home/electrical_areas' || currentRoute.fullPath === '/' || currentRoute.fullPath === '/home' ) {
        //Banner
        this.banner.titleFirst = 'Our Electricians';
        this.banner.titleSecond = 'Service Areas';
        this.banner.buttonTxt = "LET'S GET IT FIXED";
        this.banner.imagePath = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/electrician_banner.png';
        //Specialist
        this.specialist1.titleFirst = 'FAST, RELIABLE & FRIENDLY.'
        this.specialist1.titleSecond = 'Wide Electrician Services'
        this.specialist1.description = "From residential electrical repairs and installations to large commercial projects, our highly experienced electricians are here to help you. Our 5-star rated electricians are fully insured."
        this.specialist1.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/electrician.jpg'
        this.specialist2.titleFirst = 'YES, WE ALSO REPAIR & INSTALL'
        this.specialist2.titleSecond = 'Air Conditioner Ducting'
        this.specialist2.description = "Glow Handyman also specialise in air conditioning ducting. We'll ensure your system runs smoothly with professional new installations or removals of damaged sections. We'll get your system working at peak performance again with ducting free from holes and leaks."
        this.specialist2.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/duct_repair.jpeg'
        this.specialist3.titleFirst = "WE'RE LICENSED PROFESSIONALS' &"
        this.specialist3.titleSecond = 'Safety Always Comes First'
        this.specialist3.description = "Our team are all certified ARC electricians. Glow Handyman has an impeccable safety record, and all air conditioning installations and repairs are performed following strict safety protocols. All of our electrical work is Australian Standards compliant."
        this.specialist3.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/voltimeter.jpg'
        //DescriptionBig
        this.descriptionBig1.titleFirst = 'COMMERCIAL & INDUSTRIAL',
        this.descriptionBig1.titleSecond = 'Electrical',
        this.descriptionBig1.titleSecondSpan = 'Faults',
        this.descriptionBig1.description1 = "Our experienced electricians are just a phone call away. Whether you have intermittent power faults with your machinery or complex circuit faults inside your industrial control panels, we can repair them.",
        this.descriptionBig1.subHeading1 = 'Control Panels & Wiring',
        this.descriptionBig1.description2 = "Industrial electrical control panels and switchboards can be a major source of electrical power faults. Spark Innovation Group can efficiently diagnose and repair any electrical control panel or switchboard fault.",
        this.descriptionBig1.subHeading2 = 'Open Circuit & Voltage Faults',
        this.descriptionBig1.description3 = "Open circuits and short circuits are dangerous, especially in factories where 3 Phase 415V power outlets are involved. Voltage dips are another common too. Our electricians can rectify all of these issues.",
        this.descriptionBig1.btnText = "Repair my electrical fault"
        this.descriptionBig1.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/electrical_finding_1.jpg"
        this.descriptionBig2.titleFirst = 'WE REPAIR ALL RESIDENTIAL',
        this.descriptionBig2.titleSecond = 'Electrical',
        this.descriptionBig2.titleSecondSpan = 'Faults',
        this.descriptionBig2.description1 = 'Any type of electrical fault in your home is dangerous and should be repaired immediately. Our electricians have a proven track record with 5-star reviews, and we can diagnose and repair any electrical fault inside your home.',
        this.descriptionBig2.subHeading = 'Electrical Surges & Power Dips',
        this.descriptionBig2.description2 = "Power surges are dangerous and can damage sensitive electronic devices such as computers. A rogue electrical device or a damaged circuit and bad wiring is often the cause. Our local electricians can fix any electrical faults your home has.",
        this.descriptionBig2.li1 = 'Circuit breakers tripping',
        this.descriptionBig2.li2 = 'Lights switches not working',
        this.descriptionBig2.li3 = 'Frequent electrical surges',
        this.descriptionBig2.li4 = 'High electricity bills',
        this.descriptionBig2.btnText = 'Book my electrical job now',
        this.descriptionBig2.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/electrical_finding_2.jpg"
        this.descriptionBig3.titleFirst = '100% GTD REPAIRS ON ALL',
        this.descriptionBig3.titleSecond = 'Power',
        this.descriptionBig3.titleSecondSpan = 'Faults',
        this.descriptionBig3.description1 = "No matter what the hidden fault is, if you're experiencing any electrical power faults, the team from Spark Innovation Group can get your power back on quickly. Try our 5-star service today!",
        this.descriptionBig3.subHeading1 = 'Hot Power Outlets',
        this.descriptionBig3.description2 = "If you're experiencing any heat around your electrical power points, then this is a hidden electrical fault that needs immediate attention. Bad wiring and overloaded circuits are usually the cause.",
        this.descriptionBig3.subHeading2 = 'Light Bulbs Burning Out',
        this.descriptionBig3.description3 = "If your electrical fault is related to your lightbulbs burning out too quickly, then we can get it fixed. Often the lightbulb Wattage is too high, the insulation may be too close to the light, or there is bad mains wiring.",
        this.descriptionBig3.btnText = "Yes - book my job now"
        this.descriptionBig3.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/power-outlet.jpg"
        //Reviews
        this.review1.title = this.reviewCards[3].title
        this.review1.description = this.reviewCards[3].description
        this.review1.profileImg = this.reviewCards[3].profileImg
        this.review1.username = this.reviewCards[3].username
        this.review2.title = this.reviewCards[1].title
        this.review2.description = this.reviewCards[1].description
        this.review2.profileImg = this.reviewCards[1].profileImg
        this.review2.username = this.reviewCards[1].username
        this.review3.title = this.reviewCards[2].title
        this.review3.description = this.reviewCards[2].description
        this.review3.profileImg = this.reviewCards[2].profileImg
        this.review3.username = this.reviewCards[2].username
      } else if(currentRoute.fullPath === '/home/ev_areas') {
        //Banner
        this.banner.titleFirst = 'EV Charger';
        this.banner.titleSecond = 'Service Areas';
        this.banner.buttonTxt = 'INSTALL MY CHARGER';
        this.banner.imagePath = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/ev_charging.png';
        //Specialist
        this.specialist1.titleFirst = 'FAST, RELIABLE & FRIENDLY.'
        this.specialist1.titleSecond = 'Wide EV Charger Services'
        this.specialist1.description = "Our experienced technicians are trained to install a wide range of EV charging station solutions that are tailored to your specific needs, ensuring that you have the power you need, when and where you need it. Charge your electric vehicle with confidence and call us today!"
        this.specialist1.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/ev_installation.jpg'
        this.specialist2.titleFirst = 'RESIDENTIAL & COMMERCIAL.'
        this.specialist2.titleSecond = 'We Install All Types of EV Chargers'
        this.specialist2.description = "Whether you're looking for home, commercial, or public charging station installations, we've got you covered. We work with all electric vehicle brands such as Tesla, Nissan, BMW, and every electric car charger installation we perform is 100% guaranteed!"
        this.specialist2.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/ev_station.jpeg'
        this.specialist3.titleFirst = 'LICENSED EV CHARGER INSTALLERS.'
        this.specialist3.titleSecond = 'Safety Always Comes First'
        this.specialist3.description = "Our electricians adhere to electrical safety best practices when installing electric vehicle chargers. We take every precaution to ensure that our installations are safe and reliable, so you can charge your electric vehicle with peace of mind."
        this.specialist3.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/voltimeter.jpg'
        //DescriptionBig
        this.descriptionBig1.titleFirst = 'COMMERCIAL & INDUSTRIAL',
        this.descriptionBig1.titleSecond = 'Electrical',
        this.descriptionBig1.titleSecondSpan = 'Faults',
        this.descriptionBig1.description1 = "Our experienced electricians are just a phone call away. Whether you have intermittent power faults with your machinery or complex circuit faults inside your industrial control panels, we can repair them.",
        this.descriptionBig1.subHeading1 = 'Control Panels & Wiring',
        this.descriptionBig1.description2 = "Industrial electrical control panels and switchboards can be a major source of electrical power faults. Spark Innovation Group can efficiently diagnose and repair any electrical control panel or switchboard fault.",
        this.descriptionBig1.subHeading2 = 'Open Circuit & Voltage Faults',
        this.descriptionBig1.description3 = "Open circuits and short circuits are dangerous, especially in factories where 3 Phase 415V power outlets are involved. Voltage dips are another common too. Our electricians can rectify all of these issues.",
        this.descriptionBig1.btnText = "Repair my electrical fault"
        this.descriptionBig1.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/electrical_finding_1.jpg"
        this.descriptionBig2.titleFirst = 'WE REPAIR ALL RESIDENTIAL',
        this.descriptionBig2.titleSecond = 'Electrical',
        this.descriptionBig2.titleSecondSpan = 'Faults',
        this.descriptionBig2.description1 = 'Any type of electrical fault in your home is dangerous and should be repaired immediately. Our electricians have a proven track record with 5-star reviews, and we can diagnose and repair any electrical fault inside your home.',
        this.descriptionBig2.subHeading = 'Electrical Surges & Power Dips',
        this.descriptionBig2.description2 = "Power surges are dangerous and can damage sensitive electronic devices such as computers. A rogue electrical device or a damaged circuit and bad wiring is often the cause. Our local electricians can fix any electrical faults your home has.",
        this.descriptionBig2.li1 = 'Circuit breakers tripping',
        this.descriptionBig2.li2 = 'Lights switches not working',
        this.descriptionBig2.li3 = 'Frequent electrical surges',
        this.descriptionBig2.li4 = 'High electricity bills',
        this.descriptionBig2.btnText = 'Book my electrical job now',
        this.descriptionBig2.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/electrical_finding_2.jpg"
        this.descriptionBig3.titleFirst = '100% GTD REPAIRS ON ALL',
        this.descriptionBig3.titleSecond = 'Power',
        this.descriptionBig3.titleSecondSpan = 'Faults',
        this.descriptionBig3.description1 = "No matter what the hidden fault is, if you're experiencing any electrical power faults, the team from Spark Innovation Group can get your power back on quickly. Try our 5-star service today!",
        this.descriptionBig3.subHeading1 = 'Hot Power Outlets',
        this.descriptionBig3.description2 = "If you're experiencing any heat around your electrical power points, then this is a hidden electrical fault that needs immediate attention. Bad wiring and overloaded circuits are usually the cause.",
        this.descriptionBig3.subHeading2 = 'Light Bulbs Burning Out',
        this.descriptionBig3.description3 = "If your electrical fault is related to your lightbulbs burning out too quickly, then we can get it fixed. Often the lightbulb Wattage is too high, the insulation may be too close to the light, or there is bad mains wiring.",
        this.descriptionBig3.btnText = "Yes - book my job now"
        this.descriptionBig3.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/power-outlet.jpg"
        //Reviews
        this.review1.title = this.reviewCards[2].title
        this.review1.description = this.reviewCards[2].description
        this.review1.profileImg = this.reviewCards[2].profileImg
        this.review1.username = this.reviewCards[2].username
        this.review2.title = this.reviewCards[5].title
        this.review2.description = this.reviewCards[5].description
        this.review2.profileImg = this.reviewCards[5].profileImg
        this.review2.username = this.reviewCards[5].username
        this.review3.title = this.reviewCards[0].title
        this.review3.description = this.reviewCards[0].description
        this.review3.profileImg = this.reviewCards[0].profileImg
        this.review3.username = this.reviewCards[0].username
      } else if(currentRoute.fullPath === '/home/lighting') {
        //Banner
        this.banner.titleFirst = 'Lighting and';
        this.banner.titleSecond = 'Power Upgrades';
        this.banner.buttonTxt = 'BOOK MY JOB NOW';
        this.banner.imagePath = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/lightingSpecialist.png';
        //Specialist
        this.specialist1.titleFirst = '20+ YEARS EXPERIENCE.'
        this.specialist1.titleSecond = 'Your Lighting & Power Specialist'
        this.specialist1.description = "Whether you need new power circuits throughout your entire home or business, or a simple outdoor sensor light installed, our team of trusted electricians can get it done for you. We carry a vast range of electrical spare parts, and our 5-star rated service is fast and 100% guaranteed!"
        this.specialist1.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/light_install.jpg'
        this.specialist2.titleFirst = 'FACTORIES & INDUSTRIAL'
        this.specialist2.titleSecond = 'Tagging and Testing Compliance'
        this.specialist2.description = "Glow Handyman Group can help your business comply with ANZS3760 electrical safety testing and tagging regulations. We can schedule regular testing and tagging of your company's electrical equipment."
        this.specialist2.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/electrical_repair.jpeg'
        this.specialist3.titleFirst = 'LICENSED PROFESSIONALS'
        this.specialist3.titleSecond = 'Your Safety Always Comes First'
        this.specialist3.description = "Glow Handyman are fully licensed and insured to perform all types of electrical work. When performing any power upgrades or lighting work we follow a systematic process that strictly adheres to all electrical safety best practices. We'll get your switchboard job done the right way."
        this.specialist3.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/voltimeter.jpg'
        //DescriptionBig
        this.descriptionBig1.titleFirst = 'COMMERCIAL & RESIDENTIAL',
        this.descriptionBig1.titleSecond = 'Indoor',
        this.descriptionBig1.titleSecondSpan = 'Lighting',
        this.descriptionBig1.description1 = "From mood setting LED lights to large chandeliers, our electricians can install any type of lighting imaginable. Whether it's hundreds of office lights or a single factory induction lamp, we can help.",
        this.descriptionBig1.subHeading1 = 'Residential Lighting Specialists',
        this.descriptionBig1.description2 = "Internal lighting for your home is a Spark Innovation Group speciality. We know exactly how to create a functional and beautiful ambience in your home with precisely positioned lighting that perfectly suits your needs.",
        this.descriptionBig1.subHeading2 = 'Factory & Office Lighting',
        this.descriptionBig1.description3 = "From trendy retro dangling mood lights in coffee shops to smart factory lighting control systems, our electricians can install any internal lighting your business or industrial site needs.",
        this.descriptionBig1.btnText = "Book my lighting job"
        this.descriptionBig1.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/interior-lighting.jpg"
        this.descriptionBig2.titleFirst = 'RESIDENTIAL & COMMERCIAL',
        this.descriptionBig2.titleSecond = 'Outdoor',
        this.descriptionBig2.titleSecondSpan = 'Lighting',
        this.descriptionBig2.description1 = 'We can install any type of outdoor lighting your home or business requires. From pool or spa lights, automatic security lights, garden lights and outdoor entertaining area lights. All of our lighting work is 100% guaranteed!',
        this.descriptionBig2.subHeading = 'Emergency & Signage Lighting',
        this.descriptionBig2.description2 = "We can repair or install all emergency and exit signage lights for your factory, business or warehouse. Our electricians can also retrofit old emergency signage with new power-saving LED models.",
        this.descriptionBig2.li1 = 'Residential outdoor lighting',
        this.descriptionBig2.li2 = 'Emergency exit signage lights',
        this.descriptionBig2.li3 = 'All Work 100% Guaranteed',
        this.descriptionBig2.li4 = 'Every type of outdoor lighting',
        this.descriptionBig2.btnText = 'Book my lighting job now',
        this.descriptionBig2.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/outdoor-lighting.png"
        this.descriptionBig3.titleFirst = 'RESIDENTIAL & COMMERCIAL',
        this.descriptionBig3.titleSecond = 'Power',
        this.descriptionBig3.titleSecondSpan = 'Upgrades',
        this.descriptionBig3.description1 = "From all types of switchboard repairs to domestic power points and industrial 3 phase 415V power outlets, our electricians are ready to help with any residential or commercial power job you have.",
        this.descriptionBig3.subHeading1 = 'Residential Power Upgrades',
        this.descriptionBig3.description2 = "Whether you need more power outlets throughout your home or you want to retrofit smart home wiring with modern control panels, our electricians can perform any power upgrades you need in your home.",
        this.descriptionBig3.subHeading2 = 'Commercial Power Upgrades',
        this.descriptionBig3.description3 = "No matter what type of power upgrades you require for your business, factory or warehouse, we can do it! From installing more 3 phase 415V power outlets, to data cabling and commercial control panels - we can help!",
        this.descriptionBig3.btnText = "Yes - book my job now"
        this.descriptionBig3.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/power-outlet.jpg"
        //Reviews
        this.review1.title = this.reviewCards[3].title
        this.review1.description = this.reviewCards[3].description
        this.review1.profileImg = this.reviewCards[3].profileImg
        this.review1.username = this.reviewCards[3].username
        this.review2.title = this.reviewCards[1].title
        this.review2.description = this.reviewCards[1].description
        this.review2.profileImg = this.reviewCards[1].profileImg
        this.review2.username = this.reviewCards[1].username
        this.review3.title = this.reviewCards[2].title
        this.review3.description = this.reviewCards[2].description
        this.review3.profileImg = this.reviewCards[2].profileImg
        this.review3.username = this.reviewCards[2].username
      } else if(currentRoute.fullPath === '/home/electrical_fault') {
        //Banner
        this.banner.titleFirst = 'Electrical Fault';
        this.banner.titleSecond = 'Finding';
        this.banner.buttonTxt = 'BOOK MY JOB NOW';
        this.banner.imagePath = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/electrical_fault.png';
        //Specialist
        this.specialist1.titleFirst = 'YOUR TRUSTED TEAM OF'
        this.specialist1.titleSecond = 'Electrical Fault Finding Specialist'
        this.specialist1.description = "If you have any commercial or residential electrical faults, then you need an experienced team that can diagnose electrical faults quickly and easily. Our electricians use advanced fault-finding diagnostic equipment, and we can efficiently resolve any power faults you're experiencing."
        this.specialist1.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/electrician.jpg'
        this.specialist2.titleFirst = 'MODERN DIAGNOSTIC'
        this.specialist2.titleSecond = 'Electrical Fault-finding Equipment'
        this.specialist2.description = "No matter what type of intermittent power issues your home or business may be facing, our skilled electricians can diagnose and repair your electrical faults. Give Spark Innovation Group a call today."
        this.specialist2.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/electrical_repair.jpeg'
        this.specialist3.titleFirst = 'LICENSED PROFESSIONALS'
        this.specialist3.titleSecond = 'Your Safety Always Comes First'
        this.specialist3.description = "At Glow Handyman we are fully licensed and insured to perform all types of electrical work. When performing any electrical fault-finding work, we follow a systematic process that strictly adheres to all electrical safety best practices. We'll get your power faults rectified the right way."
        this.specialist3.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/voltimeter.jpg'
        //DescriptionBig
        this.descriptionBig1.titleFirst = 'COMMERCIAL & INDUSTRIAL',
        this.descriptionBig1.titleSecond = 'Electrical',
        this.descriptionBig1.titleSecondSpan = 'Faults',
        this.descriptionBig1.description1 = "Our experienced electricians are just a phone call away. Whether you have intermittent power faults with your machinery or complex circuit faults inside your industrial control panels, we can repair them.",
        this.descriptionBig1.subHeading1 = 'Control Panels & Wiring',
        this.descriptionBig1.description2 = "Industrial electrical control panels and switchboards can be a major source of electrical power faults. Spark Innovation Group can efficiently diagnose and repair any electrical control panel or switchboard fault.",
        this.descriptionBig1.subHeading2 = 'Open Circuit & Voltage Faults',
        this.descriptionBig1.description3 = "Open circuits and short circuits are dangerous, especially in factories where 3 Phase 415V power outlets are involved. Voltage dips are another common too. Our electricians can rectify all of these issues.",
        this.descriptionBig1.btnText = "Repair my electrical fault"
        this.descriptionBig1.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/electrical_finding_1.jpg"
        this.descriptionBig2.titleFirst = 'WE REPAIR ALL RESIDENTIAL',
        this.descriptionBig2.titleSecond = 'Electrical',
        this.descriptionBig2.titleSecondSpan = 'Faults',
        this.descriptionBig2.description1 = 'Any type of electrical fault in your home is dangerous and should be repaired immediately. Our electricians have a proven track record with 5-star reviews, and we can diagnose and repair any electrical fault inside your home.',
        this.descriptionBig2.subHeading = 'Electrical Surges & Power Dips',
        this.descriptionBig2.description2 = "Power surges are dangerous and can damage sensitive electronic devices such as computers. A rogue electrical device or a damaged circuit and bad wiring is often the cause. Our local electricians can fix any electrical faults your home has.",
        this.descriptionBig2.li1 = 'Circuit breakers tripping',
        this.descriptionBig2.li2 = 'Lights switches not working',
        this.descriptionBig2.li3 = 'Frequent electrical surges',
        this.descriptionBig2.li4 = 'High electricity bills',
        this.descriptionBig2.btnText = 'Book my electrical job now',
        this.descriptionBig2.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/electrical_finding_2.jpg"
        this.descriptionBig3.titleFirst = '100% GTD REPAIRS ON ALL',
        this.descriptionBig3.titleSecond = 'Power',
        this.descriptionBig3.titleSecondSpan = 'Faults',
        this.descriptionBig3.description1 = "No matter what the hidden fault is, if you're experiencing any electrical power faults, the team from Spark Innovation Group can get your power back on quickly. Try our 5-star service today!",
        this.descriptionBig3.subHeading1 = 'Hot Power Outlets',
        this.descriptionBig3.description2 = "If you're experiencing any heat around your electrical power points, then this is a hidden electrical fault that needs immediate attention. Bad wiring and overloaded circuits are usually the cause.",
        this.descriptionBig3.subHeading2 = 'Light Bulbs Burning Out',
        this.descriptionBig3.description3 = "If your electrical fault is related to your lightbulbs burning out too quickly, then we can get it fixed. Often the lightbulb Wattage is too high, the insulation may be too close to the light, or there is bad mains wiring.",
        this.descriptionBig3.btnText = "Yes - book my job now"
        this.descriptionBig3.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/power-outlet.jpg"
        //Reviews
        this.review1.title = this.reviewCards[3].title
        this.review1.description = this.reviewCards[3].description
        this.review1.profileImg = this.reviewCards[3].profileImg
        this.review1.username = this.reviewCards[3].username
        this.review2.title = this.reviewCards[4].title
        this.review2.description = this.reviewCards[4].description
        this.review2.profileImg = this.reviewCards[4].profileImg
        this.review2.username = this.reviewCards[4].username
        this.review3.title = this.reviewCards[5].title
        this.review3.description = this.reviewCards[5].description
        this.review3.profileImg = this.reviewCards[5].profileImg
        this.review3.username = this.reviewCards[5].username
      } else if(currentRoute.fullPath === '/home/data') {
        //Banner
        this.banner.titleFirst = 'Data and';
        this.banner.titleSecond = 'Communications';
        this.banner.buttonTxt = 'YES, BOOK MY JOB';
        this.banner.imagePath = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/router.png';
        //Specialist
        this.specialist1.titleFirst = '20+ YEARS EXPERIENCE'
        this.specialist1.titleSecond = 'Internet, Phone Lines, Antennas, We Do It!'
        this.specialist1.description = "From complete network installations and upgrades to simple ethernet ports and phone line connections, our friendly team of local electricians can help. We specialise in all types of data cabling and telecommunications, from commercial network racks to residential antennas, call us now for help."
        this.specialist1.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/line_installation.jpg'
        this.specialist2.titleFirst = 'BUSINESS & RESIDENTIAL'
        this.specialist2.titleSecond = 'Custom Data Cabling'
        this.specialist2.description = "Glow Handyman can install any custom cabling you require. We can help with fibre-optic cabling, CAT6 and CAT6A cabling, fusion splicing, Multimode (OM3 and OM4) and Singlemode (OS1 and OS2)."
        this.specialist2.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/cable_installation.jpg'
        this.specialist3.titleFirst = 'LICENSED PROFESSIONALS'
        this.specialist3.titleSecond = 'Your Safety Always Comes First'
        this.specialist3.description = "At Glow Handyman we are fully licensed and insured to perform all types of electrical work. When performing data cabling installations and telecommunications work we follow a systematic process that strictly adheres to all electrical safety best practices."
        this.specialist3.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/voltimeter.jpg'
        //DescriptionBig
        this.descriptionBig1.titleFirst = 'COMMERCIAL & RESIDENTIAL',
        this.descriptionBig1.titleSecond = 'Data Cabling',
        this.descriptionBig1.titleSecondSpan = 'Experts',
        this.descriptionBig1.description1 = "We've been performing data cabling for 20+ years. To help you achieve the best network speeds possible, we match cables to the correct jack-types and properly terminate all cables.",
        this.descriptionBig1.subHeading1 = 'Commercial Data Cabling Specialist',
        this.descriptionBig1.description2 = "From commercial patch panels, complex network racks and server routers, to large banks of ethernet ports, our trusted electricians can get your business's cabling connected the right way.",
        this.descriptionBig1.subHeading2 = 'Residential Data Cabling',
        this.descriptionBig1.description3 = "Whether it's cabling for CCTV Security camera installations or extending your local area network (LAN) for your home office, our electricians can install any new network cabling you need.",
        this.descriptionBig1.btnText = "Yes - Book My Job Now"
        this.descriptionBig1.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/data_1.jpg"
        this.descriptionBig2.titleFirst = 'COMMERCIAL & RESIDENTIAL',
        this.descriptionBig2.titleSecond = 'Telecommunications',
        this.descriptionBig2.titleSecondSpan = '',
        this.descriptionBig2.description1 = "Our electricians can fix any 'B side' phone line issues your home or business has, from bad phone line connections to fault isolations. We can add more telephone line points and install centralised ADSL filters.",
        this.descriptionBig2.subHeading = 'Home & Business Phone Lines',
        this.descriptionBig2.description2 = "We can add more telephone line points throughout your home or business and install centralised ADSL filters if your phone shares the same line as your Internet. No matter what telecommunication problems you face, our electricians can fix it.",
        this.descriptionBig2.li1 = 'Install phone line points',
        this.descriptionBig2.li2 = 'All Work 100% Guaranteed',
        this.descriptionBig2.li3 = "Resolve all 'B-side' faults",
        this.descriptionBig2.li4 = 'New phone line circuits',
        this.descriptionBig2.btnText = 'Book your job now',
        this.descriptionBig2.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/telecommunication.jpg"
        this.descriptionBig3.titleFirst = 'ELECTRICIANS FOR',
        this.descriptionBig3.titleSecond = 'All Types of',
        this.descriptionBig3.titleSecondSpan = 'Antennas',
        this.descriptionBig3.description1 = "Our electricians can install any make and model of antenna that you need. We can install an antenna you have pre-purchased or recommend and install a suitable antenna system for your home or business.",
        this.descriptionBig3.subHeading1 = 'Digital HD Antenna Installations',
        this.descriptionBig3.description2 = "We can assess your unique situation and recommend the correct digital HD antenna system for your business or home. We have vast experience in installing all types of high-quality 4G and 5G interference-free antennas.",
        this.descriptionBig3.subHeading2 = 'Fully Insured & 100% Guaranteed',
        this.descriptionBig3.description3 = "It's imperative you use licensed electricians with the proper training and insurances for antenna installation jobs. Spark Innovation Group have over 20+ years of experience, and all of our work is 100% guaranteed!",
        this.descriptionBig3.btnText = "Yes - Install My Antenna"
        this.descriptionBig3.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/antenna_install.png"
        //Reviews
        this.review1.title = this.reviewCards[5].title
        this.review1.description = this.reviewCards[5].description
        this.review1.profileImg = this.reviewCards[5].profileImg
        this.review1.username = this.reviewCards[5].username
        this.review2.title = this.reviewCards[0].title
        this.review2.description = this.reviewCards[0].description
        this.review2.profileImg = this.reviewCards[0].profileImg
        this.review2.username = this.reviewCards[0].username
        this.review3.title = this.reviewCards[1].title
        this.review3.description = this.reviewCards[1].description
        this.review3.profileImg = this.reviewCards[1].profileImg
        this.review3.username = this.reviewCards[1].username
      } else if(currentRoute.fullPath === '/home/antennas#antenna') {
        //Banner
        this.banner.titleFirst = 'All type of';
        this.banner.titleSecond = 'Antennas';
        this.banner.buttonTxt = 'CONTACT US';
        this.banner.imagePath = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/antenna.png';
        //Specialist
        this.specialist1.titleFirst = '20+ YEARS EXPERIENCE'
        this.specialist1.titleSecond = 'Internet, Phone Lines, Antennas, We Do It!'
        this.specialist1.description = "From complete network installations and upgrades to simple ethernet ports and phone line connections, our friendly team of local electricians can help. We specialise in all types of data cabling and telecommunications, from commercial network racks to residential antennas, call us now for help."
        this.specialist1.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/line_installation.jpg'
        this.specialist2.titleFirst = 'BUSINESS & RESIDENTIAL'
        this.specialist2.titleSecond = 'Custom Data Cabling'
        this.specialist2.description = "Spark Innovation Group can install any custom cabling you require. We can help with fibre-optic cabling, CAT6 and CAT6A cabling, fusion splicing, Multimode (OM3 and OM4) and Singlemode (OS1 and OS2)."
        this.specialist2.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/cable_installation.jpg'
        this.specialist3.titleFirst = 'LICENSED PROFESSIONALS'
        this.specialist3.titleSecond = 'Your Safety Always Comes First'
        this.specialist3.description = "At Glow Handyman we are fully licensed and insured to perform all types of electrical work. When performing data cabling installations and telecommunications work we follow a systematic process that strictly adheres to all electrical safety best practices."
        this.specialist3.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/voltimeter.jpg'
        //DescriptionBig
        this.descriptionBig1.titleFirst = 'COMMERCIAL & RESIDENTIAL',
        this.descriptionBig1.titleSecond = 'Data Cabling',
        this.descriptionBig1.titleSecondSpan = 'Experts',
        this.descriptionBig1.description1 = "We've been performing data cabling for 20+ years. To help you achieve the best network speeds possible, we match cables to the correct jack-types and properly terminate all cables.",
        this.descriptionBig1.subHeading1 = 'Commercial Data Cabling Specialist',
        this.descriptionBig1.description2 = "From commercial patch panels, complex network racks and server routers, to large banks of ethernet ports, our trusted electricians can get your business's cabling connected the right way.",
        this.descriptionBig1.subHeading2 = 'Residential Data Cabling',
        this.descriptionBig1.description3 = "Whether it's cabling for CCTV Security camera installations or extending your local area network (LAN) for your home office, our electricians can install any new network cabling you need.",
        this.descriptionBig1.btnText = "Yes - Book My Job Now"
        this.descriptionBig1.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/data_1.jpg"
        this.descriptionBig2.titleFirst = 'COMMERCIAL & RESIDENTIAL',
        this.descriptionBig2.titleSecond = 'Telecommunications',
        this.descriptionBig2.titleSecondSpan = '',
        this.descriptionBig2.description1 = "Our electricians can fix any 'B side' phone line issues your home or business has, from bad phone line connections to fault isolations. We can add more telephone line points and install centralised ADSL filters.",
        this.descriptionBig2.subHeading = 'Home & Business Phone Lines',
        this.descriptionBig2.description2 = "We can add more telephone line points throughout your home or business and install centralised ADSL filters if your phone shares the same line as your Internet. No matter what telecommunication problems you face, our electricians can fix it.",
        this.descriptionBig2.li1 = 'Install phone line points',
        this.descriptionBig2.li2 = 'All Work 100% Guaranteed',
        this.descriptionBig2.li3 = "Resolve all 'B-side' faults",
        this.descriptionBig2.li4 = 'New phone line circuits',
        this.descriptionBig2.btnText = 'Book your job now',
        this.descriptionBig2.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/telecommunication.jpg"
        this.descriptionBig3.titleFirst = 'ELECTRICIANS FOR',
        this.descriptionBig3.titleSecond = 'All Types of',
        this.descriptionBig3.titleSecondSpan = 'Antennas',
        this.descriptionBig3.description1 = "Our electricians can install any make and model of antenna that you need. We can install an antenna you have pre-purchased or recommend and install a suitable antenna system for your home or business.",
        this.descriptionBig3.subHeading1 = 'Digital HD Antenna Installations',
        this.descriptionBig3.description2 = "We can assess your unique situation and recommend the correct digital HD antenna system for your business or home. We have vast experience in installing all types of high-quality 4G and 5G interference-free antennas.",
        this.descriptionBig3.subHeading2 = 'Fully Insured & 100% Guaranteed',
        this.descriptionBig3.description3 = "It's imperative you use licensed electricians with the proper training and insurances for antenna installation jobs. Spark Innovation Group have over 20+ years of experience, and all of our work is 100% guaranteed!",
        this.descriptionBig3.btnText = "Yes - Install My Antenna"
        this.descriptionBig3.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/antenna_install.png"
        //Reviews
        this.review1.title = this.reviewCards[2].title
        this.review1.description = this.reviewCards[2].description
        this.review1.profileImg = this.reviewCards[2].profileImg
        this.review1.username = this.reviewCards[2].username
        this.review2.title = this.reviewCards[3].title
        this.review2.description = this.reviewCards[3].description
        this.review2.profileImg = this.reviewCards[3].profileImg
        this.review2.username = this.reviewCards[3].username
        this.review3.title = this.reviewCards[4].title
        this.review3.description = this.reviewCards[4].description
        this.review3.profileImg = this.reviewCards[4].profileImg
        this.review3.username = this.reviewCards[4].username
      } else if(currentRoute.fullPath === '/home/security_systems') {
        //Banner
        this.banner.titleFirst = 'Security Systems';
        this.banner.titleSecond = 'Installation';
        this.banner.buttonTxt = 'CONTACT US';
        this.banner.imagePath = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/security_system.png';
        //Specialist
        this.specialist1.titleFirst = '20+ YEARS EXPERIENCE'
        this.specialist1.titleSecond = 'Your CCTV Security Camera Experts'
        this.specialist1.description = "Get our local team of trusted CCTV experts to install your security camera system. Our licensed electricians have vast experience with all makes and models of security cameras. From commercial security camera systems with back-to-base monitoring to a single residential security camera, we can get it done for you!"
        this.specialist1.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/cctv.jpeg'
        this.specialist2.titleFirst = 'FACTORIES & INDUSTRIAL'
        this.specialist2.titleSecond = 'Security Camera Systems'
        this.specialist2.description = "It's not uncommon for larger warehouses to have 100+ security cameras. We can easily tackle large CCTV installation jobs and have your factory or warehouse completely fitted out within a few days."
        this.specialist2.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/warehouse.jpg'
        this.specialist3.titleFirst = 'LICENSED PROFESSIONALS'
        this.specialist3.titleSecond = 'Your Safety Always Comes First'
        this.specialist3.description = "At Glow Handyman we are fully licensed and insured to perform all types of electrical work. When performing security camera installations we follow a systematic process that strictly adheres to all electrical safety best practices. We'll get your new security camera installed the right way."
        this.specialist3.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/voltimeter.jpg'
        //DescriptionBig
        this.descriptionBig1.titleFirst = 'COMMERCIAL CCTV SECURITY',
        this.descriptionBig1.titleSecond = 'Camera',
        this.descriptionBig1.titleSecondSpan = 'Installations',
        this.descriptionBig1.description1 = "Our electricians can install modern security cameras throughout your commercial business or factory. Whether you need CCTV cameras on the roof of your business or strategically placed around the exterior of your warehouse, we can do it.",
        this.descriptionBig1.subHeading1 = 'We can recommend CCTV packages',
        this.descriptionBig1.description2 = "We can attend your commercial premises and recommend the right security camera package to insatll based on your needs and the size of your premises. Give us a call and talk to a real person immediately.",
        this.descriptionBig1.subHeading2 = 'Already purchased a system?',
        this.descriptionBig1.description3 = "If you've already purchased a security camera system, then our electricians can ensure it's installed correctly for you. All of our work is 100% guaranteed, and we can install any make or model.",
        this.descriptionBig1.btnText = "Install my Security cameras"
        this.descriptionBig1.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/camera_install.jpg"
        this.descriptionBig2.titleFirst = 'MODERN RESIDENTIAL',
        this.descriptionBig2.titleSecond = 'Security',
        this.descriptionBig2.titleSecondSpan = 'Cameras',
        this.descriptionBig2.description1 = "Get a team with over 20+ years of electrical experience to install your home security camera system the right way. Our friendly team have all the relevant licenses and police checks, and all work is 100% guaranteed.",
        this.descriptionBig2.subHeading = 'Security Camera Installation Service',
        this.descriptionBig2.description2 = "From multi-monitor stations to storing your security recordings in the cloud, our friendly team will show you exactly how to operate your new security camera system. Give Spark Innovation Group a call today!",
        this.descriptionBig2.li1 = 'Home security camera experts',
        this.descriptionBig2.li2 = 'All Work 100% Guaranteed',
        this.descriptionBig2.li3 = "Licenced & police checked",
        this.descriptionBig2.li4 = 'Highest Quality Brands',
        this.descriptionBig2.btnText = 'Book your job now',
        this.descriptionBig2.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/security_camera.jpg"
        this.descriptionBig3.titleFirst = 'CCTV SECURITY CAMERA',
        this.descriptionBig3.titleSecond = 'Wiring',
        this.descriptionBig3.titleSecondSpan = 'Circuits',
        this.descriptionBig3.description1 = "Unless you're replacing existing security cameras, we'll have to install new wiring circuits. Sometimes, we'll also need to perform modifications to your switchboard to accommodate the new circuits.",
        this.descriptionBig3.subHeading1 = 'Improved Overall Security',
        this.descriptionBig3.description2 = "The mere presence of security cameras around your home or business is a strong deterrent against any type of crime. Having your system setup correctly ensures your cameras are always recording and capturing incidents.",
        this.descriptionBig3.subHeading2 = 'Proper Circuit Safety',
        this.descriptionBig3.description3 = "Any new electrical circuits that your security camera system requires will be appropriately implemented and routed through the correct circuit breakers. We are very experienced with electrical safety.",
        this.descriptionBig3.btnText = "Yes - Install My Antenna"
        this.descriptionBig3.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/wiring.jpg"
        //Reviews
        this.review1.title = this.reviewCards[4].title
        this.review1.description = this.reviewCards[4].description
        this.review1.profileImg = this.reviewCards[4].profileImg
        this.review1.username = this.reviewCards[4].username
        this.review2.title = this.reviewCards[5].title
        this.review2.description = this.reviewCards[5].description
        this.review2.profileImg = this.reviewCards[5].profileImg
        this.review2.username = this.reviewCards[5].username
        this.review3.title = this.reviewCards[1].title
        this.review3.description = this.reviewCards[1].description
        this.review3.profileImg = this.reviewCards[1].profileImg
        this.review3.username = this.reviewCards[1].username
      } else if(currentRoute.fullPath === '/home/security_cameras#cameras') {
        //Banner
        this.banner.titleFirst = 'Security Cameras';
        this.banner.titleSecond = 'Installation';
        this.banner.buttonTxt = 'INSTALL MY CCTV';
        this.banner.imagePath = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/security_camera.png';
        //Specialist
        this.specialist1.titleFirst = '20+ YEARS EXPERIENCE'
        this.specialist1.titleSecond = 'Your CCTV Security Camera Experts'
        this.specialist1.description = "Get our local team of trusted CCTV experts to install your security camera system. Our licensed electricians have vast experience with all makes and models of security cameras. From commercial security camera systems with back-to-base monitoring to a single residential security camera, we can get it done for you!"
        this.specialist1.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/cctv.jpeg'
        this.specialist2.titleFirst = 'FACTORIES & INDUSTRIAL'
        this.specialist2.titleSecond = 'Security Camera Systems'
        this.specialist2.description = "It's not uncommon for larger warehouses to have 100+ security cameras. We can easily tackle large CCTV installation jobs and have your factory or warehouse completely fitted out within a few days."
        this.specialist2.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/warehouse.jpg'
        this.specialist3.titleFirst = 'LICENSED PROFESSIONALS'
        this.specialist3.titleSecond = 'Your Safety Always Comes First'
        this.specialist3.description = "At Glow Handyman we are fully licensed and insured to perform all types of electrical work. When performing security camera installations we follow a systematic process that strictly adheres to all electrical safety best practices. We'll get your new security camera installed the right way."
        this.specialist3.img = 'https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/voltimeter.jpg'
        //DescriptionBig
        this.descriptionBig1.titleFirst = 'COMMERCIAL CCTV SECURITY',
        this.descriptionBig1.titleSecond = 'Camera',
        this.descriptionBig1.titleSecondSpan = 'Installations',
        this.descriptionBig1.description1 = "Our electricians can install modern security cameras throughout your commercial business or factory. Whether you need CCTV cameras on the roof of your business or strategically placed around the exterior of your warehouse, we can do it.",
        this.descriptionBig1.subHeading1 = 'We can recommend CCTV packages',
        this.descriptionBig1.description2 = "We can attend your commercial premises and recommend the right security camera package to insatll based on your needs and the size of your premises. Give us a call and talk to a real person immediately.",
        this.descriptionBig1.subHeading2 = 'Already purchased a system?',
        this.descriptionBig1.description3 = "If you've already purchased a security camera system, then our electricians can ensure it's installed correctly for you. All of our work is 100% guaranteed, and we can install any make or model.",
        this.descriptionBig1.btnText = "Install my Security cameras"
        this.descriptionBig1.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/camera_install.jpg"
        this.descriptionBig2.titleFirst = 'MODERN RESIDENTIAL',
        this.descriptionBig2.titleSecond = 'Security',
        this.descriptionBig2.titleSecondSpan = 'Cameras',
        this.descriptionBig2.description1 = "Get a team with over 20+ years of electrical experience to install your home security camera system the right way. Our friendly team have all the relevant licenses and police checks, and all work is 100% guaranteed.",
        this.descriptionBig2.subHeading = 'Security Camera Installation Service',
        this.descriptionBig2.description2 = "From multi-monitor stations to storing your security recordings in the cloud, our friendly team will show you exactly how to operate your new security camera system. Give Spark Innovation Group a call today!",
        this.descriptionBig2.li1 = 'Home security camera experts',
        this.descriptionBig2.li2 = 'All Work 100% Guaranteed',
        this.descriptionBig2.li3 = "Licenced & police checked",
        this.descriptionBig2.li4 = 'Highest Quality Brands',
        this.descriptionBig2.btnText = 'Book your job now',
        this.descriptionBig2.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/security_camera.jpg"
        this.descriptionBig3.titleFirst = 'CCTV SECURITY CAMERA',
        this.descriptionBig3.titleSecond = 'Wiring',
        this.descriptionBig3.titleSecondSpan = 'Circuits',
        this.descriptionBig3.description1 = "Unless you're replacing existing security cameras, we'll have to install new wiring circuits. Sometimes, we'll also need to perform modifications to your switchboard to accommodate the new circuits.",
        this.descriptionBig3.subHeading1 = 'Improved Overall Security',
        this.descriptionBig3.description2 = "The mere presence of security cameras around your home or business is a strong deterrent against any type of crime. Having your system setup correctly ensures your cameras are always recording and capturing incidents.",
        this.descriptionBig3.subHeading2 = 'Proper Circuit Safety',
        this.descriptionBig3.description3 = "Any new electrical circuits that your security camera system requires will be appropriately implemented and routed through the correct circuit breakers. We are very experienced with electrical safety.",
        this.descriptionBig3.btnText = "Yes - Install My Antenna"
        this.descriptionBig3.img = "https://upcdn.io/W142heu/raw/uploads/2023/03/glow_handyman/wiring.jpg"
        //Reviews
        this.review1.title = this.reviewCards[1].title
        this.review1.description = this.reviewCards[1].description
        this.review1.profileImg = this.reviewCards[1].profileImg
        this.review1.username = this.reviewCards[1].username
        this.review2.title = this.reviewCards[2].title
        this.review2.description = this.reviewCards[2].description
        this.review2.profileImg = this.reviewCards[2].profileImg
        this.review2.username = this.reviewCards[2].username
        this.review3.title = this.reviewCards[3].title
        this.review3.description = this.reviewCards[3].description
        this.review3.profileImg = this.reviewCards[3].profileImg
        this.review3.username = this.reviewCards[3].username
      }
    }
  },
  components: { BannerBig, ReviewsBanner, ServiceDescription }
}
</script>


<style scoped>
.reviews_banner_wrapper {
  width: 100%;
  display: inline-flex;
  justify-content: center;
}

.banner_mobile {
  display: none;
  height: 400px;
}

.phone_number_mobile_wrap {
  width: 100%;
  display: none;
  justify-content: center;
  bottom: 2rem;
  position: relative;
}

.phone_number_mobile {
  display: inline-flex;
  color: white;
  background-color: #213c74;
  box-shadow: 0 14px 30px rgba(0,0,0,7%);
  border-radius: 2px;
  z-index: 2;
  padding: 0.1rem 1rem;
}
.phone_number_mobile h1 {
  font-size: 28px;
}


.phone_number_mobile i {
  margin: auto;
  padding: 0 1rem;
}

@media screen and (max-width: 700px) {
  .reviews_banner_wrapper {
    display: none;
  }

  .banner_mobile {
    display: block;
    width: 700px;
  }

  .phone_number_mobile_wrap {
    display: inline-flex;
  }
}

</style>
