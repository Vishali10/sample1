<script setup>
import AgentDescription from './AgentDescription.vue'
const props=defineProps({
    url:String
})
</script>
<template>
  <div class="agent_photo_div">
    
      
  
<AgentDescription></AgentDescription>
  <div class="photo_container">
      <svg width="510" height="277" viewBox="0 0 510 377" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-1" y="1" width="517" height="375" transform="matrix(-1 0 0 1 517 0)" stroke="#0B1D26" stroke-width="2"/>
</svg>
<div class="agent_photo_bg"><img class="agent_photo" :src="require('@/assets/images/' + url + '')"/></div></div>
  </div>
</template>



<style>
.photo_container
{
position:relative;
display:inline;
}
.agent_photo_div
{
    position: relative;
    display: flex;
    width:100%;
    float:right; 
    justify-content: space-between;     
        align-items: center;
}
.agent_photo_bg
{
 position: absolute;
 top:-10%;
 left:19%;
}
.agent_photo
{
    width: 322px;
    margin-top:-10px;
    

 
 
      

}
@media screen and (max-width:1200px){
    .agent_photo_div
    {
        position: relative;
    display: flex;
    width: 100%;
    height:auto;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 15%;
    
    }
    .photo_container
{
position:relative;

}
.agent_photo_bg
{
 position:initial;
}
    .agent_photo
    {
       width:40vh;
        height:auto
    }
    .agent_photo_div svg
    {
        display: none;
    }
}
</style>