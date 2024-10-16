document.addEventListener('DOMContentLoaded', () => {
    console.log("Página carregada com sucesso!");

    // Criação da imagem
    const img = document.createElement('img');
    img.src = 'torii.jpg'; // Caminho da imagem
    img.alt = 'Torii';
    img.style.width = '100%'; // Ajusta a largura da imagem
    img.style.maxWidth = '600px'; // Define uma largura máxima
    img.style.display = 'block'; // Exibe a imagem como um bloco
    img.style.margin = '20px auto'; // Centraliza a imagem
    img.style.cursor = 'pointer'; // Muda o cursor para indicar que é clicável

    // Define o link para redirecionar ao clicar na imagem
    img.onclick = function() {
        window.location.href = "main.html"; // Substitua "main.html" pelo seu arquivo principal
    };

    // Adiciona a imagem ao container
    const imageContainer = document.getElementById('image-container');
    imageContainer.appendChild(img);
});



let total = 0;

function adicionarAoCarrinho(nome, preco) {
    const itensCarrinho = document.getElementById('itens-carrinho');
    const li = document.createElement('li');
    li.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
    itensCarrinho.appendChild(li);

    total += preco;
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function finalizarCompra() {
    if (total === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}`);
        // Aqui você pode adicionar lógica para redirecionar ou processar o pagamento
        document.getElementById('itens-carrinho').innerHTML = '';
        total = 0;
        document.getElementById('total').textContent = 'Total: R$ 0,00';
    }
}
