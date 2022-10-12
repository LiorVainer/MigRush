import { useFormikContext } from "formik";
import { useState } from "react";
import { DatePicker } from "../../../components/Form/DatePicker";

import { Input } from "../../../components/Form/Input";
import { TimePicker } from "../../../components/Form/TimePicker";
import { EventFormLabels, EventType } from "../../../constants/event.const";
import classes from "./second-step.module.scss";

export interface SecondStepProps {}

export const SecondStep: React.FC<SecondStepProps> = () => {
  return (
    <>
      <Input label={EventFormLabels.location} required allowClear name={"location"} />
      <DatePicker label={EventFormLabels.date} required allowClear name="date" />
      <TimePicker label={EventFormLabels.time} required allowClear name="time" />
    </>
  );
};
