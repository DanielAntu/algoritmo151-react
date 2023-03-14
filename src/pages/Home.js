import React from "react";
import Styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className={Styles.home}>
            <h2>
                Deseja Ver seu IMC aperte no botao abaixo e sera redirecionado
                para pagina de formulario
            </h2>

            <Link className="btn" to="/form">
                Começar
            </Link>
        </div>
    );
};

export default Home;
