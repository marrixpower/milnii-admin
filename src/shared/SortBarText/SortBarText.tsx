import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { StyledSortText } from './styled';
import { SortTextProps } from './type';

export const SortBarText: React.FC<SortTextProps> = ({
  active,
  asc,
  label,
  onLabelClick,
  onArrowClick,
}) => (
  <StyledSortText $active={active} $asc={asc}>
    <p onClick={onLabelClick}>{label}</p>
    <div>
      <MdOutlineKeyboardArrowUp onClick={onArrowClick} />
    </div>
  </StyledSortText>
);
