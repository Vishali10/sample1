<script setup>
const props=defineProps({
    url:String,
    style:Object
})
</script>
<template>
  <img class="agent_img" src="@/assets/images/testimonial_img.svg" :style="style"/>
</template>

<style>
.agent_img
{
  padding:20px;
}
</style>