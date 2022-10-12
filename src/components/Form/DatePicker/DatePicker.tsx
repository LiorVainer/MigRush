import classes from "./date-picker.module.scss";
import { DatePicker as AntdDatePicker, DatePickerProps as AntdDatePickerProps } from "antd";
import { useAntdFormik } from "../../../hooks/useAntdFormik.hooks";
import { Moment } from "moment";
import moment from "moment";

export type DatePickerProps = AntdDatePickerProps & {
  name: string;
  label?: string;
  required?: boolean;
};

export const DatePicker = ({ name, required, label, ...props }: DatePickerProps) => {
  const { field, error, status, formik } = useAntdFormik(name);

  const onChange: DatePickerProps["onChange"] = (date, _dateString) => {
    formik.setFieldValue(name, date);
  };

  return (
    <div className={classes.field}>
      {label && (
        <span className={classes.label}>
          {label}
          {required && <span className={classes.requiredMark}> *</span>}
        </span>
      )}
      <AntdDatePicker
        name={field.name}
        value={moment(field.value)}
        onBlur={field.onBlur}
        onChange={onChange}
        format={"DD/MM/YYYY"}
        status={status}
        allowClear
        {...props}
      />
      {error && <span className={classes.error}>{error}</span>}
    </div>
  );
};
