import './componentes-css/top.css';

 function Topo(props) {
    
    return(
        <div className={props.TemaCor}>
            <header className="conteiner-max">

                <div className="navbar menu">
                    <img className="logo" src="./fontes/assets/logo.png" alt="logo"/>
                    
                    <button onClick={props.alterarTema}>.
                        <img className="IconeTema" src={props.IconeTema} alt="Dark theme" />
                        <label>{props.NomeLabel}</label>
                    </button>
                </div>
            </header>
        </div>
    );
}
export default Topo;