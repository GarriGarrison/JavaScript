import styles from './Input.module.scss'

const Input = props => {
  const { type = 'text' } = props

  return <input type={type} className={styles.active} />
}

export { Input }
