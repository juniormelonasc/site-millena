function atualizarContador() {
    const inicio = new Date("2024-08-04T02:00:00");
    const agora = new Date();
    const diferenca = agora - inicio;
  
    const segundos = Math.floor(diferenca / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
  
    const restoHoras = horas % 24;
    const restoMinutos = minutos % 60;
    const restoSegundos = segundos % 60;
  
    const texto = `${dias} dias, ${restoHoras} horas, ${restoMinutos} minutos e ${restoSegundos} segundos ⏳`;
    document.getElementById("tempo").textContent = texto;
  }
  
  setInterval(atualizarContador, 1000);
  atualizarContador();
  

  function atualizarContadorRegressivo() {
    const destino = new Date("2025-07-04T08:10:00");
    const agora = new Date();
    const diferenca = destino - agora;
  
    if (diferenca <= 0) {
      document.getElementById("contador-regressivo").textContent = "Chegou o grande momento! 🎉";
      return;
    }
  
    const segundos = Math.floor(diferenca / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
  
    const restoHoras = horas % 24;
    const restoMinutos = minutos % 60;
    const restoSegundos = segundos % 60;
  
    const texto = `${dias} dias, ${restoHoras} horas, ${restoMinutos} minutos e ${restoSegundos} segundos ⏳`;
    document.getElementById("contador-regressivo").textContent = texto;
  }
  
  setInterval(atualizarContadorRegressivo, 1000);
  atualizarContadorRegressivo();
  