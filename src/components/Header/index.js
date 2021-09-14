import React from 'react';
import * as S from './style.js';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header({lateCount, clickNotification}) {
    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="logo" />      
            </S.LeftSide>
            <S.RightSide>
                <Link to="/sale">VENDER</Link>
                <span className="dividir" />
                <div class="dropdown">
                    <button class="dropbtn">CLIENTE</button>
                    <div class="dropdown-content">
                        <Link to="/cliente">CADASTRAR CLIENTE</Link>
                        <Link to="/listaClientes">LISTA DE CLIENTES</Link>
                    </div>
                </div>

                {/* <div class="dropdown">
                    <span>CLIENTE</span>
                    <div class="dropdown-content">
                    <Link to="/cliente">CADASTRAR CLIENTE</Link>
                    <Link to="/listaClientes">LISTA DE CLIENTES</Link>
                    </div>
                </div>
                <Link to="/cliente">CADASTRAR CLIENTE</Link> */}
                <span className="dividir" />
                <Link to="/">COBRANÇAS</Link>
                <span className="dividir" />
                <button onClick={clickNotification} id="notification">
                    <img src={bell} alt="Notificações" />
                    <span>{lateCount}</span>
                </button>

            </S.RightSide>
        </S.Container>
    )
}

export default Header;
  