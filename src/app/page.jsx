import Footer from '@/components/Footer'
import ListContainer from '@/components/ListContainer'
import styles from '@styles/page.module.scss'

export default function Home () {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>todo app</h1>
      </header>
      <ListContainer />
      <Footer />
    </main>
  )
}
