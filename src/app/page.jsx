import Footer from '@/components/Footer'
import ListContainer from '@/components/ListContainer'
import styles from '@styles/page.module.scss'

export default function Home () {
  return (
    <main className={styles.container}>
      <h1>TODO APP</h1>
      <ListContainer />
      <Footer />
    </main>
  )
}
