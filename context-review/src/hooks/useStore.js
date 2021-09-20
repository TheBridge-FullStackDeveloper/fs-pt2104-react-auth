import { useContext } from 'react'
import Store from 'store'

export default () => {
  const store = useContext(Store)
  return { ...store }
}