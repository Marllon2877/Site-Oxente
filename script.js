function abrirSite() {
    document.getElementById('curtain').style.display = 'none';
    document.getElementById('conteudo').classList.remove('oculto');
  }
  
  function respostaSim() {
    window.location.href = "https://wa.me/5582988059501?text=Eu%20aceito%20ser%20sua%20namorada%2C%20amor%21%20%F0%9F%92%96";
  }
  
  function respostaNao() {
    alert("Tem certeza? Dá mais uma olhadinha nesse site feito só pra você...");
  }