import { categoriesActions, useGetcategories } from 'features/index';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Container,
  HeadingWrap,
  Inputs,
  Modal,
  PageWrapper,
  useAppDispatch,
  useAppSelector,
  useToggle,
} from 'shared/index';
import { columns } from './columns';
import { BottomWrap, SortBar } from 'widgets/index';
import {
  handleLimitPage,
  onArrowClick,
  onPageClick,
  onSortClick,
} from './models';
import { CategoriesItem, ModalCategory } from 'entities/index';
import { MdOutlineAdd } from 'react-icons/md';

const Categories = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('users');
  const { name, sortBy, order, limit, page } = useAppSelector(
    state => state.categoriesState
  );
  const { categories, mutate } = useGetcategories({
    name,
    sortBy,
    order,
    limit,
    page,
  });

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(categoriesActions.setSearch(e.target.value));
  };
  const { isOpen, toggle } = useToggle();
  return (
    <Container $flexDirection="column">
      <Modal isOpen={isOpen} closeModal={toggle}>
        <ModalCategory mutate={mutate} close={toggle} />
      </Modal>
      <HeadingWrap>
        <h2>{t('users')}</h2>
        <Button onClick={toggle}>
          <MdOutlineAdd />
          {t('create')}
        </Button>
      </HeadingWrap>
      <PageWrapper>
        <Container $padding="20px">
          <Inputs.SearchInput visibleBorder value={name} onChange={onSearch} />
        </Container>
        <SortBar
          columns={columns}
          onSort={onSortClick}
          onToggleOrder={onArrowClick}
          currentSortKey={sortBy}
          currentOrder={order}
        />
        <Container as="ul" $flexDirection="column">
          {categories?.docs.map(item => (
            <CategoriesItem item={item} key={item._id} mutate={mutate} />
          ))}
        </Container>
        <BottomWrap
          listLength={categories?.docs.length || 0}
          totalCount={categories?.totalCount || 0}
          showCount={limit}
          onPageChange={onPageClick}
          initialPage={page}
          changeShowCount={handleLimitPage}
        />
      </PageWrapper>
    </Container>
  );
};
export default Categories;
