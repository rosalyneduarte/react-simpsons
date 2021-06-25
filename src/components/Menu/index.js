import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const Menu = () => {
    return(
        <div>
            <div class="row">
                <div class="col-12 marcador-menu">
                    <ul className="menu text text-center">
                        <li>
                            <Link className="link" to="/"> Home </Link>
                        </li>

                        <li>
                            <Link className="link" to="/simpsons"> Simpsons </Link>
                        </li>

                        <li>
                            <Link className="link" to="/minhaPagina"> Breaking Bad </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu