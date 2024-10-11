import { TUser } from 'features/users/api/types';
import { UserItemStyled } from './styled';

import {
  EditButton,
  CustomImage,
  formattedDate,
  capitalizeFirstLetter,
} from 'shared/index';
import { FaUserCircle } from 'react-icons/fa';

type TProps = {
  item: TUser;
};

const imgPath = import.meta.env.VITE_IMG_URL;

export const UserItem = ({ item }: TProps) => {
  const src = item.image ? `${imgPath}/user/${item.image}` : '';

  return (
    <UserItemStyled>
      <div>
        <span>
          <CustomImage
            defaultIcon={<FaUserCircle />}
            src={src}
            width="50px"
            height="50px"
            borderRaduis="50%"
          />
        </span>
        {item.name}
      </div>
      <div>{formattedDate(item.createdAt)}</div>
      <div>{formattedDate(item.weddingDate, 'dd MMM, yyyy')}</div>
      <div>{item.country}</div>
      <div>{capitalizeFirstLetter(item.role)}</div>
      <div>
        <EditButton link={`/users/${item._id}`} />
      </div>
    </UserItemStyled>
  );
};
