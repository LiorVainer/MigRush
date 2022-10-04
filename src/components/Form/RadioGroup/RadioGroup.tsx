import classes from "./radio-group.module.scss";
import { Radio, RadioGroupProps as AntdRadioGroupProps } from "antd";
import { useAntdFormik } from "../../../hooks/useAntdFormik.hooks";

export interface RadioProps {
  value: string;
  label?: string;
}

export interface RadioGroupProps extends Omit<AntdRadioGroupProps, "options"> {
  name: string;
  label?: string;
  required?: boolean;
  options: RadioProps[];
}

export const RadioGroup = ({ name, required, label, options, ...props }: RadioGroupProps) => {
  const { field, error } = useAntdFormik(name);

  return (
    <div className={classes.field}>
      {label && (
        <span className={classes.label}>
          {label}
          {required && <span className={classes.requiredMark}> *</span>}
        </span>
      )}
      <Radio.Group
        buttonStyle="solid"
        optionType="button"
        name={field.name}
        value={field.value}
        onBlur={field.onBlur}
        onChange={field.onChange}
        {...props}
      >
        {options.map((option) => (
          <Radio key={option.value} value={option.value}>
            {option.label ?? option.value}
          </Radio>
        ))}
      </Radio.Group>
      {error && <span className={classes.error}>{error}</span>}
    </div>
  );
};
