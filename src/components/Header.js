import React from 'react';
import '../css/header.css';

const Header = () => (
    <header>
        <div>
            <a href="#" className="logo"></a>
        </div>
        <div className="menu">
            <ul className="nav">
                <li><a href="">TAQUILLA</a>
                    <ul>
                        <li><a href="">TAQUILLA</a></li>
                        <li><a href="">TODOS LOS GÉNEROS</a></li>
                        <li><a href="">ESTRENOS</a></li>
                        <li><a href="">POPULARES</a></li>
                        <li><a href="">CINE ESPAÑOL</a></li>
                        <li><a href="">FAMILY</a></li>
                    </ul>
                </li>
                <li><a href="">RAKUTEN WUAKI</a>
                    <ul>
                        <li><a href="">RAKUTEN WUAKI</a></li>
                        <li><a href="">PELÍCULAS RECIÉN AÑADIDAS</a></li>
                        <li><a href="">SERIES RECIÉN AÑADIDAS</a></li>
                        <li><a href="">TODOS LOS GÉNEROS</a></li>
                        <li><a href="">TODAS LAS SERIES</a></li>
                        <li><a href="">DISNEY</a></li>
                        <li><a href="">SERIES INFANTIL</a></li>
                        <li><a href="">CARTOON NETWORK</a></li>
                        <li><a href="">DOCUMENTALES GUIDEDOC</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div id="search-bar">
            <ion-icon name="search"></ion-icon>
            <input type="text" className="form-control" placeholder="Search" id="search"/>
        </div>
        <div className="register">
            <a href="">Entrar</a>
            <button>REGISTRARSE</button>
        </div>
    </header>
);

export default Header;
