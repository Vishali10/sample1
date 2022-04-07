<script setup>
import MarketWatchCard from './MarketWatchCard.vue'
const props=defineProps({
  option1:String,
  option2:String,
  option3:String
})
</script>

<template>
   <div class="tabs">

    <input type="radio" name="tabs" id="tabone">
    <label for="tabone" class="tabone">{{option1}}</label>
    <div class="tab" >
      <div class="marketwatch_cards">
     <MarketWatchCard icon="avglisting.svg" heading="Average Sold Price" numbers="$123999"></MarketWatchCard>
      <MarketWatchCard icon="activelisting.svg" heading="No. of Active Listings" numbers="340"></MarketWatchCard>
       <MarketWatchCard icon="dayinmarket.svg" heading="No. of days on market" numbers="$123999"></MarketWatchCard>
      </div>
    </div>

    <input type="radio" name="tabs" id="tabtwo" checked="checked">
    <label for="tabtwo" class="tabtwo">{{option2}}</label>
    <div class="tab">
      <div class="marketwatch_cards">
       <MarketWatchCard icon="avglisting.svg" heading="Average Sold Price" numbers="$123999"></MarketWatchCard>
      <MarketWatchCard icon="activelisting.svg" heading="No. of Active Listings" numbers="340"></MarketWatchCard>
       <MarketWatchCard icon="dayinmarket.svg" heading="No. of days on market" numbers="$123999"></MarketWatchCard>
      </div>
    </div>
    
    <input type="radio" name="tabs" id="tabthree">
    <label for="tabthree" class="tabthree">{{option3}}</label>
    <div class="tab">
      <div class="marketwatch_cards">
      <MarketWatchCard icon="avglisting.svg" heading="Average Sold Price" numbers="$123999"></MarketWatchCard>
      <MarketWatchCard icon="activelisting.svg" heading="No. of Active Listings" numbers="340"></MarketWatchCard>
       <MarketWatchCard icon="dayinmarket.svg" heading="No. of days on market" numbers="$123999"></MarketWatchCard>
      </div>
    </div>
  </div>

</template>


<style>
.tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
      padding: 4vh 22vh;
 
}
 
.tabs label {
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 3rem;
  margin-right: -11px;
  cursor: pointer;
  background-color: transparent;
  font-weight: normal;
  border-top: 2px solid #FBD784;
  border-bottom: 2px solid #FBD784;
  transition: background ease 0.3s;
  font-family: Libre-Regular;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height, or 150% */
color:white;
}
 .marketwatch_cards
 {
   display:flex;
   justify-content: space-evenly;
   margin-top: 3vh;
 }
.tabs .tab {
  order: 9;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  display: none;
  padding: 1rem;
  background: transparent;
  padding: 20px;
  
}
 
.tabs input[type="radio"] {
  display: none;
}
 
.tabs input[type="radio"]:checked + label {
  background: #FBD784;
  border-radius:10px;
  color:black;
}
 
.tabs input[type="radio"]:checked + label + .tab {
  display: block;
}

.tabone
{
    border-left: 2px solid #FBD784;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
}
.tabthree
{
    border-right: 2px solid #FBD784;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
}
@media screen and (max-width:1200px){
  .marketwatch_cards
  {
    flex-direction: column;
    
  }
  .tabs label
  {
    padding: 9px 1em;
  }
}
@media (max-width: 900px) {
  .tabs .tab{
  order: 9;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    display: none;
    background: transparent;
    padding:0px;
  }
 .tabs
 {
   padding:5vh;
 }
  .tabs label {
       padding: 5px 6px;
    font-size: 12px;
    width: 30%;
  }

  
}

</style>