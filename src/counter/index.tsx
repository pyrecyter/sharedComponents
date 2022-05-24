import React, { useEffect, useState } from "react";

type CounterPorps = {
  initialValue: number;
};

const Counter = (props: CounterPorps) => {
  const [count, setCount] = useState(props.initialValue);
  useEffect(() => {
    if (props.initialValue) {
      setCount(props.initialValue);
    }
  }, [props.initialValue]);
  const increse = () => {
    setCount(count + 1);
  };
  const decrese = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button className="btn-green" onClick={increse}>
        +
      </button>
      <span style={{ padding: "20px" }}>{count}</span>
      <button className="btn-red" onClick={decrese}>
        -
      </button>
    </div>
  );
};

export default Counter;
