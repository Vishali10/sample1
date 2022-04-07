<script setup>
import {ref} from 'vue'
import Navbar from './Navbar.vue'
import AL_Head1 from './AL_Head1.vue'
import AL_Head2 from './AL_Head2.vue'
import Line from './Line.vue'
import AL_Head3 from './AL_Head3.vue'
import AL_subheading1 from './AL_subheading1.vue'
import AL_subheading2 from './AL_subheading2.vue'
import AgentPhoto from './AgentPhoto.vue'
import PageTitle from './PageTitle.vue'
import ThreeWaySwitch from './ThreeWaySwitch.vue'
import TwoWaySwitch from './TwoWaySwitch.vue'
import TestimonialCard from './TestimonialCard.vue'
import ContactForm from './ContactForm.vue'
import Listing2 from './Listings2.vue'
import TestimonialCarousel from './TestimonialCarousel.vue'
import Listing2Slider from './Listing2Slider.vue'
import ListingSlider from './ListingSlider.vue'
var isMob=ref(false)
 var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
 if(width<866)
 isMob.value=true

const navlinks=[
  {
        name:'Home',
        link:'./home',
        isActive:true
    },
    {
        name:'About',
        link:'./about',
        isActive:false 
    },
    {
        name:'Market Watch',
        link:'./marketwatch',
        isActive:false 
        
    },
    {
        name:'FAQ',
        link:'./faq',
        isActive:false 
        
    },
    {
        name:'Testimonials',
        link:'./testimonials',
        isActive:false
    }
    
]
</script>

<template>
<div>
<!-- <div class="options">
   <button class="edit_btn" ref="edit_btn">Edit Site</button>
</div> -->
<div class="section section1">
  <div class="bg">
    <Navbar :navlinks="navlinks"></Navbar>
    <div class="content_container">
      <div class="content">
    <AL_Head1 content="Jeff Peterson"></AL_Head1>
    <AL_Head2 content="Your Local Area Real Estate Expert"></AL_Head2>
    <div class="AL_tagline">
    <Line color="#FBD784" length="72px" style="margin-top: 16px;"></Line>
    <AL_Head3 content="Real estate specialist in Toronto." style="color:#FBD784"></AL_Head3>
     <Line color="#FBD784" length="72px" style="margin-top: 16px;display:none;" class="showOnMob"></Line>
    </div>
    <div class="value_lines">
      <div class="cont">
         <AL_subheading1 content="Premium Listings"></AL_subheading1>
    <AL_subheading2 content="Luxury in every detail"></AL_subheading2>
      </div>
      <div class="cont">
         <AL_subheading1 content="Happy Customers"></AL_subheading1>
    <AL_subheading2 content="Clients for a Lifetime"></AL_subheading2>
      </div>
      <div class="cont">
 <AL_subheading1 content="Perfect Matchmaker"></AL_subheading1>
    <AL_subheading2 content="Finding the right home"></AL_subheading2>
      </div>
    </div>
          <button class="agent_btns showOnMob contact_btn_mob">Contact Me</button>
    </div>
  </div>
</div>
</div>
<div class="section section2">
  
   <div class="about_container">
     
     <div class="content">
       <div class="sec_numb" style="z-index:-2;">01</div>
<div class="AL_sub">
       <PageTitle content="Why Me?" color="#0B1D26"></PageTitle>
        
       <Line color="#828282" length="113px" class="line1"></Line>
       <AL_Head3 content="Know me better" style="color:#828282"  class="why_me_head"></AL_Head3>
        </div>
  <AgentPhoto url="agentphoto.svg"></AgentPhoto>

     </div>
     
   </div>
  
</div>

<div class="section section3">
  <div class="bg_mw">
  <div class="mw_container">
    <div class="content">
        <div class="sec_numb" style="z-index:1;">02</div>
    <div class="AL_sub">
       <PageTitle content="Market Watch" color="#FBD784"></PageTitle>
        
       <Line color="#FBD784" length="111px" class="line1"></Line>
       <AL_Head3 content="Market watch for residential properties in Toronto for the period" style="color: white;max-width: 930px;margin-left: 81px"></AL_Head3>
       
        </div>
   
    </div>
     
  </div>
  
<ThreeWaySwitch option1="Apartment" option2="Condo" option3="Township"></ThreeWaySwitch>
</div>
</div>
<!-- <div class="section section5" style="height:100vh">
  <div class="content">
  <div class="sec_numb">03</div>
   <div class="AL_sub">
       <PageTitle content="Featured Listings" color="#0B1D26"></PageTitle>
        
       <Line color="#FBD784" length="113px"></Line>
       <AL_Head3 content="Contact us for more info" style="margin-top: 48px;color:grey;text-transform:uppercase;"></AL_Head3>
       
        </div>
  </div>
  <div class="listings_container">
 
