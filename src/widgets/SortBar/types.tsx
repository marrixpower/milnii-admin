export type TSortBarProps = {
  columns: {
    labelKey: string;
    sortKey?: string;
    isSortable: boolean;
    minWidth: string;
    isElement?: boolean;
  }[];
  currentSortKey: string;
  currentOrder: 1 | -1;
  onSort: (key: string) => void;
  onToggleOrder: (sortingBy: string) => void;
  element?: React.ReactNode;
};
