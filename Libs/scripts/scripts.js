let app 

(function (app){

function start(){
    
    let title=document.title; 
    switch(title){
        case "Home":
        console.log(title);
        break; 
        case "AboutUs":
        console.log(title);
        break; 
        case "Services":
        console.log(title);
        break; 
        
        case "ContactUs":
        console.log(title);
        break; 
        
        default:
        break; 
    }
}
window.addEventListener("load", start);

}( app || (app={})))