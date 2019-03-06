function nameValidation(){
    let name= document.getElementById('name').value;
    let nameError=document.getElementById('nameError');
    if(name.length==0){
        printMessage("Name is required!" ,"nameError","red");
        return false; 
    }
    if(name.length<3){
        printMessage("Not a valid Name!","nameError","red");
        return false; 
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        printMessage("First name and Last name Please","nameError","red");
        return false;
    }
    printMessage(" ","nameError","green");
    return true; 

}
// chekcing the phone number if it is valid. 
function phoneValidation(){
    let phone=document.getElementById('phone').value;
    let phoneError=document.getElementById('phoneError');
    if(phone.length==0){
        printMessage("Phone No can not be empity","phoneError","red");
        return false; 
    }

    if(!phone.match(/^[0-9]{4}\s[0-9]{3}\s[0-9]{3}$/)){
        printMessage("Invalid phone No","phoneError","Red");
        return false; 
    }
    printMessage(" ","phoneError","green");
        return true;
}

//  email validation
function emailValidation(){
    let email=document.getElementById('email').value;
    let emailError=document.getElementById('EmailError');
    if(email.length==0){
        printMessage("Email is required!","emailError","red");
        return false; 
    }
    if(!email.match(/^[A-Za-z0-9.-_]@[A-Za-z]*[\.][A-Za-z]{2,3}$/)&
    !email.match(/^[A-Za-z0-9.-_]*[a-zA-Z]*[\.][A-Za-z]{2,4}[\.][A-Za-z]{3}[\.][A-Za-z]{2,3}$/)& !email.match(/^[A-Za-z-._]*[@][a-zA-Z]*[/.][A-Za-z]{2,4}[/.][a-zA-Z]{2}$/)
    &!email.match(/^[A-Za-z]*[.][a-zA-Z]*[@][a-zA-Z]*[.]{1}[a-zA-Z]{3}$/)){
        printMessage("Not valid email address","emailError","red");
        return false; 
    }

    printMessage("","emailError","red");
    return true;
}
//  validating the message box. 
function messageValidation(){
    let message = document.getElementById('message').value;
    let require= 40; 
    let left= (require-message.length);

    if(left>0){
        printMessage(left +" chracters are required","msg","red");
        return false;
    }

    printMessage(" ","msg","green");
    return true; 
}

// this fucntion is common function which will be called in every validation
function printMessage(message,location, color){
    document.getElementById(location).innerHTML=message;
    document.getElementById(location).style.color=color;  
}

// more function for the remember me part goes here