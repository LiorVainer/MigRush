import { DefaultOptionType } from "antd/lib/select";
import { AutoComplete, AutoCompleteProps } from "formik-antd";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { EventType } from "../../constants/event.const";
import { createOptionsFromStringArray } from "../../utils/form/autocomplete.utils";

export interface AutocompleteWrapperProps extends Omit<AutoCompleteProps, "options"> {
  name: string;
  options: string[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value?: string;
  strictStatus?: boolean;
}

export const AutocompleteWrapper: React.FC<AutocompleteWrapperProps> = ({
  options,
  value,
  strictStatus,
  setValue,
  name,
  ...props
}) => {
  const [acOptions, setAcOptions] = useState<{ value?: string; label: string }[]>(
    createOptionsFromStringArray(options)
  );

  const onChange = useCallback((data: string) => {
    setValue(data);
  }, []);

  const handleSearch = useCallback((value: string) => {
    if (value === "") {
      setAcOptions(createOptionsFromStringArray(Object.values(EventType)));
    } else {
      setAcOptions(acOptions.filter((option) => option.label.toLowerCase().startsWith(value.toLowerCase())));
    }
  }, []);

  const status = useMemo(
    () => (strictStatus && value ? (options.includes(value) ? "" : "error") : ""),
    [options, strictStatus]
  );

  return (
    <AutoComplete
      name={name}
      status={status}
      options={acOptions}
      onChange={onChange}
      onSearch={handleSearch}
      {...props}
    />
  );
};
