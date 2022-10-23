const messages = document.querySelectorAll('.message');
const notifications = document.querySelectorAll('.notificaionCls');
let counterOfNotifications = notifications.length;
const indicator = document.querySelectorAll('.dot');
const counter= document.querySelector('.count');
const markAllAsRead = document.querySelector('.markasreadcls');
counter.innerText=counterOfNotifications;
function displayMessages(){
    for (let i = 0; i <messages.length; i++) {
        if(messages[i].innerText==""){
            //alert("empty");
            messages[i].style.display="none";
        }
        else{
            //alert("co");
            messages[i].style.display="block";
        }      
    } 
}
for (let i = 0; i < notifications.length; i++) {
    notifications[i].addEventListener('click',()=>{
        indicator[i].style.display="none";
        counterOfNotifications--;
        counter.innerText=counterOfNotifications;
    })
    
}
markAllAsRead.addEventListener('click',()=>{
    for (const dot of indicator) {
        dot.style.display="none";
        counter.innerText=0;
    }
})
