//https://www.pepsi.com/en-us/refresh082123/media/PEPSI_2023_PR_Sizzle_1920px_trimmed.mp4
//https://www.pepsi.com/en-us/refresh082123/media/PEPSI_2023_PR_Sizzle_1920px_trimmed.mp4
const dataSlider = [

  "image/backgroundSlider2.jpg",
  "image/backgroundSlider3.jpg",
  "image/backgroundSlider4.jpg",
  "image/backgroundSlider5.jpg",
  "image/backgroundSlider6.jpg",
  "image/backgroundSlider7.jpg",
  "image/backgroundSlider8.jpg",
  "image/backgroundSlider9.jpg",
  "image/backgroundSlider10.jpg",
  "image/backgroundSlider11.jpg",
  "image/backgroundSlider12.jpg",
  "image/backgroundSlider13.jpg",
  "image/backgroundSlider14.jpg",
  "image/backgroundSlider15.jpg",
  "image/backgroundSlider16.jpg",
  "image/backgroundSlider17.jpg",
  "image/backgroundSlider18.jpg",
  "image/backgroundSlider19.jpg",
]

const dataWave=[
  "image/pepsi.png",
  "image/pepsimango.png",
  "image/pepsinitro.png",
  "image/pepsinitrovanilla.png",
  "image/pepsiwildcherry.png",
  "image/pepsizero.png",

]
const wave = document.querySelector('.wave');
const waveContainer=document.querySelector('.waveContainer')



if(wave!==null&&waveContainer!==null){


waveContainer.innerHTML=dataWave.map((data)=>(`<div class="col-md-2 overflow-hidden p-0 imgList dataList dataWave h-100"  ><img src="${data}" class="img-fluid p-0 dataItems overflow-hidden w-100
h-100"/></div>`)).join("")
}
const data=document.querySelector('.data')
if(data!==null){
  data.innerHTML=dataSlider.map((data)=>(`<div class="col-md-2 overflow-hidden p-0 imgList dataList" ><img src="${data}" class="img-fluid p-0 dataItems"/></div>`)).join("")
}



const menu = document.querySelector('#menu')
if (menu !== null) {
  menu.innerHTML =
    `
   <ul class="list position-relative d-flex p-0 m-auto align-items-center justify-content-start">
    <li class="list-item mx-sm-3 text-center d-flex align-items-center"><img src="image/logo.png" alt=""></li>
    <li class="list-item mx-sm-3 active text-center d-flex align-items-center"><span class="align-middle">VIEW PRODUCT</span>
    </li>
    <li class="list-item mx-sm-3 text-center d-flex align-items-center"><a class="align-middle" href="pepsi125.html">#PEPSI125</a></li>
</ul>
`
}


const background = document.querySelector('#background')
if (background !== null) {
  background.innerHTML =
    `
   <video class="embed-responsive-item h-100 w-100" src="https://www.pepsi.com/en-us/refresh082123/media/PEPSI_2023_PR_Sizzle_1920px_trimmed.mp4" autoplay="true" loop="true" playsinline="true" muted="true"></video>
   `


}
const pepsi125 = document.querySelector('#pepsi125')
if (pepsi125 !== null) {
  pepsi125.innerHTML =
    `
<div class="header w-100 h-50 text-center d-flex flex-column align-items-center ">
<h2 class="w-100 ">CELEBRATING 125 YEARS</h2> 
<h3 class="text position-relative"><span>OF PEPSI FOR 125 DAYS.</span></h3>
<a href='pepsi125.html'><button>FOLLOW ALONG</button></a>
</div>
<img src="image/background1.png" alt="" >

<video type="video/mp4" class="w-100 h-100" src="https://www.pepsi.com/en-us/refresh082123/media/Titan_TR_Digital_30_PETD3091000H_CreativeX_sm.mp4" autoplay="true" loop="true" playsinline="true" muted="true"></video>
`
}
const pepsi125Background = document.querySelector('#pepsi125Background')
if (pepsi125Background !== null) {
  pepsi125Background.innerHTML =
    `
    <img src="image/background1.png" alt="" class="img-fluid" >
    `
}


const slider = document.querySelector('#slider')
if (slider !== null) {
  slider.innerHTML =
    `
   <div class='sliderContainer container-fluid d-flex flex-column align-items-center pb-5 ' style="background:#000 ;color:#1636ff">
     <h1 class='display-5 my-lg-4' style=" font-family: 'Roboto',sans-serif; font-weight:bold">STAY ON THE PULSE. FOLLOW PEPSI.</h1>
     <div class=' imgList row mb-lg-5 over overflow-hidden p-0' style='height:auto ;  width:90% ;border:3px solid #1636ff' >
    
   <div class="col-md-2 p-0 imgItems overflow-hidden">   <img class="img-fluid p-0"  src= "image/background2.png"/></div>
   <div class="col-md-2 p-0 imgItems overflow-hidden">   <img class="img-fluid p-0"  src= "image/background3.png"/></div>
   <div class="col-md-2 p-0 imgItems overflow-hidden">   <img class="img-fluid p-0"  src= "image/background4.png"/></div>
   <div class="col-md-2 p-0 imgItems overflow-hidden" >   <img class="img-fluid p-0"  src= "image/background5.png"/></div>
   <div class="col-md-2 p-0 imgItems overflow-hidden">   <img class="img-fluid p-0"  src= "image/background6.png"/></div>
   <div class="col-md-2 p-0 imgItems overflow-hidden">   <img class="img-fluid p-0"  src= "image/backgroung7.png"/></div>
     </div>
   </div>
   `
}


const footer = document.querySelector('#footer')
footer.innerHTML =
  `
   <div class='footerContainer  row d-flex align-items-center' style="color:white; width:100%;margin:0">
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
       <div class=' iconContainer col-xl-2 d-flex align-items-center justify-content-center mx-sm-5'>
       <i class='bx bxl-instagram display-4 mx-xl-4'></i>
       <i class='bx bxl-facebook display-4 mx-xl-4' ></i>
       <i class='bx bxl-youtube display-4 mx-xl-4' ></i>
       <i class='bx bxl-tiktok display-4 mx-xl-4' ></i>
       </div>
   </div>
   `

const activeButton = document.querySelector('.active');

activeButton.addEventListener('click', () => {
  wave.classList.toggle('show');
  if (!wave.classList.contains('show')) {
    wave.classList.add('hide');
    wave.addEventListener('animationend', () => {
      wave.classList.remove('hide');
      wave.style.display = 'none'; // Ẩn phần tử sau khi animation kết thúc
    }, { once: true });
  } else {
    wave.classList.remove('hide');
    wave.style.display = 'flex'; // Hiển thị phần tử trước khi animation bắt đầu
  }
});
