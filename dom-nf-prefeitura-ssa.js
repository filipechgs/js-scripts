function notaAmar() {
  document.getElementById("tbDiscriminacao").innerText = "Referente à prestação de serviço de sessões de psicoterapia.";  
} 
function notaParticular(quant){
  let HTMLelement = document.getElementById("tbDiscriminacao");
  if(quant === "uma") {
    HTMLelement.innerText = "Referente a uma sessão de psicanálise.";
  } else {
    HTMLelement.innerText = "Referente a " + quant + " sessões de psicanálise.";
  }
}
//notaParticular("duas");
//notaAmar();




