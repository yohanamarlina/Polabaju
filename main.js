
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function(){
    scrollFunction();
}

function scrollFunction(){
    if(
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ){
        mybutton.style.display = "block";
    }
    else{
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener("click", backToTop);
    function backToTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }




//Email Js Script

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'contact_form';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Terima Kasih telah memberikan saran kepada kami!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});