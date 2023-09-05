'use client'
import { useState } from 'react'
import styles from '@styles/filterBar.module.scss'

const FILTER = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
}

const FilterBar = () => {
  const [optionSelected, setOptionSelected] = useState(FILTER.ALL)

  const handleOption = (event) => {
    const newOption = event.target.value
    setOptionSelected(newOption)
  }

  return (
    <nav className={styles.container}>
      <label htmlFor={FILTER.ALL} className={`${styles.option} ${optionSelected === FILTER.ALL && styles.active}`}>
        {FILTER.ALL}
        <input
          id={FILTER.ALL}
          type='radio'
          value={FILTER.ALL}
          name='FILTER'
          checked={optionSelected === FILTER.ALL}
          onChange={handleOption}
        />
      </label>
      <label htmlFor={FILTER.ACTIVE} className={`${styles.option} ${optionSelected === FILTER.ACTIVE && styles.active}`}>
        {FILTER.ACTIVE}
        <input
          id={FILTER.ACTIVE}
          type='radio'
          value={FILTER.ACTIVE}
          name='FILTER'
          checked={optionSelected === FILTER.ACTIVE}
          onChange={handleOption}
        />
      </label>
      <label htmlFor={FILTER.COMPLETED} className={`${styles.option} ${optionSelected === FILTER.COMPLETED && styles.active}`}>
        {FILTER.COMPLETED}
        <input
          id={FILTER.COMPLETED}
          type='radio'
          value={FILTER.COMPLETED}
          name='FILTER'
          checked={optionSelected === FILTER.COMPLETED}
          onChange={handleOption}
        />
      </label>
    </nav>
  )
}
export default FilterBar
