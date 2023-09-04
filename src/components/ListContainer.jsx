import styles from '@styles/listContainer.module.scss'
import Task from './Task'

const ListContainer = () => {
  const tasks = [
    {
      title: 'Tarea 1',
      isCompleted: false
    },
    {
      title: 'Tarea 2',
      isCompleted: true
    },
    {
      title: 'Tarea 3',
      isCompleted: false
    },
    {
      title: 'Tarea 4',
      isCompleted: false
    }
  ]

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {
          tasks.map((task, index) => <Task key={index} data={task} id={index} />)
        }
      </ul>
    </section>
  )
}
export default ListContainer
