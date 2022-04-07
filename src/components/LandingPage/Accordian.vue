<script setup>

</script>
<template>
<div>
  <!-- FIRST accordian_tab -->
<div class="accordian_tab">
  <input id="accordian_tab-1r" type="radio" name="accordian_tabr" checked>
  <!-- <div class="faq_title">-->
  <div class="faq_number">01</div> 
  <label for="accordian_tab-1r">Should I buy a home or continue to rent a home?</label>
  <!-- </div> -->
  <div class="accordian_content"><p>Current Interest rates for mortagages range around 3% for a period of 10 years, so it is better to pay mortgage than pay rent. It’s a solid investment.</p></div>
</div>

<!-- SECOND accordian_tab -->
<div class="accordian_tab">
  <input id="accordian_tab-2r" type="radio" name="accordian_tabr">
  <!-- <div class="faq_title">-->
  <div class="faq_number">02</div> 
  <label for="accordian_tab-2r">Should I buy a second home, before selling my first home?</label>
  <!-- </div> -->
  <div class="accordian_content"><p>Should the pace attack? </p></div>
</div>

<!-- THIRD accordian_tab -->
<div class="accordian_tab">
  <input id="accordian_tab-3r" type="radio" name="accordian_tabr">
 <!-- <div class="faq_title">-->
  <div class="faq_number">03</div> 
  <label for="accordian_tab-3r">How long does it take to buy a home?</label>
  <!-- </div> -->
  <div class="accordian_content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
</div>
<!-- FOURTH accordian_tab -->
<div class="accordian_tab">
  <input id="accordian_tab-4r" type="radio" name="accordian_tabr">
  <!-- <div class="faq_title">-->
  <div class="faq_number">04</div> 
  <label for="accordian_tab-4r">If I backout of buying a house, what happens next?</label>
  <!-- </div> -->
  <div class="accordian_content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
</div>
<!-- FIFTH accordian_tab -->
<div class="accordian_tab">
  <input id="accordian_tab-5r" type="radio" name="accordian_tabr">
 <!-- <div class="faq_title"> -->
  <div class="faq_number">05</div>
  <label for="accordian_tab-5r">How much should I pay an agent to help me buy a home?</label>
  <!-- </div> -->
  <div class="accordian_content"><p>A circumstance strikes a deserved trap.</p></div>
</div>
</div>
</template>


<style scoped>
.faq_title
{
  display:flex;
}
.faq_number
{
  font-size: 44px;
    font-family: Oswald;
    color:#0B132A;
    width: fit-content;
    /* left: 20%; */
    z-index: 9;
        margin-top: -9px;
    margin-left: 0px;
    position: absolute;
    padding: 10px;
}
/* (A) TABS CONTAINER */
.accordian_tab, .accordian_tab * {
  box-sizing: border-box;
   

}
.accordian_tab {max-height:300px;
    max-width: 800px;
    margin-left: auto; }

/* (B) HIDE CHECKBOX */
.accordian_tab input { display: none; }

/* (C) TAB LABEL */
.accordian_tab label {
  position: relative; 
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 10px;
  padding: 20px;
  font-weight: 700;
  background: transparent;
  cursor: pointer;
  font-family: Libre-Regular;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 36px;
color: #0B132A;
    border-top: none;
    border-bottom: 0.5px solid #bfc7ca;
    width: 900px;
    padding-left: 84px;
}
.accordian_tab:last-of-type label
{
  border:none;
}
.accordian_tab .accordian_content p 
{
  max-width:600px;
  color:#0B132A;
  font-size:20px;
}
.accordian_tab .accordian_content {
  background: transparent;
  overflow: hidden;
  transition: max-height 0.3s;
  max-height: 0;
  display: flex;
  text-align: left;
  
 
}
.accordian_tab .accordian_content p { margin-left: 11vh;
 }

/* (E) OPEN TAB ON CHECKED */
.accordian_tab input:checked ~ .accordian_content { max-height: 100vh;border-bottom:1px solid  #bfc7ca; }
.accordian_tab input:checked ~ label{border-bottom:none;}
/* (F) EXTRA - ADD ARROW INDICATOR */
 label::after {
  display: block;  
  content: url('@/assets/icons/plus.svg');
  position: absolute;
  right: 20px;
  top: 10px;
 
  
}
input:checked ~ label::after {

  top:-2px;
  content:url('@/assets/icons/minus.svg');
font-size:35px;
font-weight:200;

 }
 @media screen  and (max-width:600px){
   .accordian_tab .accordian_content p {
     margin-left:12vh;
     font-size:16px;
   }

   .accordian_tab label
   {
     text-align: left;
     padding:5px;
   }
   .accordian_tab { margin:20px 0px; }

   .accordian_tab label
   {
     font-size:12px;
     line-height:20px;
   }
   
   .faq_number
   {
     font-size:30px;
     margin-top:-12px;
   }
    .accordian_tab label::after
    {
      content:url('@/assets/icons/plus_small.svg');
      right:-11px;
      top:17px;
    }
    input:checked ~ label::after {

  content:url('@/assets/icons/minus_small.svg');
  top:15px;
    }
    
  
 }
 @media screen and (max-width:1200px){
   .accordian_tab label
   {
     width:98%;
   }
   .accordian_tab .accordian_content
   {
     justify-content: center;
   }
   .accordian_tab label
   {
         padding-left: 55px;
   }
   /* .accordian_tab label::after
   {
     right: 8px;
    top: 20px;
   } */
 /* input:checked ~ label::after 
 {

  top:20px;
 } */
 }
</style>