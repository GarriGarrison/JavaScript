import styles from './Button.module.scss'
const Button = props => {
  const { text = '' } = props
  return <button className={styles.active}>{text}</button>
}
export { Button }
