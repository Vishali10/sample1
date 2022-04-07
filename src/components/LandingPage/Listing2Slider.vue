<script setup>
import Listings2 from './Listings2.vue'

</script>

<template>
 
                  <div class='carousel'>
                    <input checked='checked' class='carousel__activator' id='carousel-slide-activator-1' name='carousel' type='radio'>
                    <input class='carousel__activator' id='carousel-slide-activator-2' name='carousel' type='radio'>
                    <input class='carousel__activator' id='carousel-slide-activator-3' name='carousel' type='radio'>
                    <div class='carousel__controls'>
                        <label class='carousel__control carousel__control--backward' for='carousel-slide-activator-1'  style="opacity:0.35">
                      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 7.74998H3.925L8.4625 2.29998C8.67467 2.04471 8.77675 1.71561 8.74628 1.38507C8.7158 1.05454 8.55527 0.749652 8.3 0.537478C8.04473 0.325305 7.71563 0.223228 7.3851 0.253702C7.05456 0.284177 6.74967 0.444708 6.5375 0.699979L0.2875 8.19998C0.245451 8.25963 0.207849 8.3223 0.175 8.38748C0.175 8.44998 0.175 8.48748 0.0875002 8.54998C0.0308421 8.6933 0.0011764 8.84587 0 8.99998C0.0011764 9.15409 0.0308421 9.30665 0.0875002 9.44998C0.0875002 9.51248 0.0874998 9.54998 0.175 9.61248C0.207849 9.67765 0.245451 9.74032 0.2875 9.79998L6.5375 17.3C6.65503 17.4411 6.8022 17.5546 6.96856 17.6323C7.13491 17.7101 7.31636 17.7503 7.5 17.75C7.79207 17.7505 8.07511 17.6488 8.3 17.4625C8.42657 17.3575 8.5312 17.2287 8.60789 17.0832C8.68458 16.9378 8.73183 16.7787 8.74692 16.6149C8.76202 16.4512 8.74466 16.2861 8.69586 16.1291C8.64705 15.9721 8.56775 15.8263 8.4625 15.7L3.925 10.25H18.75C19.0815 10.25 19.3995 10.1183 19.6339 9.88386C19.8683 9.64944 20 9.3315 20 8.99998C20 8.66846 19.8683 8.35052 19.6339 8.1161C19.3995 7.88167 19.0815 7.74998 18.75 7.74998Z" fill="black"/>
</svg>

                      </label>
                      <label class='carousel__control carousel__control--forward' for='carousel-slide-activator-2'>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25 7.74998H16.075L11.5375 2.29998C11.3253 2.04471 11.2232 1.71561 11.2537 1.38507C11.2842 1.05454 11.4447 0.749652 11.7 0.537478C11.9553 0.325305 12.2844 0.223228 12.6149 0.253702C12.9454 0.284177 13.2503 0.444708 13.4625 0.699979L19.7125 8.19998C19.7545 8.25963 19.7922 8.3223 19.825 8.38748C19.825 8.44998 19.825 8.48748 19.9125 8.54998C19.9692 8.6933 19.9988 8.84587 20 8.99998C19.9988 9.15409 19.9692 9.30665 19.9125 9.44998C19.9125 9.51248 19.9125 9.54998 19.825 9.61248C19.7922 9.67765 19.7545 9.74032 19.7125 9.79998L13.4625 17.3C13.345 17.4411 13.1978 17.5546 13.0314 17.6323C12.8651 17.7101 12.6836 17.7503 12.5 17.75C12.2079 17.7505 11.9249 17.6488 11.7 17.4625C11.5734 17.3575 11.4688 17.2287 11.3921 17.0832C11.3154 16.9378 11.2682 16.7787 11.2531 16.6149C11.238 16.4512 11.2553 16.2861 11.3041 16.1291C11.3529 15.9721 11.4322 15.8263 11.5375 15.7L16.075 10.25H1.25C0.91848 10.25 0.600536 10.1183 0.366116 9.88386C0.131695 9.64944 0 9.3315 0 8.99998C0 8.66846 0.131695 8.35052 0.366116 8.1161C0.600536 7.88167 0.91848 7.74998 1.25 7.74998Z" fill="black"/>
