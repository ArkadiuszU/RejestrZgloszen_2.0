
// className={count?"text-my_green":"text-my_red"}
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
type CounterProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
};

export function Counter({ count, onIncrement, onDecrement, onReset }: CounterProps) {
  return (
    <>
      <Card title="Licznik" className="w-100 flex flex-col justify-center items-center ">
        <div> <h2> Counter: {count}</h2> </div>
        <div>
          <Button onClick={onIncrement}>+</Button>
          <Button severity="danger" className="btn_minus" onClick={onDecrement}>-</Button>
          <Button severity="secondary" className="btn_reset" onClick={onReset}>Reset</Button>
        </div>
      </Card>
    </>

  );
}