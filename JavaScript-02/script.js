// Captura os elementos do HTML
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adiciona conteúdo textual ao h1 e ao link
titulo.innerText = "Bem-vindo ao Meu Projeto!";
link.innerText = "Visite a Prozeducação";

// Adiciona itens simples na lista não ordenada
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adiciona itens com links na lista ordenada
listaOrdenada.innerHTML = `
    <li><a href="https://www.google.com">Google</a></li>
    <li><a href="https://www.youtube.com">YouTube</a></li>
    <li><a href="https://www.github.com">GitHub</a></li>
`;