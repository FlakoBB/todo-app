'use client'

import { useContext } from 'react'
import { FiltersContext } from '@/context/filterContext'

export const useFilter = () => {
  const { filter, setFilter, FILTER } = useContext(FiltersContext)

  const filterTasks = (tasks) => {
    return tasks.filter(task => {
      switch (filter) {
        case FILTER.ALL:
          return true
        case FILTER.ACTIVE:
          return !task.isCompleted
        case FILTER.COMPLETED:
          return task.isCompleted
        default:
          return true
      }
    })
  }

  return { filterTasks, setFilter, filter }
}
