const btn = document.getElementById("btn-js")
const mensagem = document.getElementById("mensagem")


function addMensage() {

  btn.addEventListener("click", () => {
   mensagem.innerText= "Bem vindo, espero que curta! 🤖"
   mensagem.classList = "ativo"
  })
}


addMensage()
