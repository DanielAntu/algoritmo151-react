import { createContext, useState } from "react";

export const ImcContext = createContext();

export const ImcContextProvider = ({ children }) => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [results, setResults] = useState("");

    return (
        <ImcContext.Provider
            value={{
                weight,
                setWeight,
                height,
                setHeight,
                results,
                setResults,
            }}
        >
            {children}
        </ImcContext.Provider>
    );
};
