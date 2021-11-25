const calcular = document.getElementById('calcular')

function imc() {
  const nome = document.getElementById('nome').value
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('resultado')

  if (nome !== '' && altura !== '' && peso !== '') {
    const valorIMC = (peso / (altura * altura)).toFixed(2) // .tofixed = quantidade depois da virgula no resultado do valorIMC.

    let classificacao = ''

    if (valorIMC < 18.5) {
      classificacao = 'TA MAGRELO EMH'
    } else if (valorIMC < 25) {
      classificacao = 'VOCE ESTA NO SHAPE EMH'
    } else if (valorIMC < 30) {
      classificacao = 'VOCE ESTA GORDAO EMH'
    } else if (valorIMC < 35) {
      classificacao = 'voce esta UM PUCO MAIS MAGRO que o pericles'
    } else if (valorIMC < 40) {
      classificacao = 'voce esta QUASE CHENGANO AO PESO do pericles'
    } else {
      classificacao = 'voce esta NO MESMO PESO que o pericles'
    }
    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacao}`
  } else {
    resultado.textContent = 'não sabe olhar ? preenche tudo que ta ai tio'
  }
}

calcular.addEventListener('click', imc) // addeventlistener = adicionar um evento ao cliclar na função imc e fazer o que essa função pede.
