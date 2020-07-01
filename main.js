try {
  var totaldiv = document
    .getElementById("showcase_main")
    .querySelectorAll(".banner");

  var totaldots = document
    .getElementById("showcase_main")
    .querySelectorAll(".bannerdot");

  var totalOfferBanner = document
    .getElementById("banner_offer")
    .querySelectorAll(".banner");

  var totalOfferDots = document
    .getElementById("banner_offer")
    .querySelectorAll(".bannerdot");

  var totalOfferBannerPaymnet = document
    .getElementById("banner_offer_payment")
    .querySelectorAll(".banner");

  var totalOfferDotsPaymnet = document
    .getElementById("banner_offer_payment")
    .querySelectorAll(".bannerdot");
} catch (err) {}

try {
  var totaldivmainbanner = document.getElementsByClassName("cards");
  // .querySelectorAll(".banner");

  var totaldotsformainbanner = document.getElementsByClassName("cards");
  // .querySelectorAll(".bannerdot");
} catch (err) {}

var activeoffer = 0;
var activepaymentoffer = 0;
var activebanner = 0;
var activemainbanner = 0;

function banner(elemforbanner, dotsforbanner, activebannerid, countToReset) {
  if (activebannerid == countToReset) {
    activebannerid = 0;
  }

  for (let i = 0; i < elemforbanner.length; i++) {
    elemforbanner[i].classList.remove("activebanner");
    dotsforbanner[i].style.background = "#ebe5e5";
  }
  elemforbanner[activebannerid].classList.add("activebanner");
  dotsforbanner[activebannerid].style.background = "gray";
  activebannerid = activebannerid + 1;
  setTimeout(() => {
    banner(elemforbanner, dotsforbanner, activebannerid, countToReset);
  }, 2000);
}
try {
  banner(totaldiv, totaldots, activebanner, 4);
  banner(totalOfferBanner, totalOfferDots, activeoffer, 3);
  banner(totalOfferBannerPaymnet, totalOfferDotsPaymnet, activepaymentoffer, 2);
} catch (err) {}
try {
  for (var l = 0; l < totaldivmainbanner.length; l++) {
    banner(
      totaldivmainbanner[l].querySelectorAll(".banner"),
      totaldotsformainbanner[l].querySelectorAll(".bannerdot"),
      activemainbanner,
      5
    );
  }
} catch (err) {}
