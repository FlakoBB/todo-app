import styles from '@styles/listContainer.module.scss'

const ListContainer = () => {
  const tasks = [
    {
      title: 'Tarea 1',
      isCompleted: false
    },
    {
      title: 'Tarea 2',
      isCompleted: false
    },
    {
      title: 'Tarea 3',
      isCompleted: false
    },
    {
      title: 'Tarea 3',
      isCompleted: false
    }
  ]

  return (
    <section className={styles.container}>
      <ul>
        {
          tasks.map((task, index) => <li key={index}>{task.title}</li>)
        }
      </ul>
    </section>
  )
}
export default ListContainer
