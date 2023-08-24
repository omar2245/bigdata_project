export interface PopulateFormValues {
  year: string;
  city: string;
  district: string;
}

export interface FormProps {
  defaultFormValues: PopulateFormValues;
  onSubmit: (formValues: PopulateFormValues) => void;
}
