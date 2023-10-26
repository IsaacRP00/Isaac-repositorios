
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");
const img9 = document.getElementById("img9");
const img10 = document.getElementById("img10");
const img11 = document.getElementById("img11");
const img12 = document.getElementById("img12");
const img13 = document.getElementById("img13");
const img14 = document.getElementById("img14");
const img15 = document.getElementById("img15");
const imagePopup = document.getElementById("image-popup");
const popupImage = document.getElementById("popup-image");
const closeButton = document.getElementById("close-button");


img1.addEventListener("click", function() {
    popupImage.src = "img/4791c41f61017661f83d23d159117001.webp";
    imagePopup.style.display = "block";
});

img2.addEventListener("click", function() {
    popupImage.src = "background-image: url(img/1307038.wbp.webp);";
    imagePopup.style.display = "block";
});

img3.addEventListener("click", function() {
    popupImage.src = "img/deku_vs_muscular_by_kangjason_de50nrm-fullview.webp";
    imagePopup.style.display = "block";
});

img4.addEventListener("click", function() {
    popupImage.src = "img/all-might-vs-all-for-one-1200x1200-1.webp";
    imagePopup.style.display = "block";
});

img5.addEventListener("click", function() {    
    popupImage.src = "img/EOCSjILU4AAugw_.webp";    
    imagePopup.style.display = "block";
});

img6.addEventListener("click", function() {
    
    popupImage.src = "img/Episode_72.webp";
    
    imagePopup.style.display = "block";
});

img7.addEventListener("click", function() {    
    popupImage.src = "img/Gigantomachia_is_crying.webp";    
    imagePopup.style.display = "block";
});

img8.addEventListener("click", function() {    
    popupImage.src = "img/Izuku_vs_Shoto.webp)";    
    imagePopup.style.display = "block";
});

img9.addEventListener("click", function() {  
    popupImage.src = "img/maxresdefault.webp";
    imagePopup.style.display = "block";
});

img10.addEventListener("click", function() {   
    popupImage.src = "img/images.webp";   
    imagePopup.style.display = "block";
});

img11.addEventListener("click", function() {  
    popupImage.src = "img/portada_my-hero-academia-103.webp";   
    imagePopup.style.display = "block";
});

img12.addEventListener("click", function() {  
    popupImage.src = "img/one-piece-64c5292174c91.webp";  
    imagePopup.style.display = "block";
});

img13.addEventListener("click", function() {    
    popupImage.src = "img/one-piece-933-portada.webp";    
    imagePopup.style.display = "block";
});

img14.addEventListener("click", function() {    
    popupImage.src = "iimg/cuales-son-los-ataques-de-luffy.webp";    
    imagePopup.style.display = "block";
});

img15.addEventListener("click", function() {    
    popupImage.src = "img/ua.png";    
    imagePopup.style.display = "block";
});

closeButton.addEventListener("click", function() {
    imagePopup.style.display = "none";
});

const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.style.bottom = '0';
    } else {
        menu.classList.add('hidden');
        menu.style.bottom = '-200px';
        
    }
});
