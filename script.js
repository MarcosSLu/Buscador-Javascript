const btn = document.getElementById("btnBuscar");
const input = document.getElementById("cepInput");

btn.addEventListener("click", () => {
    const cep = input.value.trim(); // Remove espaços

    if (cep === "") {
        alert("Digite um CEP válido!");
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/` 

    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("cepResultado").textContent = `${data.cep}`
        document.getElementById("rua").textContent = `${data.logradouro}`
        document.getElementById("bairro").textContent = `Bairro: ${data.bairro}`
        document.getElementById("cidade").textContent = `Cidade: ${data.localidade}`
    }
        
    )
    .catch(error => {
        alert("Erro ao bucar esse CEP!")
    })


});
