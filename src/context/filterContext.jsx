'use client'

import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
  const FILTER = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
  }

  const [filter, setFilter] = useState(FILTER.ALL)

  return (
    <FiltersContext.Provider value={{ filter, setFilter, FILTER }}>
      {children}
    </FiltersContext.Provider>
  )
}
