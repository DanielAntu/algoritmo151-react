import React from "react";
import Styles from "./Form.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useImcContext } from "../hook/useImcContext";

const Form = () => {
    const { weight, setWeight, height, setHeight, setResults } =
        useImcContext();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setResults(weight / height ** 2);

        navigate("/results");
    };

    return (
        <div className={Styles.form_inputs}>
            <h2>Preencha o formulário</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Peso:</span>
                    <input
                        type="number"
                        name="weight"
                        id="weight"
                        placeholder="Digite seu peso"
                        required
                        //value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </label>
                <label>
                    <span>Altura:</span>
                    <input
                        type="text"
                        name="height"
                        id="height"
                        placeholder="Digite Sua altura"
                        required
                        pattern="^[0-9]{1}.[0-9]{2}$"
                        //value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </label>
                <div className={Styles.actions}>
                    <button className="btn" type="submit">
                        Calcular
                    </button>
                    <Link to="/" className="btn">
                        Voltar
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Form;
