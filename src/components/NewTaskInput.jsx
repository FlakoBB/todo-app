import { Plus } from '@icons'
import styles from '@styles/newTaskInput.module.scss'

const NewTaskInput = () => {
  return (
    <div className={styles.container}>
      <input type='text' placeholder='Add new task...' />
      <button className={styles.addButton}>
        Add
        <Plus className={styles.icon} />
      </button>
    </div>
  )
}
export default NewTaskInput