<Listing2Slider></Listing2Slider>

  </div>
</div> -->

<div class="section section4">
  <div class="faq_container">
    <div class="content">
       <div class="sec_numb" style="z-index:1">03</div>
    <div class="AL_sub">
       <PageTitle content="FAQs" color="#0B132A"></PageTitle>
        
       <Line color="#FBD784" length="111px" class="line2"></Line>
       <AL_Head3 content="Contact Us for More Info" style="color:grey;max-width:900px;"></AL_Head3>
       
        </div>
  
    </div>
     
  </div>

<TwoWaySwitch option1="Buyer" option2="Seller"></TwoWaySwitch>
</div>

 <div class="section section6">
    <div class="sec_numb" style="z-index:-2;">04</div>
  <div class="testimonial_container">
     
     <div class="content">
       
        <div class="AL_sub">
       <PageTitle content="Testimonials" color="#0B1D26"></PageTitle>
        
       <Line color="#FBD784" length="113px"  class="line3"></Line>
       <AL_Head3 content="Have a look what our users say" class="grey_head" style="margin-top:10px;margin-left: 24px;color:grey;text-transform:uppercase"></AL_Head3>
       
        </div>
       
     </div>
     
  </div>

<TestimonialCarousel></TestimonialCarousel>
</div> 

<div class="section section7">
  <div class="bg_footer">
    
    <div class="contact_container">
      <div class="content">
  <AL_Head3 content="I'm always there for you" class="contact_head" style="text-transform:uppercase;"></AL_Head3>
    <AL_Head2 content="Contact me for professional opinion and local market intelligence." class="contact_subhead"></AL_Head2>
    <div class="agent_contact" style="">
   <p class="agentname">Jeff Peterson</p>
    <p class="agentemail">jeffpeterson@gmail.com</p>
     <p class="agentcontact">+1 (416) 886 - 2827</p>
      <p class="agentloc">Toronto</p>
    </div>
   
      <div  class="copyright" v-show="!isMob">
   <span>COPYRIGHT SUPERAGENT 2022 - </span>
    <a>TERMS & CONDITIONS</a>&nbsp;&nbsp;
     <a>PRIVACY POLICY</a>
      

     </div>
      </div>
       <ContactForm></ContactForm>
  </div>
</div>
</div>

</div>
</template>
   
<style>
/* Desktop Styles */
.why_me_head
{
  margin-top:60px;
}
.contact_subhead
{
  color:#FBD784;
}
.contact_head
{

  color:white;
  font-size:24px;
  font-weight:700;
}
.contact_btn_mob
{
  margin-top:30px;
}
.edit_btn
{
      background-color: #0B1D26;
    color: #FBD784;
    padding: 9px 7px 10px 5px;
    font-family: Libre-Regular;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    border-radius: 20px;
    width:100px;
    margin: 7px;
    cursor: pointer;
}

.copyright
{
      font-size: 1.5vh;
margin-top:30%;
  
  
}
.copyright a 
{
  text-decoration: underline;
  
}
.grey_head
{
  letter-spacing:0.1px;
  display: inline-flex;

}
.line2
{
  margin-top: 20px;
      margin-left: -28px;

}
.line3
{
  margin-top: 32px;
}

.line1
{
    border: 1px solid rgb(130, 130, 130);
    margin-top: 30px;
    margin-left: -20px;
    margin-right:50px;
}
.sec_numb
{
  z-index: -3;
 font-family: 'Libre-Regular';
    font-size: 264px;
    color: #a09f9f60;
    font-weight: 300;
    position: absolute;
    margin-top: -100px;
    margin-left: -162px;
    
}
.container *
{
  box-sizing: border-box;
}
.agent_contact
{
  margin-top:20%;
  font-size:30px;
  font-weight:400;
  line-height:10px;
}
.listings_container
{
  margin-top:10%;
}
.section5
{
  height:100vh;
}
.section6
{
  height:65vh;
  padding: 17vh 20vh 0vh 32vh;
}

.testimonial_cards
{
  display:flex;
  margin-top:10vh;
}
.value_lines
{
  display:flex;
  margin-top:20%;
justify-content: space-between;
}

.section5
{
   padding: 17vh 10vh 0vh 32vh;
}


