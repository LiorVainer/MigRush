import { DatePicker, DatePickerProps, Input, TimePicker } from "antd";
import TextArea from "antd/lib/input/TextArea";
import moment, { Moment } from "moment";
import { useState } from "react";
import { AutocompleteWrapper } from "../../../components/AutocompleteWrapper/AutocompleteWrapper";
import { EventFormLabels, EventType } from "../../../constants/event.const";
import classes from "./second-step.module.scss";

export interface SecondStepProps {}

export const SecondStep: React.FC<SecondStepProps> = () => {
  const [value, setValue] = useState("");

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
        <Input required allowClear />
      </div>
      <div className={classes.field}>
        <p>{EventFormLabels.date}</p>
        <DatePicker onChange={onChange} allowClear />
      </div>
      <div className={classes.field}>
        <p>{EventFormLabels.time}</p>
        <TimePicker onChange={onChangeTime} defaultOpenValue={moment("00:00:00", "HH:mm:ss")} />
      </div>
    </>
  );
};
