import brewCoffee from "../images/coffee/brew-coffee.jpg";
import icedBrewCoffee from "../images/coffee/iced-brew-coffee.jpg";
import espresso from "../images/coffee/espresso.jpg";
import americano from "../images/coffee/americano.jpg";
import icedAmericano from "../images/coffee/iced-americano.jpg";
import macchiato from "../images/coffee/macchiato.jpg";
import icedMacchiato from "../images/coffee/iced-macchiato.jpg";
import latte from "../images/coffee/latte.jpg";
import icedLatte from "../images/coffee/iced-latte.jpg";
import mocha from "../images/coffee/mocha.jpg";
import icedMocha from "../images/coffee/iced-mocha.jpg";
import pumpkinLatte from "../images/coffee/pumpkin-latte.jpg";
import roseLatte from "../images/coffee/rose-latte.jpg";
import greenTeaLatte from "../images/coffee/green-tea-latte.jpg";

export const menuItemDetails = [
  {
    id: 0,
    hotImgSrc: brewCoffee,
    hotImgAlt: "Photo of hot brew coffee",
    icedImgSrc: icedBrewCoffee,
    icedImgAlt: "Photo of iced brew coffee",
    name: "Brew Coffee",
    priceHot: "2.75",
    priceIced: "3.25",
    seasonal: false,
  },
  {
    id: 1,
    hotImgSrc: espresso,
    hotImgAlt: "Photo of hot espresso",
    icedImgSrc: espresso,
    icedImgAlt: "Photo of iced espresso",
    name: "Espresso",
    priceHot: "3",
    priceIced: null,
    seasonal: false,
  },
  {
    id: 2,
    hotImgSrc: americano,
    hotImgAlt: "Photo of hot americano",
    icedImgSrc: icedAmericano,
    icedImgAlt: "Photo of iced americano",
    name: "Americano",
    priceHot: "3.5",
    priceIced: "4",
    seasonal: false,
  },
  {
    id: 3,
    hotImgSrc: macchiato,
    hotImgAlt: "Photo of hot macchiato",
    icedImgSrc: icedMacchiato,
    icedImgAlt: "Photo of iced macchiato",
    name: "Macchiato",
    priceHot: "4",
    priceIced: "4.5",
    seasonal: false,
  },
  {
    id: 4,
    hotImgSrc: latte,
    hotImgAlt: "Photo of hot latte",
    icedImgSrc: icedLatte,
    icedImgAlt: "Photo of iced latte",
    name: "Latte",
    priceHot: "4.5",
    priceIced: "5",
    seasonal: false,
  },
  {
    id: 5,
    hotImgSrc: mocha,
    hotImgAlt: "Photo of hot mocha",
    icedImgSrc: icedMocha,
    icedImgAlt: "Photo of iced mocha",
    name: "Mocha",
    priceHot: "5",
    priceIced: "5.5",
    seasonal: false,
  },
  {
    id: 6,
    hotImgSrc: pumpkinLatte,
    hotImgAlt: "Photo of hot pumpkin latte",
    icedImgSrc: pumpkinLatte,
    icedImgAlt: "Photo of hot pumpkin latte",
    name: "Pumpkin Latte",
    priceHot: "5.5",
    priceIced: null,
    seasonal: true,
  },
  {
    id: 7,
    hotImgSrc: greenTeaLatte,
    hotImgAlt: "Photo of hot green tea latte",
    icedImgSrc: greenTeaLatte,
    icedImgAlt: "Photo of hot green tea latte",
    name: "Green Tea Latte",
    priceHot: "5.5",
    priceIced: null,
    seasonal: true,
  },
  {
    id: 8,
    hotImgSrc: roseLatte,
    hotImgAlt: "Photo of hot rose latte",
    icedImgSrc: roseLatte,
    icedImgAlt: "Photo of hot rose latte",
    name: "Rose Latte",
    priceHot: "5.5",
    priceIced: null,
    seasonal: true,
  },
];
