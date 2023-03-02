import { createContext, useState } from 'react'

export const initialValue = {
  isSidebarOpen: true,
}

const GeneralContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <GeneralContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
      }}
    >
      {children}
    </GeneralContext.Provider>
  )
}

export const GeneralContext = createContext()
export default GeneralContextProvider
