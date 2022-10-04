import { Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useFormikContext } from "formik";
import { DatePicker, DatePickerProps, Input, TimePicker } from "formik-antd";
import moment, { Moment } from "moment";
import { useState } from "react";
import { AutocompleteWrapper } from "../../../components/AutocompleteWrapper/AutocompleteWrapper";
import { EventFormLabels, EventType } from "../../../constants/event.const";
import classes from "./second-step.module.scss";

export interface SecondStepProps {}

export const SecondStep: React.FC<SecondStepProps> = () => {
  const [value, setValue] = useState("");

  const formik = useFormikContext();

  console.log(formik.values);

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const onChangeTime = (time: Moment | null, timeString: string) => {
    console.log(time, timeString);
  };

  return (
    <>
      <div className={classes.field}>
        <span>{EventFormLabels.location}</span>
        <Form.Item fieldId="location" hasFeedback>
          <Input name="location" required allowClear />
        </Form.Item>
      </div>
      <div className={classes.field}>
        <p>{EventFormLabels.date}</p>
        <DatePicker name="date" onChange={onChange} allowClear />
      </div>
      <div className={classes.field}>
        <p>{EventFormLabels.time}</p>
        <TimePicker name="time" onChange={onChangeTime} defaultOpenValue={moment("00:00:00", "HH:mm:ss")} />
      </div>
    </>
  );
};
