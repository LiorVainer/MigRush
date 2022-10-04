import { Field, useFormikContext } from "formik";
import { useState } from "react";
import { AutocompleteWrapper } from "../../../components/AutocompleteWrapper/AutocompleteWrapper";
import { Input } from "../../../components/Form/Input";
import { RadioGroup } from "../../../components/Form/RadioGroup";
import { TextArea } from "../../../components/Form/TextArea";
import { EventFormLabels, EventFormPlaceHolders, EventType } from "../../../constants/event.const";
import { enumToRadioGroupOptions } from "../../../utils/form/radioGroup.utils";
import classes from "./first-step.module.scss";

export interface FirstStepProps {}

export const FirstStep: React.FC<FirstStepProps> = () => {
  return (
    <>
      <Input label={EventFormLabels.title} required name="title"></Input>
      <RadioGroup label={EventFormLabels.type} required name="type" options={enumToRadioGroupOptions(EventType)} />
      <TextArea label={EventFormLabels.description} name="description" rows={4} maxLength={100} showCount />
    </>
  );
};
