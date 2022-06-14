/*Importei meu componente filho Button */
import Button from "./evento/Button"

function Evento() {

    /*Funções que vão iniciar quando clicar no botão */
    function meuEvento() {
        console.log(`Ativando primeiro evento!`)
    }

    function segundoEvento() {
        console.log('Ativando o segundo evento!')
    }

    return (
        <div>
            <p>Clique para disparar um evento: </p>
            {/* Perceba que tenho uma propriedade event chamando
            minhas funções, porem sem parênteses. Isto indica que
            não vou as invocar de imediato, mas só depois do evento
            informado, que seria o onClick */}
            <Button event={meuEvento} text="Primeiro evento" />
            <Button event={segundoEvento} text="Segundo evento" />
        </div>
    )
}

export default Evento