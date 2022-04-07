<template>
  <div class="agent_desc">
      <p>
         <ul>
             <li>I Build relationships with my clients, which lasts forever.I Build relationships with my clients, which lasts forever.</li>
              <li>I Build relationships with my clients, which lasts forever.I Build relationships with my clients, which lasts forever.</li>
               <li>I Build relationships with my clients, which lasts forever.I Build relationships with my clients, which lasts forever.</li>
                <li>I Build relationships with my clients, which lasts forever.I Build relationships with my clients, which lasts forever.</li>
         </ul>
      </p>
    <div class="btn_div">
<PhoneBtn phone="+1-234-345-456" style="margin-right:20px;"></PhoneBtn>
<EmailBtn email="jeffpeterson@gmail.com"></EmailBtn>
</div>    
  </div>
</template>

<script setup>
import PhoneBtn from './PhoneBt.vue'
import EmailBtn from './EmailBtn.vue'
</script>

<style scoped>
li 
{
    padding:10px;
}
.agent_desc
{
   
    overflow:wrap;
    text-align: left;
    display: flex;
    width:60%;
    padding:20px;
    max-width: 750px;   
    flex-direction: column;
}
.agent_desc p 
{
    font-family: Libre-Regular;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 32px;
color:#0B1D26;
}
@media screen and (max-width:1200px){
    .btn_div
    {
        text-align: center;    }
    .agent_desc
    {
        width:100%;
        
    }
    .agent_desc p 
    {
        margin:0px;
    }
    .agent_desc li
    {
        width:100%;
        font-size:3vh;
    }
}
</style>