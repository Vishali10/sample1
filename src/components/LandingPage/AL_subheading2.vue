<script setup>
const props=defineProps({
    content:String
})
</script>
<template>
  <h1 class="AL_subheading2">{{content}}</h1>
</template>

<style>
.AL_subheading2 {
font-family: Libre-Regular;
font-style: normal;
font-weight:400;
font-size: 2vh;
line-height: 25px;
color:white;
text-align: center;
}
@media screen and (max-width: 900px) {
 .AL_subheading2
 {
   justify-content:center!important;

 }
}
</style>