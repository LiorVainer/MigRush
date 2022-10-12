import classes from "./time-picker.module.scss";
import { TimePicker as AntdTimePicker, TimePickerProps as AntdTimePickerProps } from "antd";
import { useAntdFormik } from "../../../hooks/useAntdFormik.hooks";
import { Moment } from "moment";
import moment from "moment";

export interface TimePickerProps extends AntdTimePickerProps {
  name: string;
  label?: string;
  required?: boolean;
}

export const TimePicker = ({ name, required, label, ...props }: TimePickerProps) => {
  const { field, error, status, formik } = useAntdFormik(name);

  const onChange = (time: Moment | null, _timeString: string) => {
    formik.setFieldValue(name, time?.toDate());
  };

  return (
    <div className={classes.field}>
      {label && (
        <span className={classes.label}>
          {label}
          {required && <span className={classes.requiredMark}> *</span>}
        </span>
      )}
      <AntdTimePicker
        name={field.name}
        value={moment(field.value)}
        onBlur={field.onBlur}
        onChange={onChange}
        format={"HH:mm"}
        status={status}
        allowClear
        {...props}
      />
      {error && <span className={classes.error}>{error}</span>}
    </div>
  );
};
