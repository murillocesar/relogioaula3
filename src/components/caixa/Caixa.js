import React from 'react';
import './Caixa.css';
import Timer from '../timer/Timer';
import Botao from '../botao/Botao';

class Caixa extends React.Component{
    render(){
        return <section className="Caixa">
            <div className="main">
                <Timer/>

                <div className="buttons">
                    <Botao conteudo="+"/>
                    <Botao conteudo="-"/>
                </div>
            </div>

            <div className="buttons">
                <Botao conteudo="Iniciar"/>
                <Botao conteudo="Parar"/>
            </div>
      </section>
    }
}

export default Caixa;