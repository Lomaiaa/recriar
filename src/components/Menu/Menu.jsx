import { Link } from 'react-router-dom'

import './menu.css'

function Menu() {
    return (
        <section>
            <header className="header">
                <div className='navbar'>
                    <div className="navbar-box">
                        <div className="navbar-logo">
                            <img className="img-responsive" src="src/assets/Logo1.png" alt="Logotipo RecriAr" />
                        </div>
                        <nav>
                            <ul className="menu1">
                                <li className="item">
                                    <Link className="link" to="/">SOBRE</Link>
                                </li>
                                <li className="item">
                                    <Link className="link" to="/dicas">DICAS</Link>
                                </li>
                                <li className="item">
                                    <Link className="link" to="/cadastro">CADASTRO</Link>
                                </li>
                                <li className="item">
                                    <Link className="link" to="/equipe">EQUIPE</Link>
                                </li>
                            </ul>
                        </nav>
                        <div class="navbar-nav--hamburguer" id="btnResponsivo">
                            <a href="#">
                                <img src="img/menu-nav.png" alt="Menu de navegação" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    )
}

export default Menu