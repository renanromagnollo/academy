import CircleModel from "../models/circle";
import styles from "../src/styles/Circle.module.scss"

interface CircleProps {
    circle: CircleModel
    changeCircle: (newCircle: CircleModel) => void
}


export default function Circle(props: CircleModel) {

    const {circle} = props
    
    function turnOn(e) {
        return props.changeCircle(circle.turnOn())
    }

    return (
    <div className={styles.area} onClick={turnOn}>
      <div className={styles.circle}></div>
    </div>
  );
}