.section3
{
  background: url('@/assets/images/mw_bg.svg');
}
.options
{
   width: 100%;
    height: 59px;
    background-color: white;
}
.content_container
{
  /* height: 100vh; */
    font-size: 50px;
    color: white;
    overflow-wrap: anywhere;
    display:flex;
    justify-content: flex-start;
    padding: 15vh 10vh 20vh 22vh;
}
.contact_container
{
  /* height: 100vh; */
    font-size: 50px;
    color: white;
    overflow-wrap: anywhere;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding: 10vh 19vh 2vh 16vh;
}
.about_container
{
  /* height: 100vh; */
    font-size: 50px;
    color: white;
    overflow-wrap: anywhere;
    display:flex;
    justify-content: flex-start;
    padding: 17vh 6vh 20vh 34vh;
}
.mw_container
{
  font-size: 50px;
    color: white;
    overflow-wrap: anywhere;
    display:flex;
    justify-content: flex-start;
    padding: 17vh 10vh 0vh 34vh;
}
.about_container .content
{
  text-align: left;
}
.faq_container
{
  font-size: 50px;
    color: white;
    overflow-wrap: anywhere;
    display:flex;
    justify-content: flex-start;
    padding: 17vh 10vh 0vh 32vh;
}

.faq_container .content
{
  text-align: left;
}
.content
{
  text-align: left;
}
.bg {
 background: url('@/assets/images/banner.svg') center center no-repeat;
    height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 65% 50%;
    border:none;
}
.bg_mw {
 background: url('@/assets/images/market watch background.svg') center center no-repeat;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 65% 50%;
    border:none;
}
.bg_footer {
 background: url('@/assets/images/footer backgrouns.svg') center center no-repeat;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 65% 50%;
    border:none;
}
 .showOnMob
{
  display:none;
}
.AL_sub
{
  text-align: left;
}
.contact_container .content
{
  text-align: left;
  max-width: 55%;

}

@media screen and (max-width:866px){
  .line1
  {
    width:41px!important;
  }
  .line2
{
  width:43px!important;
}
  .line3
  {
    width:53px!important;
    margin-left: 40px;
    margin-top: -2px;
  }
  .grey_head
  {
    display: flex;
        margin-top: -10px!important;
    color: grey;
    text-transform:capitalize!important;
    margin-left: 124px;
  }
  .footer 
{
   display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column-reverse;
    margin-top:23%;
}
.copyright
{
      font-size: 1.8vh;
    width: 180px;
    margin-top:10%;
    text-align: center;
    line-height: 3vh;
}

.contact_subhead
{
  font-size: 5vh;
  line-height:6vh;
  font-weight:700;
}
.agent_contact
{
  font-size:15px;
  color:#E7E9EAB2;
}

  .contact_container .content
{
  max-width: 100%;
}

.contact_head
{
  font-size:16px;
  letter-spacing: 1px;
  line-height:22px;
  text-transform: none;
}

  .line1
  {
        margin-top: -8px;
    margin-left: 38px;
    margin-right: 24px;
  }
  .line2
  {
        margin-top: -6px;
    margin-left: 34px;
    margin-right:10px;
  }
  .bg
  {
    height:100%;
  }
 .contact_btn_mob
{
  margin-top:0px;
}
  .sec_numb
  {
    
    font-family: 'Libre-Regular';
    font-size: 100px;
    color: #a09f9f60;
    font-weight: 300;
    position: absolute;
    margin-top: -24px;
    margin-left: -11px;
    z-index: -3;


  }
  .about_container .content
{
  text-align: center;
}
   .showOnMob
{
  display:inline-block!important;
}
  .content
{
  text-align: center;
  width: 100%;
    margin-left: auto;
}
.content_container
{
  padding:5vh;
 padding-top:1vh;
}
.about_container
{
  padding:5vh
}
.mw_container
{
  padding:5vh;
}
.faq_container
{
  padding:5vh
}

.tabs
{
  justify-content: center;
}
.AL_tagline
{
  display:flex;
  align-items: center;
}
.AL_sub
{
  text-align: left;
}
.value_lines
{
  flex-direction: column;
  margin-top:5%;
}
.contact_container
{
  flex-direction: column;
  padding:5vh;
}

.cont
{
  padding:5px;
}
.testimonial_cards {
    flex-direction: column;
}
.section5
{
  padding: 5vh;
}
.section6
{
  padding:5vh;
  height:100vh;
}

} 

/* Tablet Screens */


/* Mobile Screens */
</style>