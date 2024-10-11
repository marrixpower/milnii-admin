import { store } from 'app/lib';
import { categoriesActions } from 'features';
const { dispatch } = store;

export const onSortClick = (sortingBy: string) => {
  const { sortBy, order } = store.getState().categoriesState;
  dispatch(categoriesActions.setSort(sortingBy));
  if (sortBy === sortingBy) {
    if (order === 1) {
      dispatch(categoriesActions.setOrder(-1));
    } else dispatch(categoriesActions.setOrder(1));
  }
};

export const onArrowClick = (sortingBy: string) => {
  const { order } = store.getState().categoriesState;
  dispatch(categoriesActions.setSort(sortingBy));
  if (order === 1) {
    dispatch(categoriesActions.setOrder(-1));
  } else dispatch(categoriesActions.setOrder(1));
};

export const handleLimitPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
  dispatch(categoriesActions.changeLimit(e.target.value));
};

export const onPageClick = ({ selected }: { selected: number }) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  dispatch(categoriesActions.changePage(selected + 1));
};
