import styles from "./Results.module.css";
import { useImcContext } from "../hook/useImcContext";
import { useSitImc } from "../hook/useSitImc";
import { Link } from "react-router-dom";

const Results = () => {
    const { weight, height, results } = useImcContext();

    let resFor;

    if (results) {
        resFor = results.toFixed(2);
    }

    const res = useSitImc(results);

    return (
        <div className={styles.results}>
            <h2>Resultados</h2>
            {weight && height && results ? (
                <>
                    <p>
                        <span>Peso:</span> <span>{weight}</span>
                    </p>
                    <p>
                        <span>Altura:</span> <span>{height}</span>
                    </p>
                    <p>
                        <span>IMC:</span> <span>{resFor}</span>
                    </p>
                    <p>
                        <span>Situação:</span> <span>{res}</span>
                    </p>
                </>
            ) : (
                <p className={styles.erro}>
                    Nenhum Resultado encontrado Volte para o fomulario e
                    preencha todos os campos!
                </p>
            )}

            <Link to="/form" className="btn">
                Voltar
            </Link>
        </div>
    );
};

export default Results;
