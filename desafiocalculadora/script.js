const display = document.getElementById('display');

document.querySelectorAll('.btn').forEach(botao => {
  botao.addEventListener('click', () => {
    
    // botao limpar
    if (botao.id === 'limpar') {
      display.value = '0';
      return;
    }

    // botao igual
    if (botao.id === 'calcular') {
      try {
        let conta = display.value
          .replace(/×/, '*')
          .replace(/÷/, '/')
          .replace(/−/, '-');
          
        display.value = eval(conta);
      } 
      catch {
        display.value = 'Erro';
      }
      return;
    }

    // numeros e os bagulhos
    if (display.value === '0' && botao.innerText !== '.') {
      display.value = botao.innerText;
    } 
    else {
      display.value += botao.innerText; 
    }

  });
});