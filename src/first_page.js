
import restaurantImg from './Img/restaurant.jpg'

export default function createFirstPage(){
    const container = document.createElement("div");
    container.classList.add("firstPage");
    
    //first element
    const firstElement = document.createElement("div");
    firstElement.classList.add("firstElement");
    const header = document.createElement("h2");
    header.textContent="Welcome Food Lover";
    firstElement.append(header);

    //second element
    const secondElement = document.createElement("div");
    const image = document.createElement("img");
    image.src=restaurantImg;
    secondElement.append(image);

    //third element
    const thirdElement = document.createElement("div");
    const text = `
    Mon => 10am to 6pm</br>
    Tues => 10am to 6pm</br>
    Wed => 10am to 6pm</br>
    Thur => 10am to 6pm</br>
    Sat  =>  9am to 8pm
    `
    thirdElement.innerHTML=text

    //fourth element
    const fourthElement = document.createElement("div");
    fourthElement.append(
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
        of type and scrambled it to make a type specimen book.`
    )
    //append
    container.append(firstElement,secondElement,thirdElement,fourthElement);
    return container
}   

