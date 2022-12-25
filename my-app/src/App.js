import React from "react";
import { useState } from "react";
import './componentes/componentes-css/top.css';
import Topo from "./componentes/top";
import Conteudo from "./componentes/conteudo";

function App(){
    const [TemaCor, setTema] = useState("Tema-claro");
    const [IconeTema, setIconeTema] = useState("./fontes/assets/moon.png");
    const [NomeLabel, setNomeLabel] = useState("Dark");
    const alterarTema = () => {
        if (TemaCor === "Tema-claro"){
            setTema("Tema-escuro");
            setIconeTema("./fontes/assets/sun.png")
            setNomeLabel("Light")

        } else {
            setTema("Tema-claro");
            setIconeTema("./fontes/assets/moon.png")
            setNomeLabel("Dark")
        };
    }

    return (
        <div className = {TemaCor}>
            <Topo 
                alterarTema = {alterarTema}
                TemaCor = {TemaCor}
                IconeTema = {IconeTema}
                NomeLabel = {NomeLabel}
            />
            <Conteudo />
        </div>   
    );
}

export default App;