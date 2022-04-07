<template>
  <div class="listing_container">
      <div class="row">
        <div class="col">
          <div class="card" tabindex="0">
            <div class="card-image">
              
             <img src="@/assets/images/listing_img.svg" placeholder="listing img"/>

            </div>
            <div class="card-content">
              <h2 class="listing_title">Vincent Condos</h2>
               <h3 class="listing_subtitle">Highway 7, Vaughan, ON</h3>
               
              <p class="listing_content">From $625,990 - $857,990</p>
               
              <div class="count">
              <div class="bedroom_count">
                <svg width="20" height="14" style="margin-top:5px;" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 5V5.5H18C18.8239 5.5 19.5 6.17614 19.5 7V11.5H18.67H18.3102L18.1959 11.8412L17.6402 13.5H17.3615L16.8148 11.8433L16.7015 11.5H16.34H3.67H3.31019L3.1959 11.8412L2.64019 13.5H2.35981L1.8041 11.8412L1.68981 11.5H1.33H0.5V7C0.5 6.17614 1.17614 5.5 2 5.5H2.5V5V2C2.5 1.17614 3.17614 0.5 4 0.5H16C16.8239 0.5 17.5 1.17614 17.5 2V5ZM9 5.5H9.5V5V2V1.5H9H4H3.5V2V5V5.5H4H9ZM16 5.5H16.5V5V2V1.5H16H11H10.5V2V5V5.5H11H16Z" fill="#FBD784" stroke="#0B1D26"/>
</svg>
  <span>2 Bd</span>
              </div>
              <div class="bathroom_count">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 7C8.5 7.82843 7.82843 8.5 7 8.5C6.17157 8.5 5.5 7.82843 5.5 7C5.5 6.17157 6.17157 5.5 7 5.5C7.82843 5.5 8.5 6.17157 8.5 7Z" fill="#FBD784" stroke="#0B1D26"/>
<path d="M19 14H20H21V19C21 19.5477 20.5477 20 20 20H19V21H5V20H4C3.45228 20 3 19.5477 3 19V14H5H6V13V12.25C6 11.5651 6.55037 11.0077 7.24403 11C7.43902 11.0006 7.62896 11.0452 7.80444 11.1302L7.81266 11.1341L7.82094 11.138C7.97063 11.207 8.09734 11.3002 8.18837 11.4008C8.1884 11.4008 8.18843 11.4009 8.18846 11.4009L9.5879 12.9503L9.58784 12.9503L9.59624 12.9594C9.89009 13.2768 10.2131 13.5649 10.5765 13.8192L10.8348 14H11.15H18H19ZM14.42 4.99579L14.4192 4.995L14.6271 4.78711L15.8771 3.53711C16.1392 3.27505 16.4725 3.10026 16.8304 3.03208C16.4698 3.10081 16.1387 3.27705 15.8829 3.53289L14.6329 4.78289L14.42 4.99579Z" fill="#FBD784" stroke="#0B1D26" stroke-width="2"/>
</svg>

<span>2 Ba</span>

</div>

</div>

            </div>
           <div class="tag_div">
                    <div class="tag"> Condo</div>
                </div>
          </div>
        </div>
       
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bedroom_count
{
  margin-top: 2px;
}
.bedroom_count span 
{
  padding:0px 5px;
}
.bathroom_count
{

    margin-top: 1px;
    margin-left: 10px;
}
.bathroom_count span
{
  padding:-2px 3px;
}
.count
{
  display:flex;
    padding: 22px 0px;
}
.count span
{
  font-size:12px;
  font-weight:600;
 

}
.listing_content
{
  font-family: Libre-Regular;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #0B1D26;
  margin:0px;
      text-align: left;
    margin-left: 8px;
}
.listing_title
{
  font-family: 'Libre-Regular';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 21px;
  color: #0B1D26;
  margin:0px;
}
.listing_subtitle
{
  font-family: Libre-Regular;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 34px;
display: flex;
align-items: center;
color: #0B1D26;
margin:0px;
margin-left:8px;

}
.tag_div{
    display: flex;
    position: relative;
    justify-content: flex-end;
    margin-right: auto;
}
.listing_container {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 40px;
}
.tag
{
    height:20px;
    width:100px;
    background-color: #22223a;
        position: absolute;
    margin-top: 16%;
    margin-left: 210px;
    color:#FBD784;
    font-size:12px;
    padding:2px;
    width: 70px;
    top: 115px;
}
.row {
  display: flex;
  justify-content: space-between;
}


@media (max-width: 576px) {
  .row {
    display: block;
  }
    .col {
      width: 100%;
      margin: 0 0 10px 0;
    }
  }



.card {
  display:flex;
  flex-direction: row;
    background: #ffffff;
    margin-top: 1.5rem; 
    
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.3s ease-in-out;
    max-width: 400px;
    max-height: 170px;
    width:100%;
}
    .card:hover {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .card:focus {
      -webkit-box-shadow: 0 0 0 3px #22223a, 0 0 0 4px #38beea;
      box-shadow: 0 0 0 3px #22223a, 0 0 0 5px #38beea;
      outline: none;
      border-radius: 2px;
      z-index: 1090;
      position: relative;
    }

    h2 {
        font-size: 1.25rem;
        margin: 0;
    }

    .card-content {
        padding: 1rem;
        min-height: 110px;
        padding-bottom: 2rem;
        width:100%;
    }

        p {
          color: #adacb5;
        }
          .card-content p:last-of-type {
            margin-bottom: 0;
          }
        
    .card-image{
  
 
        max-width: 100%;
    }
    .card-image svg, .card-image img {
            /* width: 100%;
            height: 100%; */
       height: auto;
    max-width: 180px;
        }
    

            
</style>