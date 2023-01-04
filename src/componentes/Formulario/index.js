import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

function Formulario() {
    
    const roles = [
        "Top",
        "Jungle",
        "Mid",
        "Ad-carry",
        "Suporte"
    ]
    const ranks = [
        "Desafiante",
        "Mestre",
        "Diamante",
        "Platina",
        "Ouro",
        "Prata",
        "Bronze",
        "Ferro"
    ]

    const aoSalvar = (evento) => {
        console.log('Form foi submetido')
        evento.preventDefault()
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados</h2>
                <CampoTexto obrigatorio={true} label="Nickname" placeholder="Digite seu nome" />
                <ListaSuspensa obrigatorio={true} label="Role" itens={roles}></ListaSuspensa>
                <ListaSuspensa obrigatorio={true} label="Rank" itens={ranks}></ListaSuspensa>
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Link para a imagem" />
                <Botao texto="criar card"/>
            </form>
        </section>
    )
}

export default Formulario