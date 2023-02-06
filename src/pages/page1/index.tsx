import { useEffect } from 'react';

import Box from '@/components/compounds/Box';
import { useAppDispatch, useAppSelector } from '@/hooks/customReduxHooks';
import i18n from '@/i18n';
import { loadingSelector, timeSelector } from '@/stores/app/selectors';
import { fetchSomeData } from '@/stores/app/thunks';

const Page1 = () => {
  const time = useAppSelector(timeSelector);
  const loading = useAppSelector(loadingSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSomeData());
  }, [dispatch]);

  if (loading) {
    return (
      <Box content={i18n.t('common.loading')} />
    );
  }

  return (
    <Box content={`${i18n.t('common.result')}: ${time}`} />
  );
};

export default Page1;
