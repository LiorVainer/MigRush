import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { FC, JSXElementConstructor, ReactElement } from "react";
import classes from "./steps.module.scss";

export interface Step {
  content: FC;
}

export interface StepsProps {
  steps: Step[];
  current: number;
}

export const Steps: React.FC<StepsProps> = ({ steps, current }) => {
  return (
    <div className={classes.steps}>
      {steps.map((_step, index) => (
        <div key={index} className={clsx(classes.step, { [classes.current]: current === index })}>
          {current <= index ? index + 1 : <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>}
        </div>
      ))}
    </div>
  );
};
