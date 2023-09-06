'use client'

import { createContext, useState } from 'react'

export const tasksContext = createContext()

export const TasksProvider = ({ children }) => {
  const [tasksList, setTasksList] = useState([])

  return (
    <tasksContext.Provider value={{ tasksList, setTasksList }}>
      {children}
    </tasksContext.Provider>
  )
}
