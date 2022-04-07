<script setup>
const props=defineProps({
    content:String
})
</script>
<template>
  <h1 class="AL_head1">{{content}}</h1>
</template>

<style>
.AL_head1 {
font-family: Libre-Regular;
font-style: normal;
font-weight: 700;
font-size: 8vh;
line-height: 18px;
color: #FFFFFF;
}
@media screen and (max-width: 866px) {
 .AL_head1
 {
   justify-content:center!important;
   font-size:7vh;
   line-height:7vh;
 }
}
</style>