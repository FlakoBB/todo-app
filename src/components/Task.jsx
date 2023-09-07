'use client'

import styles from '@styles/task.module.scss'
import { Check, Trash } from '@icons'
import { useContext, useState } from 'react'
import { tasksContext } from '@/context/tasksContext'

const Checkbox = ({ id, isCompleted }) => {
  const [isChecked, setIsChecked] = useState(isCompleted)

  const { tasksList } = useContext(tasksContext)

  const handleCheck = () => {
    const currentTask = tasksList.find(task => task.id === id)
    if (currentTask) {
      currentTask.isCompleted = !currentTask.isCompleted
      localStorage.setItem('tasks', JSON.stringify(tasksList))
    }
    setIsChecked(!isChecked)
  }

  return (
    <div onClick={handleCheck} className={styles.checkbox}>
      <input id={id} type='checkbox' />
      {
        isChecked && (
          <label htmlFor={id} className={styles.checked}>
            <Check className={styles.icon} />
          </label>
        )
      }
    </div>
  )
}

const Task = ({ data }) => {
  const { tasksList, setTasksList } = useContext(tasksContext)

  const deleteTask = () => {
    const newList = tasksList.filter(task => task.id !== data.id)
    setTasksList(newList)
  }

  return (
    <li className={styles.item}>
      <Checkbox id={data.id} isCompleted={data.isCompleted} />
      {/* // ToDo: actualizar estilos de completado al instante */}
      <label htmlFor={data.id} className={`${styles.title} ${data.isCompleted && styles.completed}`}>{data.title}</label>
      <button onClick={deleteTask} type='button' className={styles.deleteButton}>
        <Trash className={styles.icon} />
      </button>
    </li>
  )
}
export default Task
