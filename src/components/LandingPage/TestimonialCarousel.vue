<script setup>
import { onMounted,ref } from 'vue';
import TestimonialCard from './TestimonialCard.vue';
const mySlides = ref([])
const dot = ref([])
const textarr = ref(['Kristin Watson','Kristin Watson','Kristin Watson'])
var slideIndex = ref(1);
var AutoslideIndex = ref(0);
onMounted(() => {
  AutoshowSlides();
 showSlides(slideIndex.value);
})
var isDesktop=false
var isMobile=false
detectMob()
function detectMob() {
    if(( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) )
    isMobile=true
    else
    isDesktop=true
  }
function AutoshowSlides() {
  if(AutoslideIndex.value<0){
    AutoslideIndex.value = mySlides.value.length-1;
  }
  
  if(AutoslideIndex.value>mySlides.value.length-1){
    AutoslideIndex.value = 0;
  }
  
  for(let i=0;i<mySlides.value.length;i++){
    mySlides.value[i].style.display = "none";
    dot.value[i].classList.remove("active");
  }
  
  mySlides.value[AutoslideIndex.value].style.display= "flex";
  dot.value[AutoslideIndex.value].classList.add("active");
  
  AutoslideIndex.value++;
  
  setTimeout(AutoshowSlides,3000);
}

function plusSlides(n) {
  showSlides(slideIndex.value += n);
}

function currentSlide(n) {
  showSlides(slideIndex.value= n);
}

function showSlides(n) {
  var i;  
  if (n > mySlides.value.length) {slideIndex.value = 1}    
  if (n < 1) {slideIndex.value = mySlides.value.length}
  for (i = 0; i < mySlides.value.length; i++) {
      mySlides.value[i].style.display = "none";  
  }
  for (i = 0; i < dot.value.length; i++) {
      dot.value[i].className = dot.value[i].className.replace(" active", "");
  }
  // mySlides.value[slideIndex.value-1].style.display = "flex";  
  dot.value[slideIndex.value-1].className += " active";
  
}




</script>
<template>
<div>
  <div v-if="isMobile">
<div class="slideshow-container">

<div class="mySlides fade" v-for="i in textarr" :key="i" :ref="el => mySlides.push(el)" style="display:flex;flex-direction:row">

  <TestimonialCard :Text="i" />

</div>
</div>


<br>

<div style="text-align:center;">
  <span class="dot" @click="currentSlide(i)" v-for="i in 3" :key="i" :ref="el => dot.push(el)"></span>
</div>

</div>
</div>
<div v-if="isDesktop" style="margin-top:5vh;display: flex;">
  <div v-for="i in textarr" :key="i" >
  <TestimonialCard :Text="i" />
  </div>
</div>
</template>


<style scoped>

* {box-sizing: border-box}

/* .mySlides {display: none;width: 100%;} */
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  width:100%;
  position: relative;
  margin: auto;
}
.mySlides
{
  display: flex;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */


/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  /* -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s; */
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}
</style>