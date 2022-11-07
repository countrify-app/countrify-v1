import styles from '../styles/Home.module.css'
import { Button } from '@countrify-app/countrify-components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Button label='je-suis-un-petit-bouton'/>
    </div>
  )
}
