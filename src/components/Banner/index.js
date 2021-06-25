import React from 'react'
import img from '../../assets/undraw_react.svg'
import "./styles.css"

const Banner = () => {
    return (
        <div>
            <div class="row">
                <div class="col-12 marcador-banner">
                    <div class="main">
                        <div>
                            <h1> APP DIVERTIDO </h1>
                            <p> Projeto feito em React para treinar react-router-dom e axios.</p>
                        </div>

                        <img src={img} alt="Logo react" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner