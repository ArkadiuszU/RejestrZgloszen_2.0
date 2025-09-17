import { Counter } from "../Counter";
import { useCounter } from "../../hooks/useCounter";

export function CounterContainer() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <Counter
      count={count}
      onIncrement={increment}
      onDecrement={decrement}
      onReset={reset}
    />
  );
}