</svg>

                      </label>
                    </div>
                    <div class='carousel__controls'>
                      <label class='carousel__control carousel__control--backward' for='carousel-slide-activator-1'>
                      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 7.74998H3.925L8.4625 2.29998C8.67467 2.04471 8.77675 1.71561 8.74628 1.38507C8.7158 1.05454 8.55527 0.749652 8.3 0.537478C8.04473 0.325305 7.71563 0.223228 7.3851 0.253702C7.05456 0.284177 6.74967 0.444708 6.5375 0.699979L0.2875 8.19998C0.245451 8.25963 0.207849 8.3223 0.175 8.38748C0.175 8.44998 0.175 8.48748 0.0875002 8.54998C0.0308421 8.6933 0.0011764 8.84587 0 8.99998C0.0011764 9.15409 0.0308421 9.30665 0.0875002 9.44998C0.0875002 9.51248 0.0874998 9.54998 0.175 9.61248C0.207849 9.67765 0.245451 9.74032 0.2875 9.79998L6.5375 17.3C6.65503 17.4411 6.8022 17.5546 6.96856 17.6323C7.13491 17.7101 7.31636 17.7503 7.5 17.75C7.79207 17.7505 8.07511 17.6488 8.3 17.4625C8.42657 17.3575 8.5312 17.2287 8.60789 17.0832C8.68458 16.9378 8.73183 16.7787 8.74692 16.6149C8.76202 16.4512 8.74466 16.2861 8.69586 16.1291C8.64705 15.9721 8.56775 15.8263 8.4625 15.7L3.925 10.25H18.75C19.0815 10.25 19.3995 10.1183 19.6339 9.88386C19.8683 9.64944 20 9.3315 20 8.99998C20 8.66846 19.8683 8.35052 19.6339 8.1161C19.3995 7.88167 19.0815 7.74998 18.75 7.74998Z" fill="black"/>
</svg>

                      </label>
                      <label class='carousel__control carousel__control--forward' for='carousel-slide-activator-3'>
                 <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25 7.74998H16.075L11.5375 2.29998C11.3253 2.04471 11.2232 1.71561 11.2537 1.38507C11.2842 1.05454 11.4447 0.749652 11.7 0.537478C11.9553 0.325305 12.2844 0.223228 12.6149 0.253702C12.9454 0.284177 13.2503 0.444708 13.4625 0.699979L19.7125 8.19998C19.7545 8.25963 19.7922 8.3223 19.825 8.38748C19.825 8.44998 19.825 8.48748 19.9125 8.54998C19.9692 8.6933 19.9988 8.84587 20 8.99998C19.9988 9.15409 19.9692 9.30665 19.9125 9.44998C19.9125 9.51248 19.9125 9.54998 19.825 9.61248C19.7922 9.67765 19.7545 9.74032 19.7125 9.79998L13.4625 17.3C13.345 17.4411 13.1978 17.5546 13.0314 17.6323C12.8651 17.7101 12.6836 17.7503 12.5 17.75C12.2079 17.7505 11.9249 17.6488 11.7 17.4625C11.5734 17.3575 11.4688 17.2287 11.3921 17.0832C11.3154 16.9378 11.2682 16.7787 11.2531 16.6149C11.238 16.4512 11.2553 16.2861 11.3041 16.1291C11.3529 15.9721 11.4322 15.8263 11.5375 15.7L16.075 10.25H1.25C0.91848 10.25 0.600536 10.1183 0.366116 9.88386C0.131695 9.64944 0 9.3315 0 8.99998C0 8.66846 0.131695 8.35052 0.366116 8.1161C0.600536 7.88167 0.91848 7.74998 1.25 7.74998Z" fill="black"/>
</svg>
                      </label>
                    </div>
                    <div class='carousel__controls'>
                        
                      <label class='carousel__control carousel__control--backward' for='carousel-slide-activator-2'>
                          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 7.74998H3.925L8.4625 2.29998C8.67467 2.04471 8.77675 1.71561 8.74628 1.38507C8.7158 1.05454 8.55527 0.749652 8.3 0.537478C8.04473 0.325305 7.71563 0.223228 7.3851 0.253702C7.05456 0.284177 6.74967 0.444708 6.5375 0.699979L0.2875 8.19998C0.245451 8.25963 0.207849 8.3223 0.175 8.38748C0.175 8.44998 0.175 8.48748 0.0875002 8.54998C0.0308421 8.6933 0.0011764 8.84587 0 8.99998C0.0011764 9.15409 0.0308421 9.30665 0.0875002 9.44998C0.0875002 9.51248 0.0874998 9.54998 0.175 9.61248C0.207849 9.67765 0.245451 9.74032 0.2875 9.79998L6.5375 17.3C6.65503 17.4411 6.8022 17.5546 6.96856 17.6323C7.13491 17.7101 7.31636 17.7503 7.5 17.75C7.79207 17.7505 8.07511 17.6488 8.3 17.4625C8.42657 17.3575 8.5312 17.2287 8.60789 17.0832C8.68458 16.9378 8.73183 16.7787 8.74692 16.6149C8.76202 16.4512 8.74466 16.2861 8.69586 16.1291C8.64705 15.9721 8.56775 15.8263 8.4625 15.7L3.925 10.25H18.75C19.0815 10.25 19.3995 10.1183 19.6339 9.88386C19.8683 9.64944 20 9.3315 20 8.99998C20 8.66846 19.8683 8.35052 19.6339 8.1161C19.3995 7.88167 19.0815 7.74998 18.75 7.74998Z" fill="black"/>
