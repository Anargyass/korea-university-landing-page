  let lastScrollY = window.scrollY;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scroll ke bawah → sembunyikan navbar
    header.classList.add("hide");
  } else {
    // Scroll ke atas → tampilkan navbar
    header.classList.remove("hide");
  }
  lastScrollY = window.scrollY;
});



function toggleMenu() {
  const menu = document.querySelector(".nav-links");
  menu.classList.toggle("active");
}





// ini efek fade in biar keren


window.addEventListener("scroll", function () {
  const kotak = document.querySelector(".kotak-we-are");
  const posisi = kotak.getBoundingClientRect().top;
  const tinggiLayar = window.innerHeight;

  if (posisi < tinggiLayar - 100) {
    kotak.classList.add("show");
  }
});

window.addEventListener("scroll", function () {
  const kotak = document.querySelector(".isi");
  const posisi = kotak.getBoundingClientRect().top;
  const tinggiLayar = window.innerHeight;

  if (posisi < tinggiLayar - 100) {
    kotak.classList.add("show");
  }
});

window.addEventListener("scroll", function () {
  const kotak = document.querySelector(".hero-content2");
  const posisi = kotak.getBoundingClientRect().top;
  const tinggiLayar = window.innerHeight;

  if (posisi < tinggiLayar - 100) {
    kotak.classList.add("show");
  }
});

