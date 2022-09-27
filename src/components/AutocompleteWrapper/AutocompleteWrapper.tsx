import { AutoComplete, AutoCompleteProps } from "antd";
import { DefaultOptionType } from "antd/lib/select";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { EventType } from "../../constants/event.const";
import { createOptionsFromStringArray } from "../../utils/autocomplete.utils";

export interface AutocompleteWrapperProps extends Omit<AutoCompleteProps, "options"> {
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

  return <AutoComplete status={status} options={acOptions} onChange={onChange} onSearch={handleSearch} {...props} />;
};
