import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const Footer = () => {
    return(
        <div>
            <ul className="menu">
                <li>
                    <Link className="link" to="https://github.com/rosalyneduarte"> Github </Link>
                </li>

                <li>
                    <Link className="link" to="https://www.linkedin.com/in/rosalyneduarte/"> Linkedin </Link>
                </li>
            </ul>

            <div>
                <h3> Desenvolvido com amor por Rosalyne Duarte </h3>
                <h4> Aluna Reprograma, recifense, entusiasta,  </h4>
            </div>
        </div>
    )
}

export default Footer