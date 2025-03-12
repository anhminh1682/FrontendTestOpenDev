// HEADER
let body = document.querySelector("body");
let header = document.querySelector("header>div");

body.onscroll = () => {
  if (window.scrollY == 0) {
    header.style.backgroundColor = "transparent";
  } else {
    header.style.backgroundColor = "#292929cc";
  }
};

// HERO BANNER
let bannerSlides = [
  {
    bgClass: "bg-hero-1",
    heading: "GO-KARTS",
    content:
      "Enjoy an adrenaline ride in any weather. Outdoor track and indoor hall at a professional level with Sodi go-karts.",
    linkButton: "#",
  },
  {
    bgClass: "bg-hero-2",
    heading: "JUMPARENA",
    content:
      "Aréna se spoustou atrakcí pro děti i dospělé všech věkových kategorií. Trampolíny, lezecká stěna, ninja dráha a další atrakce.",
    linkButton: "#",
  },
  {
    bgClass: "bg-hero-3",
    heading: "Virtuální realita",
    content:
      "Díky naší virtuální realitě vstoupíte do jiného světa a poznáte nové technologie. Vyberte si z naší nabídky her a zažijte VR na vlastní kůži.",
    linkButton: "#",
  },
  {
    bgClass: "bg-hero-4",
    heading: "MULTIBALL",
    content:
      "Interaktivní sportovní a herní konzole, která z pohybu a vzdělávání dělá opravdovou zábavu. Velké množství her zaujme všechny věkové kategorie.",
    linkButton: "#",
  },
  {
    bgClass: "bg-hero-5",
    heading: "Laserová střelnice",
    content:
      "Vyzkoušejte si nebo vypilujte svou mušku! Laserová střelnice se třemi režimy střelby na čas otestuje nejen vaši přesnost, ale také rychlost a postřeh.",
    linkButton: "#",
  },
];

function openSlide(index) {
  let listDotItems = document.querySelectorAll(".dot-item");
  let bgImg = document.querySelector(".bg-img-banner");
  let titleBanner = document.querySelector(".title-banner");
  let contentBanner = document.querySelector(".content-banner");
  let btnLink = document.querySelector(".btn-link-banner");

  Array.from(listDotItems).forEach((el) => {
    el.classList.remove("active");
  });

  listDotItems[index].classList.add("active");

  bannerSlides.forEach((el) => {
    let isContain = bgImg.classList.contains(el.bgClass);
    if (isContain) {
      bgImg.classList.remove(el.bgClass);
    }
  });

  bgImg.classList.add(bannerSlides[index].bgClass);
  titleBanner.textContent = bannerSlides[index].heading;
  contentBanner.textContent = bannerSlides[index].content;
  btnLink.href = bannerSlides[index].linkButton;
}

setInterval(() => {
  let listDotItems = document.getElementsByClassName("dot-item");
  let dotActive = document.querySelector(".dot-item.active");
  let index = Number(dotActive.getAttribute("data-index"));

  if (index === listDotItems.length - 1) {
    index = 0;
  } else index++;

  openSlide(index);
}, 3000);

// END HERO BANNER

// NEW ENTERTAINMENT CENTRE NEAR CHEB
function openVideo() {
  let video = document.getElementById("videoEntertainmentCenter");
  let bgVideo = document.querySelector("#videoEntertainmentCenter + img");
  let btn = document.querySelector(".btn-play-video");

  bgVideo.style.display = "none";
  btn.style.display = "none";
  video.play();
}

// END NEW ENTERTAINMENT CENTRE NEAR CHEB

// OUR ATTRACTIONS
function openTab(e, tabId) {
  let tabContents = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  let tabLinks = document.getElementsByClassName("tablinks");
  console.log(tabLinks);
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(
      " tablinks-active",
      ""
    );
  }

  document.getElementById(tabId).style.display = "block";
  e.currentTarget.className += " tablinks-active";
}

// END OUR ATTRACTIONS
