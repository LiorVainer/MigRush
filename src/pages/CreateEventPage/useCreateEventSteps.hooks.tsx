import { message } from "antd";
import { FormikValues, useFormik, FormikHelpers } from "formik";
import { useCallback, useMemo, useState } from "react";
import { Steps } from "../../components/Steps";
import { FirstStepEventSchema, newEventInitialValues, SecondStepEventSchema } from "../../constants/event-form.const";
import { validateForm as validateAndSubmitForm } from "../../utils/formik/validate.utils";
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
  const validationSchemas = {
    [0]: ZodFormikSchemaAdapter(FirstStepEventSchema),
    [1]: ZodFormikSchemaAdapter(SecondStepEventSchema),
  };

  const [current, setCurrent] = useState(0);
  const validationScheam = useMemo(() => validationSchemas[current as 0 | 1], [current]);

  const formik = useFormik({
    initialValues: newEventInitialValues,
    validationSchema: validationScheam,
    onSubmit: function (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>): void | Promise<any> {
      message.success("Success");
      throw new Error("Function not implemented.");
    },
  });

  const nextFunction = useCallback(async () => {
    const { isValid } = await validateAndSubmitForm(formik);

    if (isValid) {
      if (current <= steps.length - 2) setCurrent(current + 1);
    } else {
      message.error("Unvalid");
    }
  }, [current]);

  const showNext = useMemo(() => current <= steps.length - 2, [current]);
  const showPrev = useMemo(() => current >= 1, [current]);
  const showDone = useMemo(() => current === steps.length - 1, [current]);

  const doneFunction = useCallback(async () => {
    const { isValid } = await validateAndSubmitForm(formik);

    if (isValid) {
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
