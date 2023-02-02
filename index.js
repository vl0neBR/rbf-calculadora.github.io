function mudarEstilo() {
    var botao = document.getElementById("botao");
    botao.style.backgroundColor = "red";
    botao.style.color = "white";
  }

function calcular() {
  var folgaEncontrada =  parseFloat(document.getElementById('folgaencontrada').value)
  var pastilhaAtual = parseFloat(document.getElementById('pastilha').value)
  var manual = parseFloat(document.getElementById('manual').value)

  var result = folgaEncontrada + pastilhaAtual - manual

  document.getElementById('result').value = result




  let folgaEncontrada1 = document.getElementById('folgaencontrada').value
  let pastilhaAtual1 = document.getElementById('pastilha').value 
  let manual1 = document.getElementById('manual').value

  let errorMessage = document.getElementById('errorMessage')
  
  if (folgaEncontrada1 == "" || pastilhaAtual1 == "" || manual1 == "" ) {
    alert('Preencha Todos os Campos Antes de Calcular')
    errorMessage.style.display = "block"
  }
  else {
    errorMessage.style.display = "none"
  }

}

function apagar() {
        document.getElementById('folgaencontrada').value = ""
        document.getElementById('pastilha').value = ""
        document.getElementById('manual').value = ""
        document.getElementById('result').value = ""
}
