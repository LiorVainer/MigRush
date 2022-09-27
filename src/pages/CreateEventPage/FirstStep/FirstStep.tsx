import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
import { AutocompleteWrapper } from "../../../components/AutocompleteWrapper/AutocompleteWrapper";
import { EventFormLabels, EventFormPlaceHolders, EventType } from "../../../constants/event.const";
import classes from "./first-step.module.scss";

export interface FirstStepProps {}

export const FirstStep: React.FC<FirstStepProps> = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <div className={classes.field}>
        <span>{EventFormLabels.title}</span>
        <Input required allowClear />
      </div>
      <div className={classes.field}>
        <p>{EventFormLabels.type}</p>
        <AutocompleteWrapper
          setValue={setValue}
          value={value}
          options={Object.values(EventType)}
          strictStatus
          allowClear
        />
      </div>
      <div className={classes.field}>
        <p>{EventFormLabels.description}</p>
        <TextArea rows={4} required allowClear placeholder={EventFormPlaceHolders.description} />
      </div>
    </>
  );
};
