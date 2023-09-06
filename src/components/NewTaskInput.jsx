import { useState } from 'react'
import { Plus } from '@icons'
import styles from '@styles/newTaskInput.module.scss'

const NewTaskInput = () => {
  const [newTask, setNewTask] = useState('')

  // const list = localStorage.getItem('tasks')
  // ToDo: crear otro contexto para obtener la lista o pasar por props

  const addTask = () => {
    if (newTask.trim() !== '') {
      console.log(newTask)
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
      />
      <button onClick={addTask} className={styles.addButton}>
        Add
        <Plus className={styles.icon} />
      </button>
    </div>
  )
}
export default NewTaskInput
