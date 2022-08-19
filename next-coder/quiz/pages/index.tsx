
import Questao from '../components/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'
import styles from '../styles/Home.module.css'

export default function Home() {
  const questaoTeste = new QuestaoModel(1, 'Melhor cor?', [
    RespostaModel.errada('Verde'),
    RespostaModel.errada('Vermelha'),
    RespostaModel.certa('Preta')

  ])
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      alignItems: 'center'
    }}>
      <Questao valor={questaoTeste}/>

    </div>
  )
}
