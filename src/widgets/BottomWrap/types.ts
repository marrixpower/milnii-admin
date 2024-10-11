import { ChangeEvent } from "react";

export type TBottomWrapProps = {
  forcePage?: number;
  pageCount?: number;
  onPageChange?: (selectedItem: { selected: number }) => void;
  initialPage: number;
  showCount: string;
  changeShowCount?: (e: ChangeEvent<HTMLSelectElement>) => void;
  totalCount: number;
  listLength: number;
  onlyСouples?: boolean;
};
