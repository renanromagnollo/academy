import BallModelo from '../models/ball'

import styles from '../src/styles/Ball.module.scss'

interface BallProps {
    ball: BallModelo
    onChange: (novaBola: BallModelo) => void
}

export function Ball(props: BallProps) {
    const { ball } = props

    const clicada = ball.clicada ? styles.clicada : ''


    function clickBall(e) {
        return props.onChange(ball.alterarSelecao())
    }


    return (
        <div className={`${styles.area} ${clicada}`} onClick={clickBall}></div>
    )
}