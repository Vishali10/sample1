<script setup>
import {ref} from 'vue'
const props=defineProps(
    {
        icon:String,
        heading:String,
        numbers:String
    }
)
const trend_up=ref(true)
</script>
<template>
  <div class="mw_card">
      <img class="mw_icon" :src="require('@/assets/icons/' + icon)"/>
      <div class="mw_content">
      <span class="mwcard_heading">{{heading}}</span>
      
      <div class="trend">
          <span class="mwcard_numbers">{{numbers}}</span>
          <img v-if="trend_up" class="trend_icon" :src="require('@/assets/icons/trendup.svg')"/>
           <img v-else class="trend_icon" :src="require('@/assets/icons/trenddown.svg')"/>
      </div>
      </div>
  </div>
</template>


<style>
.mw_card
{
    width: 34vh;
    height: 40vh;
    background:transparent;
    align-items: center;
    border: 1px solid #FBD784;
    display: flex;
    flex-direction: column;
    justify-content: center;
   
   
}
.trend
{
    display:flex;
    justify-content:center;
}
.trend_icon
{
    padding:0px 10px;
    margin-top:-2px;
}
.mw_icon
{
    margin-bottom:30px;
}
.mwcard_heading
{
    font-family: Libre-Regular;
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 31px;
text-align: center;
letter-spacing: -0.250316px;
text-align: center;
color: #FFFFFF;
}
.mwcard_numbers
{
    font-family: Libre-Regular;
    font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 55px;
/* identical to box height */

text-align: center;
letter-spacing: -0.500211px;

color: #FBD784;
}
@media screen and (max-width:1200px){
    .mw_card
    {
        flex-direction:row;
        height:150px;
        width:auto;
        justify-content: flex-start;
        padding:20px;
        margin:3vh;
        
    align-items: center;

    }
    .trend
    {
        justify-content:flex-start;
    }
    .mw_icon
{
    margin-bottom:0px;
}
.mwcard_heading
{
    font-size:3vh;
    text-align: left;
}
.mwcard_numbers
{
    font-size:4vh;
}
    .mw_content
    {
        display:flex;
        flex-direction: column;
        padding:20px;
    }
}
</style>