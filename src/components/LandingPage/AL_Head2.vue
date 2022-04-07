<script setup>
const props=defineProps({
    content:String
})
</script>
<template>
  <h1 class="AL_head2">{{content}}</h1>
</template>

<style>
.AL_head2 {
font-family: Libre-Regular;
font-style: normal;
font-weight: 700;
font-size: 5vh;
line-height: 5vh;
color: #FFFFFF;
}
@media screen and (max-width: 1200px) {
 .AL_head2
 {
   justify-content:center!important;
  font-size:4vh;
 }
}
</style>