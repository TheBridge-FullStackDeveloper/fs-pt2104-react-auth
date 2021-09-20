import { useState } from 'react'
import { useStore } from 'hooks'
import Store from 'store'

export default ({ children }) => {
  const store = useStore()
  const [context, setContext] = useState(store)

  const updateStore = unit => {
    //setValue({...store, counter: store.counter + unit})
    setContext(prevContext => ({
      ...prevContext,
      counter: prevContext.counter + unit
    }))
  }

  return (
    <Store.Provider value={{ ...context, updateStore }}>
      {children}
    </Store.Provider>
  )
}