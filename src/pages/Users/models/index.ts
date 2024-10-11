import { store } from 'app/lib';
import { usersActions } from 'features';
const { dispatch } = store;

export const onSortClick = (sortingBy: string) => {
  const { sortBy, order } = store.getState().usersState;
  dispatch(usersActions.setSort(sortingBy));
  if (sortBy === sortingBy) {
    if (order === 1) {
      dispatch(usersActions.setOrder(-1));
    } else dispatch(usersActions.setOrder(1));
  }
};

export const onArrowClick = (sortingBy: string) => {
  const { order } = store.getState().usersState;
  dispatch(usersActions.setSort(sortingBy));
  if (order === 1) {
    dispatch(usersActions.setOrder(-1));
  } else dispatch(usersActions.setOrder(1));
};

export const handleLimitPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
  dispatch(usersActions.changeLimit(e.target.value));
};

export const onPageClick = ({ selected }: { selected: number }) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  dispatch(usersActions.changePage(selected + 1));
};
