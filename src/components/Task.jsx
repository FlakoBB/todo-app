'use client'

import styles from '@styles/task.module.scss'
import { Check, Trash } from '@icons'
import { useState } from 'react'

const Checkbox = ({ id, state }) => {
  const [isChecked, setIsChecked] = useState(state)

  const handleCheck = () => {
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
// ToDo: sinchronize state (isCompleted and isChecked)
const Task = ({ data, id }) => {
  return (
    <li className={styles.item}>
      <Checkbox id={id} state={data.isCompleted} />
      <label htmlFor={id} className={`${styles.title} ${data.isCompleted && styles.completed}`}>{data.title}</label>
      <button className={styles.deleteButton}>
        <Trash className={styles.icon} />
      </button>
    </li>
  )
}
export default Task
