<script setup>
const props=defineProps({
    agentname:String,
    agentlocation:String
})
</script>
<template>
<div class="test_det">
  <h3 class="test_name">{{agentname}}</h3>
  <p class="test_loc">{{agentlocation}}</p>
  </div>
</template>

<style>

.test_name
{
    font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 30px;
margin:0px;
}
.test_loc
{
    margin:0px;
    color: #737780;
    font-style: normal;
font-weight: normal;
font-size: 11px;
line-height: 15px;
}
</style>