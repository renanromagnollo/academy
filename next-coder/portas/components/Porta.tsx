import PortaModel from '../models/porta'
import styles from '../src/styles/Porta.module.scss'

interface PortaProps {
    porta: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export function Porta(props: PortaProps) {
    const {porta} = props
    const selecionada = porta.selecionada ? styles.selecionada : ''

    function alternarSelecao(e) {
        return props.onChange(porta.alterarSelecao())
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                <div className={styles.porta}>
                    <div className={styles.numero}>{porta.numero}</div>
                    <div className={styles.macaneta}></div>
                </div>
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}