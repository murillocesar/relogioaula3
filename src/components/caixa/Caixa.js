import React from 'react';
import './Caixa.css';

class Caixa extends React.Component{
    render(){
        return <section className="Caixa">
            <div className="main">
                <div className="timer">
                <span>00</span>
                <span>00</span>
            </div>

            <div className="buttons">
                <button>+</button>
                <button>-</button>
            </div>
        </div>

        <div className="buttons">
            <button>Iniciar</button>
            <button>Zerar</button>
        </div>
      </section>
    }
}

export default Caixa;