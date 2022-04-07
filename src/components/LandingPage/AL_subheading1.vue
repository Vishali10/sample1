<script setup>
const props=defineProps({
    content:String
})
</script>
<template>
  <h1 class="AL_subheading1">{{content}}</h1>
</template>

<style>
.AL_subheading1 {
font-family: Libre-Regular;
font-style: normal;
font-weight:700;
font-size: 2.5vh;
line-height: 11px;
color:white;

}
@media screen and (max-width: 900px) {
 .AL_subheading1
 {
   justify-content:center!important;
 
 }
}
</style>