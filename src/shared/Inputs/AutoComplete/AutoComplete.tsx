import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import { AutoCompleteProps, AutocompleteResponse } from './types';
import { ErrorMessage, Label, selectStyles } from './styled';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

export const AutoComplete = ({
  width,
  value = undefined,
  onChange,
  error,
  label,
  isClearable = false,
  placeholder,
  autoCompleteRequestType,
  countryCode,
  onlySity,
  location,
  radius,
}: AutoCompleteProps) => {
  const apiKEY = import.meta.env.VITE_GOOGLE_API_KEY;

  const { t } = useTranslation('users');

  const editAddress = (
    v: { label: string; value: AutocompleteResponse } | null
  ) => {
    const resAddressArray = v?.label.split(',').map(item => item.trim());

    const newAddress =
      resAddressArray && resAddressArray?.length < 3
        ? resAddressArray?.join(',')
        : resAddressArray &&
          `${resAddressArray[0]}, ${
            resAddressArray[resAddressArray.length - 1]
          }`;
    onlySity
      ? onChange({ label: newAddress || '', value: v?.value || '' })
      : onChange(v);
  };
  const theme = useTheme();

  return (
    <div>
      <Label className="label">{label}</Label>
      <GooglePlacesAutocomplete
        apiOptions={{ language: 'en' }}
        autocompletionRequest={{
          componentRestrictions: {
            country: countryCode || [],
          },
          types: autoCompleteRequestType,
          location: location,
          radius: radius,
        }}
        selectProps={{
          isClearable: isClearable,
          menuPortalTarget: document.body,
          noOptionsMessage: () => t('noOptionsAvailable'),
          value,
          onChange: editAddress,
          placeholder: placeholder || t('users:location'),
          styles: {
            control: (provided, state) => ({
              ...provided,
              width,
              height: '44px',
              borderRadius: '8px',
              boxShadow: 'none',
              border: !error
                ? state.isFocused || state.menuIsOpen
                  ? `1px solid ${theme.colors.borderInputGrey}`
                  : undefined
                : `1px solid ${theme.colors.errorRed}`,
              '&:hover': {
                border:
                  state.isFocused || state.menuIsOpen
                    ? `1px solid ${theme.colors.colorText}`
                    : undefined,
              },
            }),
            ...selectStyles,
          },
        }}
        apiKey={apiKEY}
        debounce={300}
        minLengthAutocomplete={2}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};
