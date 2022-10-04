import { message } from "antd";
import { FormikValues, useFormik, FormikHelpers } from "formik";
import { useCallback, useMemo, useState } from "react";
import { Steps } from "../../components/Steps";
import { newEventValues } from "../../constants/event.const";
import { EventSchema } from "../../models/event.model";
import { ZodFormikSchemaAdapter } from "../../utils/zod.utils";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";

export const steps = [
  {
    content: FirstStep,
    fields: ["title", "type", "description"],
  },
  {
    content: SecondStep,
    fields: ["title", "type", "description"],
  },
];

export const useCreateEventSteps = () => {
  const formik = useFormik({
    initialValues: newEventValues,
    validationSchema: ZodFormikSchemaAdapter(EventSchema),
    onSubmit: function (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>): void | Promise<any> {
      throw new Error("Function not implemented.");
    },
  });

  const [current, setCurrent] = useState(0);

  const nextFunction = useCallback(async () => {
    const validationsPromises = steps
      .filter((_, index) => index === current)[0]
      .fields?.map(async (field) => {
        return formik.validateField(field);
      });

    const valid = await formik.validateField("title");
    console.log(valid);

    const validations = await Promise.all(validationsPromises);

    console.log(validations);

    const unvalid = validations?.find((validation) => validation !== undefined);
    if (unvalid) {
      message.error("Unvalid");
    } else {
      if (current <= steps.length - 2) setCurrent(current + 1);
    }
  }, [current]);

  const showNext = useMemo(() => current <= steps.length - 2, [current]);
  const showPrev = useMemo(() => current >= 1, [current]);
  const showDone = useMemo(() => current === steps.length - 1, [current]);

  const doneFunction = useCallback(async () => {
    const errors = await formik.validateForm();

    if (Object.keys(errors).length === 0) {
      message.success("Valid!");
    } else {
      message.error("Errors!");
    }
  }, [current, formik.errors]);

  const prevFunction = useCallback(() => {
    if (current >= 1) setCurrent(current - 1);
  }, [current]);

  const ContentComponent = useMemo(() => steps[current].content, [current]);

  const StepsComponent = () => <Steps current={current} steps={steps}></Steps>;

  return {
    formik,
    navigation: {
      next: { do: nextFunction, show: showNext },
      prev: { do: prevFunction, show: showPrev },
      done: {
        do: doneFunction,
        show: showDone,
      },
    },
    current,
    StepsComponent,
    ContentComponent,
  };
};
