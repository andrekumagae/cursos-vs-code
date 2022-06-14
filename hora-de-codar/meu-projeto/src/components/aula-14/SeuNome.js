function SeuNome({setNome}){
    return(
        <div>
            <p>Digite o seu nome:</p>
            {/* Criamos um input que possui um evento ao mudar seu texto */}
            <input type="text" placeholder="Qual é o seu nome?" onChange={(e) => setNome(e.target.value)} />
        </div>
    )
}

export default SeuNome