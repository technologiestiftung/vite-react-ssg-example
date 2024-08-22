import {lazy, Suspense} from "react";

const Counter = lazy(() => import("../components/Counter.tsx"));

export default function Index() {
  return (
    <>
      <h1>Home</h1>
      <Suspense fallback={<>loading...</>}>
        <Counter />
      </Suspense>
    </>
  )
}
