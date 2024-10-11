import { deleteCategory } from 'features/categories';
import { CategoriesItemStyled, DeleteButton, ViewButton } from './styled';
import { formattedDate } from 'shared/utils';
import { Container, CustomImage, Modal, useToggle } from 'shared/index';
import { FiEye } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { DeleteModal } from 'widgets/index';
import { TProps } from './types';
import { ModalCategory } from './ModalCategory';

const imgPath = import.meta.env.VITE_IMG_URL;

export const CategoriesItem = ({ item, mutate }: TProps) => {
  const src = item.image ? `${imgPath}/category/${item.image}` : '';

  const name =
    item.name?.find(el => el.lang === 'en')?.value || item?.name?.[0]?.value;

  const { isOpen, toggle } = useToggle();
  const { isOpen: isOpenDelete, toggle: toggleDelete } = useToggle();

  const onDelete = async () => {
    await deleteCategory(item._id);
    mutate();
  };

  return (
    <>
      <Modal isOpen={isOpenDelete} closeModal={toggleDelete}>
        <DeleteModal close={toggleDelete} onDeleteClick={onDelete} />
      </Modal>
      <Modal isOpen={isOpen} closeModal={toggle}>
        <ModalCategory item={item} mutate={mutate} close={toggle} />
      </Modal>
      <CategoriesItemStyled>
        <div>
          <span>
            <CustomImage src={src} width="50px" height="50px" />
          </span>
          {name}
        </div>
        <div>{formattedDate(item.createdAt)}</div>
        <div>
          <Container $justifyContent="flex-end" width="auto">
            <DeleteButton onClick={toggleDelete}>
              <RiDeleteBin6Line />
            </DeleteButton>
            <ViewButton onClick={toggle}>
              <FiEye />
            </ViewButton>
          </Container>
        </div>
      </CategoriesItemStyled>
    </>
  );
};
