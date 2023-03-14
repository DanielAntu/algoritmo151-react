import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Results from "./pages/Results";
import { ImcContextProvider } from "./context/ImcContext";

function App() {
    return (
        <div className="App">
            <ImcContextProvider>
                <BrowserRouter>
                    <h1>IMC-(indice de massa corporal)</h1>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/form" element={<Form />} />
                        <Route path="/results" element={<Results />} />
                    </Routes>
                </BrowserRouter>
            </ImcContextProvider>
        </div>
    );
}

export default App;
