/*Podemos simplificar a declaração das props colocando as propriedades entre chaves */
function Pessoa({nome, foto, idade, profissao}) {
    return (
        <div>
            {/* Conseguimos criar várias props */}
            <h2>Nome: {nome}</h2>
            <img src={foto} alt="Minha foto" />
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}
export default Pessoa