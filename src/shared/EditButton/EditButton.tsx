import { ButtonWrap } from './styles';
import { MdOutlineEdit } from 'react-icons/md';
import { IconType } from 'react-icons';

export const EditButton = ({
  link,
  EditIcon,
}: {
  link: string;
  EditIcon?: IconType;
}) => {
  return (
    <ButtonWrap to={link}>
      {EditIcon ? <EditIcon /> : <MdOutlineEdit />}
    </ButtonWrap>
  );
};
