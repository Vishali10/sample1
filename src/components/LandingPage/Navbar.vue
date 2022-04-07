<script setup>
import {ref} from 'vue'
const menu=ref(null)
const logo=ref(null)
const logo_mob=ref(null)
const contact_btn=ref(null)
const closeToggle=ref(null)
const toggleBtn=ref(ref(null))
function toggleNav()
{
  menu.value.classList.toggle('active')
  if(menu.value.classList.contains('active'))
  {
    toggleBtn.value.style.display="none"
    closeToggle.value.style.display="block"
    logo.value.style.display="none"
    logo_mob.value.style.display="block"
    contact_btn.value.style.display="none"
  }
  else
  {
  toggleBtn.value.style.display="block"
  closeToggle.value.style.display="none"
  logo.value.style.display="block"
  logo_mob.value.style.display="none"
  contact_btn.value.style.display="block"
  }
}
const props=defineProps(['navlinks'])

</script>
<template>
  <nav class="navbar">
    <span class="navbar-toggle" @click="toggleNav">
        <img src="@/assets/icons/navbartoggle.svg" ref="toggleBtn"/>
        <img src="@/assets/icons/closetoggle.svg" ref="closeToggle" style="display:none">
        </span>
    <a href="#" class="logo" ref="logo">
      <img src="@/assets/images/logo_placeholder.svg"/>
    </a>
    <ul class="main-nav" ref="menu">
      <li v-for="navlink in navlinks" :key="navlink.name">
     <a class="nav-links" :href="navlink.link" :class="{active:navlink.isActive}">{{navlink.name}}</a>

      </li>
       <a href="#" class="logo logo_mob" ref="logo_mob" style="display:none">
      <img src="@/assets/images/logo_placeholder.svg"/>
    </a>
      <button class="contact_btn" ref="contact_btn">Contact Me</button>
    </ul>
    
  </nav>
</template>


<style>
.active {
  color:white!important;
}

.logo_mob
{
  padding:20px;
  width:auto;
}
.navbar *
{
  box-sizing: border-box;
}
.agent_btns
{
  background-color:#0B1D26;
  color:#FBD784;
  padding:10px 20px 10px 20px;
  font-family: Libre-Regular;
font-style: normal;
font-weight: 400;
font-size: 20px;
border-radius: 5px;
cursor: pointer;
}

.contact_btn
{
 background-color: #FBD784;
    color: #0B1D26;
    padding: 12px 20px 12px 20px;
    font-family: Libre-Regular;
    font-style: normal;
    font-weight: 400;
    font-size: 2.5vh;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 6vh;
    min-width: 20vh;
}
.close_nav
{
  display:none;
}
.navbar {
  font-size: 2vh;
  background-color:transparent;
  padding-bottom: 10px;
  display:flex;
  
  
}

.main-nav {
  list-style-type: none;
  display: none;
  width:100%;
  height:100vh;
   background-color:#0B1D26;
   margin:0px;
   padding:20px;
}

.nav-links,
.logo {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  
}

.main-nav li {
  text-align: center;
  margin: 5vh;
  
}

.logo {
  display: inline-block;

  margin-left: 20px;
 
}
.logo img {
    width: 15vh;
    height: 10vh;
}

.navbar-toggle {
  position: absolute;
  right: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
  top:2vh; 
}

.active {
  display: block;  
}

 
@media screen and (min-width: 866px) {
  .navbar {
    display: flex;
    padding-left: 10%;
    padding-bottom: 0;
    height: 120px;
    align-items: center;
   background-color:transparent;
  }

  .main-nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
        margin-top: 40px;
        margin-right: 14vh;
        background-color:transparent;
       
  }

  .main-nav li {
    margin: 0;
    padding:1vh;
    text-align: right;
  }

  .nav-links {
    margin-left: 3vh;
    font-family: Libre-Regular;
font-style: normal;
font-weight: 400;
font-size:2.3vh;
line-height: 20px;
text-align: center;
color: rgba(255, 255, 255, 0.7);
  }

.logo img
{
  max-width: 201px;
    max-height: 82px;

}
  .navbar-toggle {
    display: none;
  }

  .logo:hover,
  .nav-links:hover {
    color: rgba(255, 255, 255, 1);
  }
}

.agent_btns
{
     padding: 16px 8px 16px 8px;
  font-size:3vh;
  
}

.cont .AL_subheading
{
  margin:3px;
}

</style>