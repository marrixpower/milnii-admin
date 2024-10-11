import { BsCheckLg } from 'react-icons/bs';
import { CheckBoxWrap } from './styled';
type TProps = {
  value?: boolean;
  onChange?: (value: boolean) => void;
};
export const Checkbox = ({ value, onChange }: TProps) => {
  return (
    <CheckBoxWrap
      onClick={onChange ? () => onChange(!value) : undefined}
      id={value ? 'checked' : 'uncheked'}
    >
      {value ? <BsCheckLg /> : ''}
    </CheckBoxWrap>
  );
};
