import React from 'react';
import './Caixa.css';
import Timer from '../timer/Timer';

class Caixa extends React.Component{
    render(){
        return <section className="Caixa">
            <div className="main">
                <Timer/>

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