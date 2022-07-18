document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)
var nome;
var email;

function validaFormulario(){
  nome = document.getElementById("nome").value;
  email = document.getElementById("email").value;
  
  if(nome != "" && email != ""){
      alert("Prontinho! Você receberá as novidades por e-mail!")
  }else{
      alert("Por favor, preencha os campos Nome e E-mail!")
  }
}
