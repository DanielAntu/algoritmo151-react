import { useContext } from "react";
import { ImcContext } from "../context/ImcContext";

export const useImcContext = () => {
    const context = useContext(ImcContext);

    if (!context) {
        console.log("Contexto não enviado");
    }

    return context;
};
