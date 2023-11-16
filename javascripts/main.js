//https://www.pepsi.com/en-us/refresh082123/media/PEPSI_2023_PR_Sizzle_1920px_trimmed.mp4
//https://www.pepsi.com/en-us/refresh082123/media/PEPSI_2023_PR_Sizzle_1920px_trimmed.mp4

   const menu=document.querySelector('#menu')
   menu.innerHTML=
   `
   <ul class="list">
    <li class="list-item"><img src="image/logo.png" alt=""></li>
    <li class="list-item"><span>VIEW PRODUCT</span></li>
    <li class="list-item"><p>#PEPSI125</p></li>
</ul>
   `
const background=document.querySelector('#background')
   background.innerHTML=
   `
   <video src="https://www.pepsi.com/en-us/refresh082123/media/PEPSI_2023_PR_Sizzle_1920px_trimmed.mp4" autoplay="true" loop="true" playsinline="true" muted="true"></video>
   `

  const pepsi125=document.querySelector('#pepsi125')
  pepsi125.innerHTML=
  `
  <div class="header">
  <h2>CELEBRATING 125 YEARS</h2> 
  <h3>OF PEPSI FOR 125 DAYS.</h3>
  <button>FOLLOW ALONG</button>
</div>
<img src="image/background1.png" alt="">
<video type="video/mp4" src="https://www.pepsi.com/en-us/refresh082123/media/Titan_TR_Digital_30_PETD3091000H_CreativeX_sm.mp4" autoplay="true" loop="true" playsinline="true" muted="true"></video>
  `
   
   slider.innerHTML=
   `
   <div class='sliderContainer container-fluid d-flex flex-column align-items-center ' style="background:#000 ;color:#1636ff">
     <h1 class='display-5 my-lg-4' style=" font-family: 'Roboto',sans-serif; font-weight:bold">STAY ON THE PULSE. FOLLOW PEPSI.</h1>
     <div class=' imgList row mb-lg-5 ' style='height:auto ;  width:90% ;border:3px solid #1636ff' >
    
   <div class="col-lg-2 imgItems">   <img  src= "image/background2.png"/></div>
   <div class="col-lg-2 imgItems">   <img  src= "image/background3.png"/></div>
   <div class="col-lg-2 imgItems">   <img  src= "image/background4.png"/></div>
   <div class="col-lg-2 imgItems">   <img  src= "image/background5.png"/></div>
   <div class="col-lg-2 imgItems">   <img  src= "image/background6.png"/></div>
   <div class="col-lg-2 imgItems">   <img  src= "image/backgroung7.png"/></div>
     </div>
   </div>
   `
   const footer = document.querySelector('#footer')
   footer.innerHTML=
   `
   <div class='footerContainer  row d-flex align-items-center' style="height:200px;color:white; background:#0025ff;width:100%;margin:0">
       <div class='logo col-xl-2 d-flex align-items-center' >
         <img src='image/logo.png'/>
       </div>
       <div class=' col-xl-2 d-flex align-items-center flex-column justify-content-center'>
         <p> CONTACT US </p>
         <p>TERMS & CONDITIONS</p>
         <p>PRIVACY POLICY</p>
       </div>
       <div class='col-xl-2 d-flex align-items-center flex-column justify-content-center'>
        <p>COPYRIGHT</p>
        <p>PRODUCT FACTS</p>
        <p> STORE LOCATOR</p>
       </div>
       <div class='col-xl-2 d-flex align-items-center flex-column justify-content-center'>
       <p>SERVE PEPSI</p>
       <p>ABOUT OUR ADS</p>
       <p> CAREERS</p>
       </div>
       <div class='col-xl-2 d-flex align-items-center justify-content-center mx-sm-5'>
       <i class='bx bxl-instagram display-4 mx-xl-4'></i>
       <i class='bx bxl-facebook display-4 mx-xl-4' ></i>
       <i class='bx bxl-youtube display-4 mx-xl-4' ></i>
       <i class='bx bxl-tiktok display-4 mx-xl-4' ></i>
       </div>
   </div>
   `