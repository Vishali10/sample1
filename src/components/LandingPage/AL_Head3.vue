<script setup>
const props=defineProps({
    content:String
})
</script>
<template>
  <h1 class="AL_head3">{{content}}</h1>
</template>

<style>
.AL_head3 {
font-family: Libre-Regular;
font-style: normal;
font-weight:400;
font-size: 2vh;
line-height: 4vh;
letter-spacing: 6px;
text-transform: uppercase;
display:flex;
}
@media screen and (max-width: 900px) {
 .content_container .AL_head3
 {
   justify-content:center!important;
   text-transform:none;
   letter-spacing: 1px;
   color:white!important;
 }
 .AL_sub .AL_head3
 {
   margin-top:-16px;
   text-transform:none;
   letter-spacing: 1px!important;
 
 }
}
</style>