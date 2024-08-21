import { addAndMultiply } from '../functions/add'
import { multiplyAndAdd } from '../functions/multiply'

export default function Index() {
  return (
    <>
      <h1>Home</h1>
      <div>{addAndMultiply(1, 2, 3)}</div>
      <div>{multiplyAndAdd(1, 2, 3)}</div>
    </>
  )
}
