import { InputProps } from "antd";
import { useField, useFormikContext } from "formik";
import { useMemo } from "react";

export const useAntdFormik = <FormikType, FieldType = any>(name: string) => {
  const formik = useFormikContext<FormikType>();
  const [field, meta, helpers] = useField<FieldType>(name);

  const status = useMemo(() => (meta.touched && meta.error ? "error" : "") as InputProps["status"], [meta]);
  const error = useMemo(() => (meta.touched && meta.error ? meta.error : undefined), [meta]);

  return {
    formik,
    field,
    meta,
    helpers,
    status,
    error,
  };
};
