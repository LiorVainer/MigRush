import { useFormik } from "formik";

export const validateForm = async (formik: ReturnType<typeof useFormik>) => {
  const errors = await formik.validateForm();
  const errorsAmount = Object.keys(errors).length;
  const isValid = errorsAmount === 0;
  const isError = !isValid;

  if (isError) await formik.submitForm();

  return {
    isValid,
    isError,
    errors,
    errorsAmount,
  };
};
