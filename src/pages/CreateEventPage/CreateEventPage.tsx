import { faArrowLeft, faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { StepsNavigation } from "../../components/StepsNavigation";

import classes from "./create-event-page.module.scss";
import { useCreateEventSteps } from "./useCreateEventSteps.hooks";

export interface CreateEventPageProps {}

export const CreateEventPage: React.FC<CreateEventPageProps> = () => {
  const { StepsComponent, ContentComponent, navigation } = useCreateEventSteps();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>New Event</h1>
      <div className={classes.form}>
        <ContentComponent />
      </div>
      <StepsComponent />
      <StepsNavigation navigation={navigation} />
    </div>
  );
};
