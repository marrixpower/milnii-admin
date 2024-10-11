import { Pagination } from 'shared';
import { BottomWrapStyled, SelectLimit, SelectLimitWrap } from './styled';
import { TBottomWrapProps } from './types';
import { useTranslation } from 'react-i18next';

export const BottomWrap = ({
  forcePage,
  onPageChange,
  initialPage,
  showCount,
  changeShowCount,
  totalCount,
  listLength,
  onlyСouples,
}: TBottomWrapProps) => {
  const totalPage = Math.ceil(totalCount / +showCount);
  const { t } = useTranslation('users');

  const getStartRange = (
    initialPage: number,
    showCount: string,
    totalPage: number
  ): number => {
    if (initialPage === 1) return 1;
    if (initialPage === totalPage) return (initialPage - 1) * +showCount + 1;
    return initialPage * +showCount + 1 - +showCount;
  };

  const getEndRange = (
    initialPage: number,
    showCount: string,
    listLength: number,
    totalCount: number,
    totalPage: number
  ): number => {
    if (initialPage === 1) return listLength;
    if (initialPage === totalPage) return totalCount;
    return +showCount * initialPage;
  };

  const startRange: number = getStartRange(initialPage, showCount, totalPage);
  const endRange: number = getEndRange(
    initialPage,
    showCount,
    listLength,
    totalCount,
    totalPage
  );

  return (
    <>
      {totalPage !== 0 && (
        <BottomWrapStyled>
          <div>
            {t('showing')} {startRange}-{endRange} {t('of')} {totalCount}{' '}
            {t('items')}
          </div>
          {totalPage >= 2 && (
            <Pagination
              forcePage={forcePage}
              initialPage={initialPage - 1}
              pageCount={totalPage}
              onPageChange={onPageChange}
            />
          )}

          <SelectLimitWrap>
            {totalCount > 5 && (
              <>
                <label htmlFor="selectLimit">{t('show')}</label>
                <SelectLimit
                  id="selectLimit"
                  value={showCount}
                  onChange={changeShowCount}
                >
                  {onlyСouples ? (
                    <>
                      <option value="8" label="8"></option>
                      <option value="12" label="12"></option>
                      <option value="16" label="16"></option>
                      <option value="20" label="20"></option>
                    </>
                  ) : (
                    <>
                      <option value="5" label="5"></option>
                      <option value="10" label="10"></option>
                      <option value="15" label="15"></option>
                      <option value="20" label="20"></option>
                    </>
                  )}
                </SelectLimit>
                {t('items')}
              </>
            )}
          </SelectLimitWrap>
        </BottomWrapStyled>
      )}
    </>
  );
};
