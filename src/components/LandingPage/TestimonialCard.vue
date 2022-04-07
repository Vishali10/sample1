<script setup>
import ProfPhoto from './ProfPhoto.vue'
import ProfTitle from './ProfTitle.vue'
const props=defineProps({
    url:String,
    style:String,
    Text:String
})
</script>
<template>
 <div class="testi_card">
     <p class="testimonial_text">Jeff Peterson did a great job, it was quick, efficient and very professional. We are very satisfied with the services provided. </p>
<div class="test_person">
<ProfPhoto url="@/assets/images/testimonial_img.svg" style="height:50px;width:50px;border-radius:50%;"></ProfPhoto>
    <ProfTitle :agentname="Text" agentlocation="Oct 27, 2021"></ProfTitle>
</div>
 </div>
</template>

<style>
.test_person
{
    display:flex;
    align-items: center;
}
.testi_card
{
    background-color:white;
    max-width:460px;
   font-family: Libre-Regular;
    box-shadow: 0px 20px 50px rgba(18, 17, 39, 0.08);
border-radius: 12px;
padding:20px;
text-align: left;
margin:10px;
}
.testi_card .testimonial_text
{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;
color: #67677E;
}
@media screen and (max-width:600px){
    .testi_card
    {
        padding:0px;
    }
    .testi_card .testimonial_text
    {
        font-size:3vh;
    }
}
</style>