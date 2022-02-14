let databaseSelect = document.getElementById("database-selector");
let swiperSelect = document.getElementById("swiper-selector");
let panelSelect = document.getElementById("panel-name-selector");
let hsDivs = document.getElementsByClassName("ds-specials-hybrid-swiper");

const updateDb = (db) => {
  for (let i = 0; i < hsDivs.length; i++) {
    hsDivs[i].setAttribute("fob-db", db);
  }
};
