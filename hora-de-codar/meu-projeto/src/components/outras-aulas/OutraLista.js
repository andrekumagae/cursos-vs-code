export default function Outralista({ titulo, itens }) {
    return (
        <>
            <h3>Lista de coisas boas:</h3>
            {/* Aqui temos uma estrutura if-else ternario. Testamos se um array não é vazio*/}
            {itens.length > 0 ? (
                /*Usamos o index no map para corrigir um erro do react */
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                    /*Perceba que há 3 parenteses: da arrow function, do map e do if */
                ))) : (
                    /*aqui temos a condição do else */
                <p>Não há itens na lista!</p>
            )
            }
        </>
    )
}

