import { useState, useEffect } from "react";

export const useSitImc = (results) => {
    const [res, setRes] = useState("");

    useEffect(() => {
        if (results < 20) {
            setRes("Abaixo do peso");
        } else if (results <= 25) {
            setRes("Normal");
        } else if (results <= 30) {
            setRes("Excesso de Peso");
        } else if (results <= 35) {
            setRes("Obesidade");
        } else {
            setRes("Obesidade Mórbida");
        }
    }, [results]);

    return res;
};
