import { FormikProvider } from "formik";

import { StepsNavigation } from "../../components/StepsNavigation";

import classes from "./create-event-page.module.scss";
import { useCreateEventSteps } from "./useCreateEventSteps.hooks";

export interface CreateEventPageProps {}

export const CreateEventPage: React.FC<CreateEventPageProps> = () => {
  const { StepsComponent, ContentComponent, navigation, formik } = useCreateEventSteps();

  console.log(formik.errors);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>New Event</h1>
      <FormikProvider value={formik}>
        <ContentComponent />
        <StepsComponent />
        <StepsNavigation navigation={navigation} />
      </FormikProvider>
    </div>
  );
};