</svg>
                      </label>
                       <label class='carousel__control carousel__control--forward' for='carousel-slide-activator-3' style="opacity:0.35">
                 <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25 7.74998H16.075L11.5375 2.29998C11.3253 2.04471 11.2232 1.71561 11.2537 1.38507C11.2842 1.05454 11.4447 0.749652 11.7 0.537478C11.9553 0.325305 12.2844 0.223228 12.6149 0.253702C12.9454 0.284177 13.2503 0.444708 13.4625 0.699979L19.7125 8.19998C19.7545 8.25963 19.7922 8.3223 19.825 8.38748C19.825 8.44998 19.825 8.48748 19.9125 8.54998C19.9692 8.6933 19.9988 8.84587 20 8.99998C19.9988 9.15409 19.9692 9.30665 19.9125 9.44998C19.9125 9.51248 19.9125 9.54998 19.825 9.61248C19.7922 9.67765 19.7545 9.74032 19.7125 9.79998L13.4625 17.3C13.345 17.4411 13.1978 17.5546 13.0314 17.6323C12.8651 17.7101 12.6836 17.7503 12.5 17.75C12.2079 17.7505 11.9249 17.6488 11.7 17.4625C11.5734 17.3575 11.4688 17.2287 11.3921 17.0832C11.3154 16.9378 11.2682 16.7787 11.2531 16.6149C11.238 16.4512 11.2553 16.2861 11.3041 16.1291C11.3529 15.9721 11.4322 15.8263 11.5375 15.7L16.075 10.25H1.25C0.91848 10.25 0.600536 10.1183 0.366116 9.88386C0.131695 9.64944 0 9.3315 0 8.99998C0 8.66846 0.131695 8.35052 0.366116 8.1161C0.600536 7.88167 0.91848 7.74998 1.25 7.74998Z" fill="black"/>
</svg>
                      </label>
                    </div>
                    <div class='carousel__screen'>
                      <div class='carousel__track'>
                        <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                          <div style="display:flex;flex-direction: column;">
                            <Listings2></Listings2>
                            <Listings2></Listings2>
                            </div>
                         
                        </div>
                        <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                          <div style="display:flex;flex-direction: column;">
                            <Listings2></Listings2>
                            <Listings2></Listings2>
                            </div>
                        </div>
                        <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                      <div style="display:flex;flex-direction: column;">
                            <Listings2></Listings2>
                            <Listings2></Listings2>
                            </div>
                        </div>
                        <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                           <div style="display:flex;flex-direction: column;">
                            <Listings2></Listings2>
                            <Listings2></Listings2>
                            </div>
                          
                        </div>
                        <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                         <div style="display:flex;flex-direction: column;">
                            <Listings2></Listings2>
                            <Listings2></Listings2>
                            </div>
                         
                        </div>
                        <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                          
                             <Listings2></Listings2>
                       
                        </div>
                        <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                         
                             <Listings2></Listings2>
                      
                        </div>
                      </div>
                    </div>
                  </div>
            

</template>

<style scoped>

.carousel {
  /* min-width: 900px; */
  max-width: 1236px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 48px;
  padding-right: 48px;
  position: relative;
}

.carousel__activator {
  display: none;
}

.carousel__controls {
  display: none;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 16px;
  left: 16px;
  bottom: -100px;
}
.carousel__controls:first-of-type {
  justify-content: center;
}
.carousel__controls:last-of-type {
  justify-content: flex-start;
}

.carousel__control {
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #FBD784;
  color: black;
  border-radius: 100%;
  box-shadow: 0 2px 10px 0 rgba(33, 34, 36, 0.3);
  font-size: 24px;
  height: 48px;
  justify-content: center;
  transition: 0.3s all;
  width: 48px;
  z-index: 1;
}
.carousel__control:hover {
  -webkit-transform: scale(1.05);
          transform: scale(1.05);
}

.carousel__activator:nth-of-type(1):checked
~ .carousel__controls:nth-of-type(1) {
  display: flex;
}

.carousel__activator:nth-of-type(1):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(0%);
          transform: translateX(0%);
}

.carousel__activator:nth-of-type(2):checked
~ .carousel__controls:nth-of-type(2) {
  display: flex;
}

