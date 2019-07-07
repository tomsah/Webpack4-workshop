const getFooter = () => import(
  /* webpackChunkName: "footer" */
  "./footer")
const getGSAP = () => import("gsap")
const getLodash = () => import("lodash-es")

import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";

/* eslint-disable no-unused-vars */
import css from "./footer.css";
import buttonStyles from "./button.css";
/* eslint-disable no-unused-vars */

let setButtonStyle
if(process.env.NODE_ENV === "development") {
  setButtonStyle = (color) => import(/* webpackMode: "lazy-once" */`./button-styles/${color}`)
} else {
   setButtonStyle = (color) => import(`./button-styles/${color}`)
}

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);


button.addEventListener('click', () => {
  getFooter().then(module => {
    document.body.appendChild(module.footer);
  })
  getGSAP().then((gsap) => {
   console.log(gsap)
  })
  setButtonStyle("yellow").then(styleStr => {
    button.style = styleStr.default
  })
})
document.body.appendChild(image);

