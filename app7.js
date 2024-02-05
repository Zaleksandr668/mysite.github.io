const form = document.querySelector("form");

const make = document.getElementById("make");
const model = document.getElementById("model");
const year = document.getElementById("year");
const engine = document.getElementById("engine");
const torque = document.getElementById("torque");
const power = document.getElementById("power");
const one_hundred = document.getElementById("one_hundred");
const speed = document.getElementById("speed");



function sendEmail() {
  
  const bodyMessage = `Make: ${make.value}<br> Model: ${model.value}<br> Year: ${year.value}<br> Engine: ${engine.value}<br> Torque: ${torque.value}<br> Power: ${power.value}<br> 0-100: ${one_hundred.value}<br> Top speed: ${speed.value}`;
  
  Email.send({
        //SecureToken : "c786c3bd-400f-456e-8408-0864bf56ec9d",
        Host : "smtp.elasticemail.com",
        Username : "zaleksandr668@gmail.com",
        Password : "AE36A69FA31F4B9B20359EF4A93832720D2C",
        To : 'zaleksandr668@gmail.com',
        From : "zaleksandr668@gmail.com",
        Subject : "[Request from form]",
        Body : bodyMessage
    }).then(
        message => {
          if (message == "OK"){
            Swal.fire({
              title: "SUCCESS",
              text: "Request was sent!",
              icon: "success"
            });
          }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})