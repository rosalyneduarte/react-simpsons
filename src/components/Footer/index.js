import React from 'react'
import git from '../../assets/logo-github.svg'
import linkedin1 from '../../assets/logo-linkedin-1.svg'
import insta from '../../assets/logo-insta.svg'

import './styles.css'

const Footer = () => {
    return(
        <div>
            {/*Aqui inicia o footer alternativo*/ }
            <div class="container-fluid sec-footer marcador-footer">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card desc-box">
                    <div class="card-body">
                        <div class="card-title">Sobre Mim</div>
                        <div class="card-text">
                        Uma Pernambucana, apaixonada por tecnologia, maravilhosa, entusiasta, simpatica, alegre, analista de sistemas, administradora e mãe
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card desc-box">
                    <div class="card-body">
                        <div class="card-title ">Contatos</div>
                        <div class="card-text">

                            <div class="row">
                                <div class="col">
                                    <i class="fas fa-map-marker ml-3"></i>
                                    <span> rosalyneduarte@gmail.com </span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <i class="fas fa-envelope-open ml-3"></i>
                                    <span> PE, Brasil - BR </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col text-center mt-3">
            <h5> <strong> ROSALYNE DUARTE </strong> </h5>
                <div class="mt-3">

                <a className="link" class="snip1472" href="https://www.linkedin.com/in/rosalyneduarte/" > 
                     <img src={linkedin1} alt="Logo Linkedin" class="color mb-2" />
                </a>
            
                <a className="link" class="snip1472" href="https://github.com/rosalyneduarte"  > 
                    <img src={git} alt="Logo GitHub" class="color mb-1" /> 
                </a>

                <a className="link" class="snip1472" href="https://www.instagram.com/rosaduartt/" >
                     <img src={insta} alt="Logo Insta" class="color mb-1" />
                </a>
                </div>
            </div>
        </div>
    </div>
</div>

            {/*FIM,  footer alternativo*/ }
        </div>
    )
}

export default Footer