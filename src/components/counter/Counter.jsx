import { useState } from "react"
import styles from './Counter.module.css'

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count != 0) {
            setCount(count - 1)
        }
    }
    return (
        <div className={styles.container}>
            <button onClick={decrement} className={styles.button}>-</button>
            <h1 className={styles.count}>{count}</h1>
            <button onClick={increment} className={styles.button}>+</button>
        </div>
)
}

export default Counter
