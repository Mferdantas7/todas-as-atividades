// Função para trocar os links facilmente
function setLink(key, url) {
    document.querySelectorAll('[data-link="' + key + '"]').forEach(el => {
      el.href = url;
    });
  }
  
  // Exemplo de uso:
  // setLink("desafio-01", "https://seusite.com/desafio1");
  