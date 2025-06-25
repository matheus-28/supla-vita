let carrinho = [];

function adicionarCarrinho(produto, preco) {
  carrinho.push({ produto, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const listaCarrinho = document.getElementById('lista-carrinho');
  listaCarrinho.innerHTML = '';

  let total = 0;
  carrinho.forEach((item, index) => {
    total += item.preco;
    const li = document.createElement('li');
    li.textContent = `${item.produto} - R$${item.preco.toFixed(2)}`;
    
    // Botão para remover item
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'X';
    btnRemover.style.marginLeft = '10px';
    btnRemover.style.background = '#e74c3c';
    btnRemover.style.color = 'white';
    btnRemover.style.border = 'none';
    btnRemover.style.borderRadius = '50%';
    btnRemover.style.width = '20px';
    btnRemover.style.cursor = 'pointer';
    btnRemover.onclick = () => {
      carrinho.splice(index, 1);
      atualizarCarrinho();
    };

    li.appendChild(btnRemover);
    listaCarrinho.appendChild(li);
  });

  document.getElementById('total').textContent = `Total: R$${total.toFixed(2)}`;
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }
  alert('Compra finalizada com sucesso! Obrigado.');
  carrinho = [];
  atualizarCarrinho();
}

function enviarFormulario() {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return false;
  }

  alert(`Obrigado pelo contato, ${nome}! Responderemos em breve.`);
  document.querySelector('form').reset();
  return false; // para não recarregar a página
}
