import { store } from 'app/lib';
import { bussinessSliceActions } from 'features';
const { dispatch } = store;

export const onSortClick = (sortingBy: string) => {
  const { sortBy, order } = store.getState().vendoreState;
  dispatch(bussinessSliceActions.setSort(sortingBy));
  if (sortBy === sortingBy) {
    if (order === 1) {
      dispatch(bussinessSliceActions.setOrder(-1));
    } else dispatch(bussinessSliceActions.setOrder(1));
  }
};

export const onArrowClick = (sortingBy: string) => {
  const { order } = store.getState().vendoreState;
  dispatch(bussinessSliceActions.setSort(sortingBy));
  if (order === 1) {
    dispatch(bussinessSliceActions.setOrder(-1));
  } else dispatch(bussinessSliceActions.setOrder(1));
};

export const handleLimitPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
  dispatch(bussinessSliceActions.changeLimit(e.target.value));
};

export const onPageClick = ({ selected }: { selected: number }) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  dispatch(bussinessSliceActions.changePage(selected + 1));
};
