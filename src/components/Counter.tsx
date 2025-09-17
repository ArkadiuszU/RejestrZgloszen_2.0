
// className={count?"text-my_green":"text-my_red"}
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

type CounterProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
};

export function Counter({ count, onIncrement, onDecrement, onReset }: CounterProps) {
  return (
    <>
      <div className="card w-100 flex flex-col items-center">
        <div> <h2> Counter: {count}</h2> </div>
        <div>
          <button className="btn_plus" onClick={onIncrement}>+</button>
          <button className="btn_minus" onClick={onDecrement}>-</button>
          <button className="btn_reset" onClick={onReset}>Reset</button>
        </div>
      </div>

      <div className="toggle">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 
              peer-checked:after:translate-x-full peer-checked:after:border-white 
              after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
              after:bg-white after:border-gray-300 after:border after:rounded-full 
              after:h-5 after:w-5 after:transition-all relative transition-colors"></div>
          <span className="ml-3 text-sm font-medium text-gray-900">Toggle me</span>
        </label>
      </div>

     <Button>Primary</Button>
            <Button severity="secondary">Secondary</Button>
            <Button severity="success">Success</Button>
            <Button severity="info">Info</Button>
      <InputText />
    </>

  );
}