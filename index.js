const consultBtn = document.getElementById("consult-btn");
const consultDiv = document.getElementById("consult-div");

consultBtn.addEventListener("click", () => {
  consultDiv.classList.toggle("active");
  sertificateSlider.classList.remove("active");
  marafonDiv.classList.remove("active");
  discountDiv.classList.remove("active");
  kursDiv.classList.remove("active");
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

const sertificateBtn = document.getElementById("sertificate-btn");
const sertificateSlider = document.getElementById("slider");

sertificateBtn.addEventListener("click", () => {
  sertificateSlider.classList.toggle("active");
  consultDiv.classList.remove("active");
  marafonDiv.classList.remove("active");
  discountDiv.classList.remove("active");
  kursDiv.classList.remove("active");
});

const marafonBtn = document.getElementById("marafon-btn");
const marafonDiv = document.getElementById("marafon-div");

marafonBtn.addEventListener("click", () => {
  marafonDiv.classList.toggle("active");
  sertificateSlider.classList.remove("active");
  consultDiv.classList.remove("active");
  discountDiv.classList.remove("active");
  kursDiv.classList.remove("active");
});

const discountBtn = document.getElementById("discount-btn");
const discountDiv = document.getElementById("discount-div");

discountBtn.addEventListener("click", () => {
  discountDiv.classList.toggle("active");
  marafonDiv.classList.remove("active");
  sertificateSlider.classList.remove("active");
  consultDiv.classList.remove("active");
  kursDiv.classList.remove("active");
});

const kursBtn = document.getElementById("kurs-btn");
const kursDiv = document.getElementById("kurs-div");

kursBtn.addEventListener("click", () => {
  kursDiv.classList.toggle("active");
  marafonDiv.classList.remove("active");
  sertificateSlider.classList.remove("active");
  consultDiv.classList.remove("active");
  discountDiv.classList.remove("active");
});

document.getElementById("date").innerHTML = new Date().getFullYear();
