interface Tarefa {
    _id: string,
    descricao: string
}


const mural = document.querySelector('.mural');

fetch('http://localhost:3000/tarefas')
    .then(response => response.json())
    .then(tarefas => {
        tarefas.forEach((tarefa: Tarefa) => {
            const cartao = document.createElement('div');
            cartao.classList.add('cartao');
            cartao.id = `cartao${tarefa._id}`;
            cartao.innerHTML = `
                <p class="cartao__conteudo">${tarefa.descricao}</p>
            `;
            mural?.appendChild(cartao);
        });

    });

// Element
// HTMLElement
// HTMLInputElement

const busca: HTMLInputElement | null = document.querySelector('.cabecalho__busca');
busca?.addEventListener('input', function () {
    const digitado = busca.value.toLowerCase();

    const cartoes: NodeListOf<HTMLElement> = document.querySelectorAll('.cartao');

    cartoes.forEach(function(cartao) {
        const textoCartao = cartao.textContent?.toLowerCase() || "";
    
        if (textoCartao.includes(digitado)) {
            cartao.style.display = 'block';
        } else {
            cartao.style.display = 'none';
        }
    });

});

