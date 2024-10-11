import {
  bussinessSliceActions,
  useGetBusiness,
} from 'features/businessVendors';
import { ChangeEvent } from 'react';
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
import { BusinessItem } from 'entities/index';

const BusinessVendors = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('users');
  const { name, sortBy, order, limit, page } = useAppSelector(
    state => state.vendoreState
  );
  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(bussinessSliceActions.setSearch(e.target.value));
  };
  const { businessData } = useGetBusiness({
    name,
    sortBy,
    order,
    limit,
    page,
  });
  return (
    <Container $flexDirection="column">
      <HeadingWrap>
        <h2>{t('sidebar:businessVendors')}</h2>
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
          {businessData?.docs.map(item => (
            <BusinessItem item={item} key={item._id} />
          ))}
        </Container>
        <BottomWrap
          listLength={businessData?.docs.length || 0}
          totalCount={businessData?.totalCount || 0}
          showCount={limit}
          onPageChange={onPageClick}
          initialPage={page}
          changeShowCount={handleLimitPage}
        />
      </PageWrapper>
    </Container>
  );
};
export default BusinessVendors;
