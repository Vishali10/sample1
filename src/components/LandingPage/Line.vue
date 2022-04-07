<script setup>
import {onMounted, ref} from 'vue'
const props =defineProps({
    color:String,
    length:String
})
const line=ref(null)
onMounted(()=>
{
line.value.style.backgroundColor=props.color;
line.value.style.width=props.length;
line.value.style.border="1px solid "+props.color;
})

</script>
<template>
  <hr class="line" ref="line">
</template>
<style>
.line 
{
  float: left;
  margin-right:32px;
}



</style>