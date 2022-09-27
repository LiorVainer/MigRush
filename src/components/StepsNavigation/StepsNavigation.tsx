import { faArrowLeft, faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { StepNavMetadata, StepsNavMetadata } from "../../types/steps.types";
import classes from "./steps-navigation.module.scss";

export interface StepsNavigationProps {
  navigation: StepsNavMetadata;
}

export const StepsNavigation: React.FC<StepsNavigationProps> = ({ navigation }) => {
  const { done, next, prev } = navigation;

  return (
    <div className={classes.nav}>
      {next.show && (
        <button
          className={clsx(classes.btn, classes.next)}
          onClick={next.do as React.MouseEventHandler<HTMLButtonElement>}
        >
          <span>Next</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      )}
      {prev.show && (
        <button
          className={clsx(classes.btn, classes.prev)}
          onClick={prev.do as React.MouseEventHandler<HTMLButtonElement>}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Prev</span>
        </button>
      )}
      {done.show && (
        <button
          className={clsx(classes.btn, classes.next)}
          onClick={done.do as React.MouseEventHandler<HTMLButtonElement>}
        >
          <span>Done</span>
          <FontAwesomeIcon icon={faCheck} />
        </button>
      )}
    </div>
  );
};
