import { useGetUsers, usersActions } from 'features/users';
import { useTranslation } from 'react-i18next';
import {
  Container,
  HeadingWrap,
  Inputs,
  PageWrapper,
  useAppDispatch,
  useAppSelector,
} from 'shared/index';
import { BottomWrap, SortBar } from 'widgets/index';
import { columns } from './columns';
import {
  handleLimitPage,
  onArrowClick,
  onPageClick,
  onSortClick,
} from './models';
import { UserItem } from 'entities/index';
import { ChangeEvent } from 'react';
const Users = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('users');
  const { name, sortBy, order, limit, page } = useAppSelector(
    state => state.usersState
  );
  const { users } = useGetUsers({
    name,
    sortBy,
    order,
    limit,
    page,
    type: 'user',
  });

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(usersActions.setSearch(e.target.value));
  };
  return (
    <Container $flexDirection="column">
      <HeadingWrap>
        <h2>{t('users')}</h2>
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
          {users?.docs.map(item => (
            <UserItem item={item} key={item._id} />
          ))}
        </Container>
        <BottomWrap
          listLength={users?.docs.length || 0}
          totalCount={users?.totalCount || 0}
          showCount={limit}
          onPageChange={onPageClick}
          initialPage={page}
          changeShowCount={handleLimitPage}
        />
      </PageWrapper>
    </Container>
  );
};

export default Users;
