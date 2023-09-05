import styles from '@styles/listContainer.module.scss'
import Task from './Task'
import FilterBar from './FilterBar'

const ListContainer = () => {
  const tasks = [
    {
      title: 'Tarea 1',
      isCompleted: false
    },
    {
      title: 'Sacar a pasear al perro',
      isCompleted: true
    },
    {
      title: 'Tarea 3',
      isCompleted: false
    },
    {
      title: 'Repasar temas de react para presentar el examen de certificacion',
      isCompleted: false
    }
  ]

  return (
    <section className={styles.container}>
      <FilterBar />
      <ul className={styles.list}>
        {
          tasks.map((task, index) => <Task key={index} data={task} id={index} />)
        }
      </ul>
      {/* // ToDo: Button to delete all task (Only render when the completed task list is showing) */}
    </section>
  )
}
export default ListContainer
