'use client'

import { useContext, useState } from 'react'
import { Plus } from '@icons'
import styles from '@styles/newTaskInput.module.scss'
import { tasksContext } from '@/context/tasksContext'
import { v4 as uuidv4 } from 'uuid'

const NewTaskInput = () => {
  const [newTask, setNewTask] = useState('')

  const { tasksList, setTasksList } = useContext(tasksContext)

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasksList([...tasksList, { id: uuidv4(), title: newTask, isCompleted: false }])
      setNewTask('')
    }
  }

  return (
    <div className={styles.container}>
      <input
        type='text'
        placeholder='Add new task...'
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        onKeyDown={(event) => { if (event.key === 'Enter') addTask() }}
      />
      <button onClick={addTask} className={styles.addButton}>
        Add
        <Plus className={styles.icon} />
      </button>
    </div>
  )
}
export default NewTaskInput
