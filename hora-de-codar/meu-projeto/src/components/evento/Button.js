function Button(props) {
    /*Criamos uma função que ao clicar em um botão, mostrará
    no log o valor do props */
    /*Perceba que para uma linha de comando, não precisamos colocar
    parênteses no return */
    return <button onClick={props.event}>{props.text}</button>
}

export default Button