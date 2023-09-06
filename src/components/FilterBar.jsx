'use client'
import styles from '@styles/filterBar.module.scss'
import { FILTER, useFilter } from '@/hooks/useFilter'

const FilterBar = () => {
  const { filter, setFilter } = useFilter()

  const handleOption = (event) => {
    const newOption = event.target.value
    setFilter(newOption)
  }

  return (
    <nav className={styles.container}>
      <label htmlFor={FILTER.ALL} className={`${styles.option} ${filter === FILTER.ALL && styles.active}`}>
        {FILTER.ALL}
        <input
          id={FILTER.ALL}
          type='radio'
          value={FILTER.ALL}
          name='FILTER'
          checked={filter === FILTER.ALL}
          onChange={handleOption}
        />
      </label>
      <label htmlFor={FILTER.ACTIVE} className={`${styles.option} ${filter === FILTER.ACTIVE && styles.active}`}>
        {FILTER.ACTIVE}
        <input
          id={FILTER.ACTIVE}
          type='radio'
          value={FILTER.ACTIVE}
          name='FILTER'
          checked={filter === FILTER.ACTIVE}
          onChange={handleOption}
        />
      </label>
      <label htmlFor={FILTER.COMPLETED} className={`${styles.option} ${filter === FILTER.COMPLETED && styles.active}`}>
        {FILTER.COMPLETED}
        <input
          id={FILTER.COMPLETED}
          type='radio'
          value={FILTER.COMPLETED}
          name='FILTER'
          checked={filter === FILTER.COMPLETED}
          onChange={handleOption}
        />
      </label>
    </nav>
  )
}
export default FilterBar
