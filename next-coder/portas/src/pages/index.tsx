import { useState } from "react";
import { Ball } from "../../components/Ball";
import Card from "../../components/Card";

import Circle from "../../components/Circle";
import { Porta } from "../../components/Porta";
import { atualizarPortas, criarPortas } from "../../functions/criarPortas";
import ModeloBall from "../../models/ball";
import CardModel from "../../models/card";
import CircleModel from "../../models/circle";
// import Presente from "../../components/Presente";
import PortaModel from "../../models/porta";


export default function Home() {

  const [porta, setPorta] = useState(new PortaModel(1))
  const [circle, setCircle] = useState(new CircleModel())

  // const [card, setCard] = useState(new CardModel(1))

  const [ball, setBall] = useState(new ModeloBall())

  const [card, setCard] = useState(new CardModel(1))


  const [portas, setPortas] = useState(criarPortas(4, 2))
  

  function renderizarPortas() {
    return portas.map(porta => <Porta 
                                  key={porta.numero} 
                                  porta={porta} 
                                  onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}
                                />
                      )
  }

  return (
    <div style={{display: 'flex'}}>
      {renderizarPortas()}
      {/* <Porta porta={porta} onChange={novaPorta => setPorta(novaPorta)}/> */}
      {/* <Circle circle={circle} changeCircle={outroCiclo => setCircle(outroCiclo)} /> */}
      {/* <Card card={card} onChange={novoCard => setCard(novoCard)} /> */}
      {/* <Ball ball={ball} onChange={novaBall => setBall(novaBall)} /> */}
      {/* <Card card={card} onChange={novoCard => setCard(novoCard) } /> */}
    </div>
  )
}
