/*Importamos esta lib para usarmos validações nas propriedades */
import PropTypes from 'prop-types'

/*Criamos um component Item para reaproveitarmos como fragment */
function Item({marca, ano_lancamento}){
    return(
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

/*Validação para tipo de primitivo */
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

/*validação para valores default */
Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default Item