.carousel__activator:nth-of-type(2):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
}

.carousel__activator:nth-of-type(3):checked
~ .carousel__controls:nth-of-type(3) {
  display: flex;
}

.carousel__activator:nth-of-type(3):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(-200%);
          transform: translateX(-200%);
}

.carousel__activator:nth-of-type(4):checked
~ .carousel__controls:nth-of-type(4) {
  display: flex;
}

.carousel__activator:nth-of-type(4):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(-300%);
          transform: translateX(-300%);
}

.carousel__activator:nth-of-type(5):checked
~ .carousel__controls:nth-of-type(5) {
  display: flex;
}

.carousel__activator:nth-of-type(5):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(-400%);
          transform: translateX(-400%);
}

.carousel__activator:nth-of-type(6):checked
~ .carousel__controls:nth-of-type(6) {
  display: flex;
}

.carousel__activator:nth-of-type(6):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(-500%);
          transform: translateX(-500%);
}

.carousel__activator:nth-of-type(7):checked
~ .carousel__controls:nth-of-type(7) {
  display: flex;
}

.carousel__activator:nth-of-type(7):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(-600%);
          transform: translateX(-600%);
}

.carousel__activator:nth-of-type(8):checked
~ .carousel__controls:nth-of-type(8) {
  display: flex;
}

.carousel__activator:nth-of-type(8):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(-700%);
          transform: translateX(-700%);
}

.carousel__activator:nth-of-type(9):checked
~ .carousel__controls:nth-of-type(9) {
  display: flex;
}

.carousel__activator:nth-of-type(9):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(-800%);
          transform: translateX(-800%);
}

.carousel__activator:nth-of-type(10):checked
~ .carousel__controls:nth-of-type(10) {
  display: flex;
}

.carousel__activator:nth-of-type(10):checked
~ .carousel__screen
.carousel__track {
  -webkit-transform: translateX(-900%);
          transform: translateX(-900%);
}

.carousel__screen {
  overflow: hidden;
  margin-left: -16px;
  margin-right: -16px;
}

.carousel__track {
  font-size: 0;
  transition: all 0.3s ease 0s;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.carousel__item {
  display: inline-flex;
  vertical-align: top;
  white-space: normal;
}

.carousel__item--desktop-in-1 {
  width: 100%;
}

.carousel__item--desktop-in-2 {
  width: 50%;
}

.carousel__item--desktop-in-3 {
  width: 50%;
}

.carousel__item--desktop-in-4 {
  width: 25%;
}

.carousel__item--desktop-in-5 {
  width: 20%;
}



.demo-content {
  color: #fff;
  display: flex;
  font-family: Helvetica;
  font-weight: 100;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border-radius: 3px;
  font-size: 56px;
  height: 250px;
  width: 100%;
}

.carousel__item:nth-child(1) .demo-content {
  background-color: #216485;
}

.carousel__item:nth-child(2) .demo-content {
  background-color: #3692b6;
}

.carousel__item:nth-child(3) .demo-content {
  background-color: #6fccc9;
}

.carousel__item:nth-child(4) .demo-content {
  background-color: #a6e3cf;
}

.carousel__item:nth-child(5) .demo-content {
  background-color: #aff0be;
}

.carousel__item:nth-child(6) .demo-content {
  background-color: #527059;
}

.carousel__item:nth-child(7) .demo-content {
  background-color: #243127;
}

@media screen and (max-width: 1023px) {
  .carousel {
    padding-left: 0;
    padding-right: 0;
  }

  .carousel__activator:nth-of-type(n):checked ~ .carousel__controls:nth-of-type(n) {
    display: none;
  }
  .carousel__activator:nth-of-type(n):checked ~ .carousel__screen .carousel__track {
    -webkit-transform: none;
            transform: none;
  }

  .carousel__screen {
    margin-left: 0;
    margin-right: 0;
  }

  .carousel__track {
    overflow-x: auto;
    width: auto;
    padding-left: 48px;
    padding-right: 48px;
  }

  .carousel__item--tablet-in-1 {
    width: 90%;
  }

  .carousel__item--tablet-in-2 {
    width: 45%;
  }

  .carousel__item--tablet-in-3 {
    width: 30%;
  }
}
@media screen and (max-width: 650px) {
  .carousel__track {
    padding-left: 0;
    padding-right: 0;
  }

  .carousel__item--mobile-in-1 {
    width: 90%;
  }

  .carousel__item--mobile-in-2 {
    width: 45%;
  }

  .carousel__item--mobile-in-3 {
    width: 30%;
  }
}
.carousel__control--forward
{
        margin-left: 50px;
}
</style>