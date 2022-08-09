import DoorModel from "../models/door";
import styles from '../src/styles/Porta.module.scss'

interface DoorProps {
    door: DoorModel
    onChange: (novaDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
    const {door} = props
    const selecionada = door.selecionada && !door.aberta ? styles.selecionada : ''

    function alterarSelecao(e) {
        return props.onChange(door.alterarSelecao())
    }

    const abrirDoor = e => props.onChange(door.abrir())

    function renderDoor() {
        return (
            <div className={styles.porta}>
                    <div className={styles.numero}>{door.numero}</div>
                    <div className={styles.macaneta} onClick={abrirDoor}></div>
                </div>
        )
    }

    return (
        <div className={styles.area} onClick={alterarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {door.fechada ? renderDoor() : false}
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}