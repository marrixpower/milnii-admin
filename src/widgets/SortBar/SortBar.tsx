import { SortBarList, StyledLi, SortBarText } from 'shared/index';
import { TSortBarProps } from './types';
import { useTranslation } from 'react-i18next';

export const SortBar = ({
  columns,
  currentSortKey,
  currentOrder,
  onSort,
  onToggleOrder,
  element,
}: TSortBarProps) => {
  const { t } = useTranslation();
  return (
    <SortBarList>
      {columns.map((column, index) => {
        const isElement = !!column?.isElement;
        return !isElement ? (
          <StyledLi key={index} $minWidth={column.minWidth}>
            {column.isSortable ? (
              <SortBarText
                active={currentSortKey === column.sortKey}
                asc={currentOrder === 1}
                label={t(column.labelKey)}
                onLabelClick={() =>
                  column.sortKey ? onSort(column.sortKey) : null
                }
                onArrowClick={() => onToggleOrder(column.sortKey || '')}
              />
            ) : (
              t(column.labelKey)
            )}
          </StyledLi>
        ) : (
          <StyledLi key={index} $minWidth={column.minWidth}>
            {element || null}
          </StyledLi>
        );
      })}
    </SortBarList>
  );
};
