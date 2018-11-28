import React from 'react';
import './Caixa.css';
import Timer from '../timer/Timer';
import Botao from '../botao/Botao';

class Caixa extends React.Component{

    constructor(){
        super();

        this.minutos = 4;
        this.segundos =20;
    }

    decrementar(){
        setInterval(() =>{
            let meusSegundos = this.state.segundos;
            let meusMinutos = this.state.minutos;
            
            if(meusMinutos=== 0 && meusSegundos === 0){
                clearInterval(intervalo);
            }
            else if(meusSegundos == 0){
                meusSegundos = 59;
                meusMinutos--;
            }
            else{
                meusSegundos--;
            }
            this.setState({segundos: meusSegundos});
        }, 1000);
    }


    render(){
        let minutos = 4;
        let segundos = 20;
        return <section className="Caixa">
            <div className="main">
                <Timer minutos="10" segundos="23"/>

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