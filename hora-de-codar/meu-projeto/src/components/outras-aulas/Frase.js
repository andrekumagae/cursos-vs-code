/*Importe o seu css com a palavra styles */
import styles from './Frase.module.css'

/*Criando um component dentro de outro */
function Frase(){
    return(
        /*Lembre-se que em react não usamos class, mas sim className.
          Chame o seu estilo tal como uma prop*/
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente com uma frase!</p>
        </div>
            )
}
export default Frase