import React from "react";
import styles from "./Parent.module.css";

const Child3 = (props) => {
  console.log("Child3 Re-rendered");
  return (
    <div className={styles.child}>
      <div> I am Child 3</div>
      <button className={styles.counterBtn} onClick={() => props.reset(0)}>
        Reset
      </button>
    </div>
  );
};
export default React.memo(Child3);
