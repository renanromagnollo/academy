import PortaModel from '../models/porta'
import styles from '../src/styles/Porta.module.scss'

interface PortaProps {
    porta: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export function Porta(props: PortaProps) {
    const {porta} = props
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

    function alternarSelecao(e) {
        return props.onChange(porta.alterarSelecao())
    }

    const abrirPorta = e => props.onChange(porta.abrir())

    function renderPorta() {
        return (
            <div className={`${styles.estrutura} ${selecionada}`}>
                <div className={styles.porta}>
                    <div className={styles.numero}>{porta.numero}</div>
                    <div className={styles.macaneta} onClick={abrirPorta}></div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            {porta.aberta ? false : renderPorta()}           
            <div className={styles.chao}></div>
        </div>
    )
}