import { useState } from 'react'

function Condicional() {

    /*Constantes para usarmos nos setters dos eventos */
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    /*Função para botão de limpar email */
    function limparEmail() {
        setUserEmail('')
    }

    /*Função do botão de salvar e-mail */
    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input
                    type="email"
                    placeholder='Digite o seu e-mail...'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={enviarEmail}>Enviar e-mail</button>
                {/* Estrutura condicional é verdadeira quando tiver algo após o && */}
                {userEmail &&
                    <div>
                        <p>
                            O e-mail do usuário é: {userEmail}
                        </p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                }
            </form>
        </div>
    )
}

export default Condicional