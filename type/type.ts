export interface PopulateFormValues {
  year: string;
  city: string;
  district: string;
}
export interface PopulateInputValues {
  city: string;
  district: string;
}

export interface FormProps {
  formValues: PopulateFormValues;
  setFormValues: React.Dispatch<React.SetStateAction<PopulateFormValues>>;
  inputValue: PopulateInputValues;
  setInputValue: React.Dispatch<React.SetStateAction<PopulateInputValues>>;
  onSubmit: (values: PopulateFormValues) => void;
}

export interface TaiwanInfo {
  name: string;
  district: string[];
}
