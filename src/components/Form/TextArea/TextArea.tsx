import classes from "./text-area.module.scss";

import { Input as AntdInput, InputProps as AntdInputProps, FormItemProps } from "antd";
import { useField, useFormikContext } from "formik";
import { useMemo } from "react";
import { useAntdFormik } from "../../../hooks/useAntdFormik.hooks";

const { TextArea: AntdTextArea } = AntdInput;

export interface TextAreaProps {
  name: string;
  rows: number;
  maxLength?: number;
  label?: string;
  required?: boolean;
  showCount?: boolean;
}

export const TextArea = ({ name, required, label, rows, maxLength, showCount, ...props }: TextAreaProps) => {
  const { field, error, status } = useAntdFormik(name);

  return (
    <div className={classes.field}>
      {label && (
        <span className={classes.label}>
          {label}
          {required && <span className={classes.requiredMark}> *</span>}
        </span>
      )}
      <AntdTextArea
        name={field.name}
        value={field.value}
        onBlur={field.onBlur}
        onChange={field.onChange}
        required={required}
        status={status}
        showCount={showCount}
        maxLength={maxLength}
        rows={rows}
        allowClear
        {...props}
      />
      {error && <span className={classes.error}>{error}</span>}
    </div>
  );
};
