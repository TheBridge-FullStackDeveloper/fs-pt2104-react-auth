import { useStore } from 'hooks'

import Button from 'components/button'

export default () => {
  const { counter, updateStore } = useStore()

  return (
    <section>
      <h2>Counter: {counter}</h2>
      <section>
        <Button onClick={() => updateStore(1)} text="Add" />
        <Button onClick={() => updateStore(-1)} text="Substract" />
      </section>
    </section>
  )
}