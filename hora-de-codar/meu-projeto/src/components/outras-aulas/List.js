import Item from './Item'

function List(){
    return(
        /*Fragments permitem criarmos componentes sem elementos pai, como divs */
        <>
        <h1>Minha lista</h1>
        <ul>
            {/* Para usarmos valores int, tem q estar entre chaves */}
            <Item marca="Ferrari" ano_lancamento={1985} />
            {/* Propositalmente colocando como string */}
            <Item marca="Fiat" ano_lancamento={1964} />
            {/* Testando valor default pro ano_lancamento */}
            <Item marca="Renault" />
            {/* Testando valor default pra marca */}
            <Item ano_lancamento={2000} />
            {/* Testando valor default pra marca e ano_lancamento */}
            <Item />
        </ul>
        </>
    )
}

export default List