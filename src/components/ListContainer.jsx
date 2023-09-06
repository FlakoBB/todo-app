'use client'
import styles from '@styles/listContainer.module.scss'
import Task from './Task'
import FilterBar from './FilterBar'
import NewTaskInput from './NewTaskInput'
import { Trash } from '@icons'
import { useFilter, FILTER } from '@/hooks/useFilter'
import { useEffect, useState } from 'react'

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
  const [tasks, setTasks] = useState([{ id: '1', title: 'title', isCompleted: true }])

  const { filterTasks, filter } = useFilter()

  const taskList = filterTasks(tasks)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    const storedList = localStorage.getItem('tasks')
    if (storedList) setTasks(JSON.parse(storedList))
  }, [])

  return (
    <section className={styles.container}>
      <FilterBar />
      <NewTaskInput />
      <ul className={styles.list}>
        {/* // ToDo: Mostrar mensaje en caso de tener una lista vacia */}
        {
          taskList.map((task, index) => <Task key={index} data={task} id={index} />)
        }
      </ul>
      {
        filter === FILTER.COMPLETED && taskList.length !== 0 && (
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
