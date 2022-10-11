import cake from "./Img/cake.jpg";
import  breakfast from "./Img/breakfast.jpg";
import palartr from "./Img/palartr.jpg";
import salad from "./Img/salad.jpg";

export default function createSecondPage(){
    const container = document.createElement("div");
    container.classList.add("secondPage");

    container.append(createDishElement(cake,"Cake","$70"),
                    createDishElement(breakfast,"Breakfast","$80"),
                    createDishElement(palartr,"Palartar","$40"),
                    createDishElement(salad,"Salad","$70"))       

    return container;
}

function createDishElement(img,name,price){
    const element = document.createElement("div");
    const image = document.createElement("img");
    image.src=img;
    element.append(image);
    element.append(`${name} ${price}`)
    return element;
}
