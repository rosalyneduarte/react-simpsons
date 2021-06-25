import React, {useState, useEffect} from 'react'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

import Axios from 'axios'
import './styles.css'

const Simpsons = () => {
    const [personagem, setPersonagem] = useState([])
    const [clique, setClique] = useState(()=>{})
    
    useEffect(()=>{
        const pegaDados = async ()=> {
            const resposta = await Axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
            const dados = await resposta.data
            setPersonagem(dados)
        }
        pegaDados()
    },[clique])

    function ligaClique(){
        setClique(personagem)
    }

    return (
        <>
            <Menu />
            <div className="main-simpson">
                {personagem.map(perso => {
                    return(
                        <div className="card">
                            
                            <img src={perso.image} alt="personagem simpson"/>
                            <p>{perso.character}</p>
                        </div>
                        
                    )
                })}
                <button onClick={ligaClique} class="btn btn-info mt-2">Clique para trocar o personagem</button>
            </div>
            <Footer />
        </>
    )
}

export default Simpsons