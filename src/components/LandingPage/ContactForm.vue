<script setup>
import FormInput from '@/components/FormInput.vue'
import {ref} from 'vue'
var isMob=ref(false)
 var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
 if(width<866)
 isMob.value=true

</script>

<template>

<form class="contact_form">
    <h1 class="contact_head">Let me reach you</h1>
<h1 class="contact_subhead">In general, I reply within 24-28 hours.</h1>
   <input type="text" placeholder="Your Name"/>
   <input type="email" placeholder="Your Email Address"/>
   <input type="text" placeholder="Your Contact Number"/>
   <h1 class="contact_subhead2">I'm interested in</h1>
  <div class="radio_btns">
  <div class="radio-item">
    <input type="radio" id="ritema" name="ritem" value="ropt1">
    <label for="ritema">Buy</label>
</div>

<div class="radio-item">
    <input type="radio" id="ritemb" name="ritem" value="ropt2">
    <label for="ritemb">Sell</label>
</div>
<div class="radio-item">
    <input type="radio" id="ritemc" name="ritem" value="ropt3">
    <label for="ritemc">Rent</label>
</div>
</div>
 <button class="agent_btns" style="background-color:transparent;border:1px solid #FBD784" type="submit">Get a free consultation</button>
  <div style="display: flex;
    justify-content: end;
    margin-top: 15%;" v-show="!isMob"><img class="footer_logo" src="@/assets/images/logo_placeholder.svg"/></div>
 <div class="footer" v-show="isMob">
   <div  class="copyright">
   <span>COPYRIGHT SUPERAGENT 2022 - </span>
    <a>TERMS & CONDITIONS</a>&nbsp;&nbsp;
     <a>PRIVACY POLICY</a>
      

     </div>
     <div style="position:relative"><img class="footer_logo" src="@/assets/images/logo_placeholder.svg"/></div>
    </div>
</form>

</template>


<style scoped>

.footer_logo
{
  /* position:absolute; */
  /* top:25vh; */
  /* right:5vh; */
}
.radio_btns
{
  margin-top: -2vh;
}
.contact_form
{
    max-width:533px;
    text-align: left;
    padding:20px;
}
.contact_head
{
    font-family: Libre-Regular;
font-style: normal;
font-weight: 400;
font-size: 46px;
line-height: 14px;

}
.contact_subhead
{
    font-style: normal;
font-weight: 400;
font-size: 22px;
color: rgba(255, 255, 255, 0.7);
line-height: 14px;
margin-bottom:40px;
}
.contact_subhead2
{
  font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 22px;
color: #FBD784;
}
.interested_in
{
    display:flex;
}
.contact_form input
{
    height:52px;
    font-family:Libre-Regular;
    padding:20px;
    margin:10px 0px;
}
.contact_form input::placeholder
{
    font-family:Libre-Regular;
    font-size:16px;
}
.radio-item {
  display: inline-block;
  position: relative;
  padding: 0 6px;
  margin: 10px 0 0;
 
}

.radio-item input[type='radio'] {
  display: none;
  cursor:pointer;
}

.radio-item label {
  color: white;
  font-weight: normal;
  font-family:Libre-Regular;
  font-size:16px;
   cursor:pointer;
}

.radio-item label:before {
  content: " ";
  display: inline-block;
  position: relative;
  top: 0px;
  margin: 0px 5px -4px 0px;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border: 2px solid #FBD784;
  background-color: white;
}

.radio-item input[type=radio]:checked + label:after {
  border-radius: 11px;
  width: 13px;
  height: 13px;
  position: absolute;
  top: 31.4px;
  left: 11.5px;
  content: " ";
  display: block;
  background: #FBD784;
}
.radio-item input[type=radio]:checked + label:before
{
  background-color: transparent;
}
@media screen and (max-width:600px){
  .contact_form
  {
    padding:0px;
  }
  .contact_head
  {
    line-height: 26px;
    font-size:30px;
    color: #FBD784;
  }
  .contact_subhead
  {
    line-height:25px;
    margin-top:-10px;
    font-size:20px;
  }
  .contact_subhead2
  {
    font-size:24px;
  }
  .radio_btns
  {
    margin-top:-6vh;
  }
  .radio-item label:before {
    width: 15px;
    height: 15px;
  }
  .radio-item input[type=radio]:checked + label:after {
    width: 9px;
    height: 9px;
    top: 36.4px;
    left: 10.5px;
  }
}
</style>