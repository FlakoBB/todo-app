'use client'
import styles from '@styles/listContainer.module.scss'
import Task from './Task'
import FilterBar from './FilterBar'
import NewTaskInput from './NewTaskInput'
import { Trash } from '@icons'
import { useFilter } from '@/hooks/useFilter'
import { useContext, useEffect } from 'react'
import { tasksContext } from '@/context/tasksContext'
import { FiltersContext } from '@/context/filterContext'

// const tasks = [
//   {
//     title: 'Tarea 1',
//     isCompleted: false
//   },
//   {
//     title: 'Sacar a pasear al perro',
//     isCompleted: true
//   },
//   {
//     title: 'Tarea 3',
//     isCompleted: false
//   },
//   {
//     title: 'Repasar temas de react para presentar el examen de certificacion',
//     isCompleted: false
//   }
// ]

const ListContainer = () => {
  const { tasksList, setTasksList } = useContext(tasksContext)
  const { FILTER } = useContext(FiltersContext)

  const { filterTasks, filter } = useFilter()

  const renderList = filterTasks(tasksList)

  useEffect(() => {
    const currentList = localStorage.getItem('tasks')
    if (currentList) setTasksList(JSON.parse(currentList))
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksList))
  }, [tasksList])

  return (
    <section className={styles.container}>
      <FilterBar />
      <NewTaskInput />
      <ul className={styles.list}>
        {/* // ToDo: Mostrar mensaje en caso de tener una lista vacia */}
        {
          renderList.map((task) => <Task key={task.id} data={task} />)
        }
      </ul>
      {
        filter === FILTER.COMPLETED && renderList.length !== 0 && (
          <button className={styles.deleteAllButton}>
            Delete all
            <Trash className={styles.icon} />
          </button>
        )
      }
    </section>
  )
}
export default ListContainer
