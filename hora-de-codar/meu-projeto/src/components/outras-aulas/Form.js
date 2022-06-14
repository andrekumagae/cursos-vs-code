/*Importamos o hook */
import { useState } from 'react'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)
    }

    /*Criamos constantes com os valores pegos pela arrow function e seus métodos setters */
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro:</h1>
            {/* evento para trabalhar com formulários */}
            <form onSubmit={cadastrarUsuario}>
                <div>
                    {/* Usamos htmlFor por haver palavra reservada for*/}
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome"
                    /*Informamos qual id do valor pego */
                    value={name}
                    /*Arrow function que altera o valor digitado */
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Digite a sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form