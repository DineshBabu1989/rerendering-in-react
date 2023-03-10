import { useCallback, useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import styles from "./Parent.module.css";

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleReset = useCallback((count) => {
    setCount(count);
  }, []);

  return (
    <>
      <div className={styles.parentContainer}>
        <h1> Parent with 3 Children </h1>
        <button
          className={styles.counterBtn}
          onClick={() => setCount((count) => count + 1)}
        >
          Increment Counter (Child 1)
        </button>
        <div>
          <Child1 value={count} />
          <Child2 />
          <Child3 reset={handleReset} />
        </div>
      </div>
    </>
  );
};

export default Parent;
