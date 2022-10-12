import classes from "./input.module.scss";
import { Input as AntdInput, InputProps as AntdInputProps } from "antd";
import { useAntdFormik } from "../../../hooks/useAntdFormik.hooks";

export interface InputProps extends AntdInputProps {
  name: string;
  label?: string;
}

export const Input = ({ name, required, label, ...props }: InputProps) => {
  const { field, error, status } = useAntdFormik(name);

  return (
    <div className={classes.field}>
      {label && (
        <span className={classes.label}>
          {label}
          {required && <span className={classes.requiredMark}> *</span>}
        </span>
      )}
      <AntdInput
        name={field.name}
        value={field.value}
        onBlur={field.onBlur}
        onChange={field.onChange}
        required={required}
        status={status}
        allowClear
        {...props}
      />
      {error && <span className={classes.error}>{error}</span>}
    </div>
  );
};
