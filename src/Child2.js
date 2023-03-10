import React from "react";
import styles from "./Parent.module.css";

const Child2 = () => {
  console.log("Child2 Re-rendered");
  return (
    <div className={styles.child}>
      <div> I am Child 2 </div>
      <div> Static Content </div>
    </div>
  );
};
export default React.memo(Child2);
