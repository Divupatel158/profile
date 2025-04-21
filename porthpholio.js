let items = document.querySelectorAll('.blog-slider .b-list .b-item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let pdrop = document.getElementsByClassName('p-drop');
let wdrop = document.getElementsByClassName('w-drop');
let sendbtn = document.getElementById('send');
let countitem= items.length;
let itemActive= 0;
let screenLog = document.querySelector("#screen-log");
        document.addEventListener("mousemove", logKey);
function logKey(e) {
  screenLog.style= `top: ${e.clientY+2}px; left: ${e.clientX-8}px`;
}
next.onclick= function(){
    itemActive=itemActive+1;
    if(itemActive>=countitem){
        itemActive= 0;
        console.log(itemActive);
    }
    showSlider();
}
prev.onclick= function(){
    itemActive=itemActive-1;
    if(itemActive<0){
        itemActive= countitem-1;
    }
    showSlider();
}
function showSlider(){
    let itemActiveOld= document.querySelector('.blog-slider .b-list .b-item.active');
    itemActiveOld.classList.remove('active');
    items[itemActive].classList.add('active');
}setInterval(()=>{
    itemActive = itemActive+1;
    if(itemActive>=countitem){
        itemActive= 0;
    }
    showSlider();
},10000);

sendbtn.onclick= function(){
    var namee= document.getElementById('name').value;
    var email= document.getElementById('email').value;
    var phone= document.getElementById('phone').value;
    var message= document.getElementById('message').value;
    var body="Name : " + namee + "<br/>"+" Email : " + email + "<br/>"+" Phone : " + phone + "<br/>"+" Message : " + message;
    console.log(body);
    Email.send({
        SecureToken:"4e68896e-1ce2-4929-9a19-fe5a5a10262b",
        To : 'divupatel0158@gmail.com',
        From : "divupatel0158@gmail.com",
        Subject : phone,
        Body : body
    }).then(
      message =>{
        if(message.Success){
            console.log("Message sent successfully");
            alert("Message sent successfully");
        }
        else{
            console.log("Error sending message");
            alert("Error sending message");
            throw console.error();   
        }
      }
    );
}