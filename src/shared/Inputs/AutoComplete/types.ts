import { PropsValue, SingleValue } from 'react-select';

export type LatLng = {
  lat: number;
  lng: number;
};

export type AutocompleteResponse = {
  description: string;
  place_id: string;
  structured_formatting: { main_text: string; secondary_text: string };
  terms: { offset: number; value: string }[];
  types: string[];
};

export type ValueAutocomplete = {
  label: string;
  value: AutocompleteResponse | string;
};

export type AutoCompleteProps = {
  width?: string;
  value?: PropsValue<ValueAutocomplete> | undefined;
  onChange: (v: SingleValue<ValueAutocomplete>) => void;
  error?: string;
  label?: string;
  isClearable?: boolean;
  placeholder?: string;
  autoCompleteRequestType?: string[];
  countryCode?: string[];
  onlySity?: boolean;
  location?: LatLng;
  radius?: number;
};
