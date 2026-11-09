
const endereco = "http://localhost:3000/estados/SP";

async function testarAPI() {
    const resposta = await fetch(endereco);

    const dados = await resposta.json();

    console.log(dados);
}

testarAPI();
