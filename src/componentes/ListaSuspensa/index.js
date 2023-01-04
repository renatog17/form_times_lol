import './ListaSuspensa.css'

function ListaSuspensa(props){
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
                {/*dificilmente vai aparecer for each no react*/
                /*é necessário uma propriedade única 'key', é um erro não blockante*/ 
                }
            </select>
        </div>
    )
}

export default ListaSuspensa