/*Para trabalhar com props, use dentro dos parenteses */
function SayMyName(props){
    return(
        <div>
            {/* Use ela e coloque um .propriedade que queira usar */}
            <p>Fala aí {props.nome}, suave?</p>
        </div>
    )
}

export default SayMyName