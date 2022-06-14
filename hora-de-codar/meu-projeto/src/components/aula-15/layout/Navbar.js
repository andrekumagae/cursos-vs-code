/*Importamos o componente Link  */
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
export default function Navbar() {
    return (
        <ul className={styles.list}>
            <li className={styles.item}>
               {/* Linkamos o endereço da página de acordo com o conteúdo */}
                <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
                <Link to="/empresa">Empresa</Link>
            </li>
            <li className={styles.item}>
                <Link to="/contato">Contato</Link>
            </li>
        </ul>
    )
}