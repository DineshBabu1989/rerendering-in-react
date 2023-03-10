import styles from "./Parent.module.css";

const Child1 = (props) => {
  console.log("Child1 Re-rendered");
  return (
    <div className={styles.child}>
      <div>Child 1</div>
      <div>Counter Controlled Component</div>
      <div>{props.value}</div>
    </div>
  );
};
export default Child1;
