import { useState } from 'react'
import './CampoTexto.css'

function CampoTexto(props){

    //let valor = ''

    const[valor, setValor] = useState('Renato')

    const aoDigitado = (evento) => {
        setValor(evento.target.value)
        console.log(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}
export default CampoTexto