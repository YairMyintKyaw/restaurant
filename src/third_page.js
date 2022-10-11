export default function createThirdPage(){
    const element= document.createElement("div");
    element.classList.add("thirdPage");
    
    element.append(createContact("Email","yemyintkyaw241220@gmail.com"),
                    createContact("Phone number","+1299345673","+0988765544"),
                    createContact("Facebook","Hiro\'s Food Restaurant"),
                    createContact("Instagram","Hiro\'s Food Restaurant"))

    return element;
}

function createContact(type,...contact){
    const element = document.createElement("div");
    const header = document.createElement("h2");
    header.textContent=type;
    element.append(header)
    contact.forEach((contact)=>element.innerHTML+=contact+"<br>")
    return element;
}