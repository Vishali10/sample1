<script setup>
import  Accordian from './Accordian.vue'
const props=defineProps({
  option1:String,
  option2:String
})
</script>

<template>
  <div class="tabs2">

    <input type="radio" name="tabs2" id="tabone2" checked="checked">
    <label for="tabone2" class="tabone">{{option1}}</label>
    <div class="tab" >
      <!-- <img src="@/assets/images/faq.svg"/> -->
       <img class="faq_img" src="@/assets/images/faq_white.svg"/>
      <Accordian></Accordian>
    </div>

    <input type="radio" name="tabs2" id="tabtwo2">
    <label for="tabtwo2" class="tabtwo">{{option2}}</label>
    <div class="tab">
     
    </div>
    
   
  </div>

</template>


<style>
.tabs2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 4vh 22vh 8vh 22vh;
  margin-top: -200px;
  
}
 
.tabs2 label {
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 3rem;
  margin-right: -11px;
  cursor: pointer;
  background-color: transparent;
  font-weight: normal;
border-top: 2px solid #FBD784;
  border-bottom: 2px solid #FBD784;
  transition: background ease 0.3s;
  font-family: Libre-Regular;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height, or 150% */
color:#0B132A;
}

.tabs label::after
{
      right: 45px;
}
.tabs2 .tab {
  order: 9;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  display: none;
  padding: 1rem;
  background: transparent;
  padding: 20px;
  margin-top:150px;
 
  
}
 
.tabs2 input[type="radio"] {
  display: none;
}
 
.tabs2 input[type="radio"]:checked + label {
  background: #FBD784;
  border-radius:10px;
  color:black;
}
 
.tabs2 input[type="radio"]:checked + label + .tab {
  display: flex;
  justify-content: end;
}

.tabs2 .tabone
{
    border-left: 2px solid #FBD784;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
}
.tabs2 .tabtwo
{
    border-right: 2px solid #FBD784;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
}
@media screen and (max-width:1200px){
  .faq_img
  {
    display: none;
  }
  .tabs2 label
  {
    padding: 9px 1em;
  }
  .tabs2
  {
    margin-top:0px;
    justify-content: center;
  }
  .tabs2 .tab
  {
    order: 9;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    display: none;
    background: transparent;
  }
}
@media (max-width: 900px) {
 .tabs2
 {
   padding:5vh;
 }
  .tabs2 label {
       padding: 9px 6px;
    font-size: 15px;
    width: 30%;
  }

  .tabs2 .tab {
  
  margin-top:10px;
 
  
}
  
}
</style>