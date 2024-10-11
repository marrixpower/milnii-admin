import { TBussinessItem } from 'features/index';
import { BusssinessItemStyled } from './styled';
import { EditButton } from 'shared/index';

type TProps = {
  item: TBussinessItem;
};

export const BusinessItem = ({ item }: TProps) => {
  return (
    <BusssinessItemStyled>
      <div>{item?.owner?.name}</div>
      <div>{item.name}</div>
      <div>
        {item.city}, {item.address}
      </div>
      <div>{item.phone}</div>
      <div>{item.category.name?.find(el => el.lang === 'en')?.value}</div>
      <div>
        <EditButton link={`/business-vendors/${item._id}`} />
      </div>
    </BusssinessItemStyled>
  );
};
