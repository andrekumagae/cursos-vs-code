/*Como ele está no msm diretório, basta colocar
./nome do arquivo  */
import Frase from './Frase'

function HelloWorld(){
    return (
        <div>
            {/* Chamo o meu component Frase aqui */}
            <Frase/>
            <h1>Meu primeiro componente</h1>
            {/* Consigo reutilizá-lo várias vezes */}
            <Frase/>
            <Frase/>
        </div>
    )
}
/* crie a função e exporte para usar no seu app */
export default HelloWorld