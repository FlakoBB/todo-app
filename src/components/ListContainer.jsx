import styles from '@styles/listContainer.module.scss'
import Task from './Task'

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
      <ul className={styles.list}>
        {
          tasks.map((task, index) => <Task key={index} data={task} id={index} />)
        }
      </ul>
    </section>
  )
}
export default ListContainer
