<script setup>
const { onMounted, ref}=require("@vue/runtime-core")

const props=defineProps({
    content:String,
    color:String
})
const page_title=ref(null)
onMounted(()=>
page_title.value.style.color=props.color
)
</script>

<template>
  <h1 class="page_title" ref="page_title">{{content}}</h1>
</template>

<style>
.page_title {
font-family: Libre-Regular;
font-style: normal;
font-weight:700;
font-size: 7vh;
line-height: 30px;
color:#0B1D26;
letter-spacing: 2px;
}
@media screen and (max-width: 900px) {
 .page_title
 {
   justify-content:center!important;
   font-size: 6vh;
  margin-left:37px;
 }
}
</style>