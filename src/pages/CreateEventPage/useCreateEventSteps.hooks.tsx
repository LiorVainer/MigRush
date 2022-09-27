import { message } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Steps } from "../../components/Steps";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";

export const steps = [
  {
    content: FirstStep,
  },
  {
    content: SecondStep,
  },
];

export const useCreateEventSteps = () => {
  const [current, setCurrent] = useState(0);

  const nextFunction = useCallback(() => {
    if (current <= steps.length - 2) setCurrent(current + 1);
  }, [current]);

  const showNext = useMemo(() => current <= steps.length - 2, [current]);
  const showPrev = useMemo(() => current >= 1, [current]);

  const showDone = useMemo(() => current === steps.length - 1, [current]);
  const doneFunction = useCallback(() => {
    message.success("Done!");
  }, [current]);

  const prevFunction = useCallback(() => {
    if (current >= 1) setCurrent(current - 1);
  }, [current]);

  const ContentComponent = useMemo(() => steps[current].content, [current]);

  const StepsComponent = () => <Steps current={current} steps={steps}></Steps>;

  return {
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
