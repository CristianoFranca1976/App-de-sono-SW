function atualizarHoraMinuto() {
  const agora = new Date();
  const hora = agora.getHours();
  const minuto = agora.getMinutes();

  const horaMinutoTexto = `${hora < 10 ? '0' : ''}${hora}:${minuto < 10 ? '0' : ''}${minuto}`;
  document.getElementById('TimeBox').innerText = ` ${horaMinutoTexto}`;
}


atualizarHoraMinuto();


setInterval(atualizarHoraMinuto, 60000);


let troca = false;

function moverRetangulo(retangulo) {
  const todosRetangulos = document.querySelectorAll('#Carousel, #Carousel1');

  const indexRetangulo = Array.from(todosRetangulos).indexOf(retangulo);
  const proximoRetangulo = todosRetangulos[indexRetangulo + 1] || todosRetangulos[0];

  if (troca) {
    
    setTimeout(() => {
      retangulo.style.display = 'none';
      proximoRetangulo.style.transform = 'translateY(0)';
      proximoRetangulo.style.marginTop = '5.5px';
      proximoRetangulo.style.width = '201px';
      proximoRetangulo.style.marginLeft = '0';
    }, 100);

    
    setTimeout(() => {
      retangulo.style.display = 'flex';
      proximoRetangulo.style.transform = 'translateY(0)';
      proximoRetangulo.style.marginTop = '0';
      retangulo.style.marginLeft = '15.5px';
      retangulo.style.width = '174px'; // ta certo
    }, 1000);

    troca = false;
  } else {
    
    setTimeout(() => {
      proximoRetangulo.style.display = 'none';
      retangulo.style.transform = 'translateY(0)';
      retangulo.style.marginTop = '0px';
      retangulo.style.width = '174px';
      retangulo.style.marginLeft = '15.5px';
    }, 100);

    
    setTimeout(() => {
      proximoRetangulo.style.display = 'flex';
      retangulo.style.transform = 'translateY(0)';
      retangulo.style.marginTop = '5.5px';
      proximoRetangulo.style.width = '201px'; // ta certo
      proximoRetangulo.style.marginLeft = '0'; // ta certo
      
      
    }, 1000);

    troca = true;
  }

  retangulo.parentNode.insertBefore(proximoRetangulo, retangulo);
}


const date = new Date();


let month = date.getMonth() + 1;
let year = date.getFullYear() % 100;



let currentDate = `SONO REM  ${month}/${year}`;

document.getElementById("text3").innerHTML = currentDate;

document.getElementById("text5").innerHTML = currentDate;



//alarm


var alarmTime;

function toggleModal() {
  var modal = document.getElementById("alarmModal");
  if (modal.style.display === "flex") {
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.position = "absolute"
    modal.style.marginLeft = "-12px"
    modal.style.marginTop = "5px"
  }
}

function setAlarm() {
  alarmTime = document.getElementById("timeInput").value;
  alert("Alarme definido para a hora: " + alarmTime);
  
}

function checkAlarm() {
  var currentTime = new Date().toLocaleTimeString('en-US', {hour12: false});
  if (currentTime === alarmTime) {
    var snoozeModal = document.getElementById("snoozeModal");
    snoozeModal.style.display = "block";
  }
}

function hideSnoozeModal() {
  var snoozeModal = document.getElementById("snoozeModal");
  snoozeModal.style.display = "none";
}

setInterval(checkAlarm, 1000);

 