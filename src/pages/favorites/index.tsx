import { addAndMultiply } from '../../functions/add'
import { multiplyAndAdd } from '../../functions/multiply'
import Counter from "../../components/Counter";

export default function Index() {
  return (
    <>
      <h1>Favorites</h1>
      <div>{addAndMultiply(1, 2, 3)}</div>
      <div>{multiplyAndAdd(1, 2, 3)}</div>

      <Counter />
    </>
  )
}
