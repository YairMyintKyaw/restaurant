
import createFirstPage from "./first_page"
import createSecondPage from "./second_page";
import createThirdPage from "./third_page";
import './style.css';

const main_container = document.querySelector("#content");

//header
const header = document.createElement("div");
header.classList.add("header");
header.append("Hiro's Food restaurant");

//nav
const nav = document.createElement("div");
nav.classList.add("nav");
////nav element
const homeBtn = createElement("Home", "home");
const menuBtn = createElement("Menu","menu");
const contactBtn = createElement("Contact", "contact");

function createElement (text,className){
    const element = document.createElement("div");
    element.classList.add("navBtn");
    element.append(text);
    nav.append(element);
    
    return element;
}

//content
const content = document.createElement("div");
content.classList.add("pageContainer")
content.append(createFirstPage())

//addEvent
homeBtn.addEventListener("click",()=>{
    content.innerHTML="";
    content.append(createFirstPage())
})
menuBtn.addEventListener("click",()=>{
    content.innerHTML="";
    content.append(createSecondPage())
})
contactBtn.addEventListener("click",()=>{
    content.innerHTML="";
    content.append(createThirdPage())
})

//append
main_container.append(header,nav,content);