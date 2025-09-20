import { useContext } from 'react';
import { StoreContext } from './index';

export const useSelector = (selectorFn) => {
  const { state } = useContext(StoreContext);
  return selectorFn(state);
};
