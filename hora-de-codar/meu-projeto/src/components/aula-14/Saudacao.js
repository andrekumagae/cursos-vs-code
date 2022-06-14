export default function Saudacao({nome}){
    /*Estrutura if caso receber o valor nome do arquivo Seunome
    e chamamos a função gerarSaudacao passando esse valor*/
    return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>

    /*Função coma mensagem personalizada */
    function gerarSaudacao(algumNome){
        return(
            `Olá, ${algumNome}, tudo bem?`
        )
    }

}