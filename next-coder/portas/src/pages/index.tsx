import { useState } from "react";
import { Porta } from "../../components/Porta";
// import Presente from "../../components/Presente";
import PortaModel from "../../models/porta";


export default function Home() {

  const [porta, setPorta] = useState(new PortaModel(1))
  

  return (
    <div style={{display: 'flex'}}>
      <Porta porta={porta} onChange={novaPorta => setPorta(novaPorta)}/>
    </div>
  )
}
