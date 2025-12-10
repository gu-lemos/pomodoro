import styles from "./styles.module.css";

type inputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export function Input({ id, type, labelText, ...props }: inputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} id={id} type={type} {...props} />
    </>
  );
}
