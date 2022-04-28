const busca = document.querySelector('.cabecalho__busca');

const mural = document.querySelector('.mural');

fetch('http://localhost:3000/tarefas')
    .then(response => response.json())
    .then(tarefas => {

        tarefas.forEach(tarefa => {
            const cartao = document.createElement('div');
            cartao.classList.add('cartao');
            cartao.id = `cartao${tarefa.id}`;
            cartao.innerHTML = `
                <p class="cartao__conteudo">${tarefa.descricao}</p>
            `;
            mural.appendChild(cartao);
        });

    });



/*
<div class="cartao">
    <p class="cartao__conteudo">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut blanditiis quis magni ipsum. Consequuntur fugit libero iure possimus necessitatibus tempore inventore, enim voluptas, incidunt accusamus praesentium ducimus magni repellendus quidem.</p>
</div>
*/

busca.oninput = function () {
    const digitado = busca.value.toLowerCase();

    const cartoes = document.querySelectorAll('.cartao');

    cartoes.forEach(function(cartao) {
        const textoCartao = cartao.textContent.toLowerCase();
    
        if (textoCartao.includes(digitado)) {
            cartao.style.display = 'block';
        } else {
            cartao.style.display = 'none';
        }
    });
    
    
}

