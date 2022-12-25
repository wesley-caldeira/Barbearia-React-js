import React from "react";
import './componentes-css/conteudo.css';

function Conteudo (props) {
    return(
        <div>
            <main className="">
                <div className="banner banner-limite">
                    
                </div>

                <div className="conteudo">
                    <h1>Bem-Vindo a Barber Shop {props.nome}</h1>

                    <div className="paragrafo-descrisao">
                    <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas<br></br> maiores expectativas.</p>
                        
                    </div>

                    <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demostrou o<br></br> talento de mestres barbeiros em várias concursos de estilo.
                        Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará <br>
                        </br>desapontado.
                    </p>

                    <span>S. Kelly</span>
                </div>
            </main>
        </div>
    );
}

export default Conteudo;