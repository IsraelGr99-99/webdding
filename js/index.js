//Countdown
const fecha = new Date("2024-01-18T23:59:59").getTime();

//Actualizacion de fecha
const actualizar = setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fecha - ahora;
  //Calculamos las horas y dias
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const min = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60));
  const seg = Math.floor((diferencia % (1000 * 60)) / 1000);

  //Mostrar en pantalla
  document.getElementById("dias").innerText = dias;
  document.getElementById("hr").innerText = horas;
  document.getElementById("min").innerText = min;
  document.getElementById("seg").innerText = seg;
  //Mostrar en pantalla
  if (diferencia < 0) {
    document.getElementById("dias").innerHTML =
      '<label class="text-danger">0</label>';
    document.getElementById("seg").innerHTML =
      '<label class="text-danger">0</label>';
    document.getElementById("hr").innerHTML =
      '<label class="text-danger">0</label>';
    document.getElementById("min").innerHTML =
      '<label class="text-danger">0</label>';
  }
}, 1000);

document.getElementById("play").addEventListener("click", function () {
  var miCancion = document.getElementById("miCancion");
  miCancion.play();
});
document.getElementById("pause").addEventListener("click", function () {
  var miCancion = document.getElementById("miCancion");
  miCancion.pause();
});

//formulario
const scriptURL = "https://script.google.com/macros/s/AKfycbzbefBPrTGiqKjLV2vrXInuziatWfPO33mkArwd2wAXwWNlq8sUo9ajk3IUlZkkfA8s/exec";
const form = document.forms["form-invitados"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const submitButton = form.querySelector('[type="submit"]');
  submitButton.disabled = true;

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      Swal.fire({
        title: 'Gracias por confirmar',
        icon: 'success'
      })
    )
    .then(() => {
      form.reset();
        window.location.reload();
    })
    .catch((error) => {
      console.error("Error!", error.message);

      // Habilitar el botón nuevamente después de 5 segundos
      setTimeout(() => {
        submitButton.disabled = false;
      }, 5000);
    });
});

