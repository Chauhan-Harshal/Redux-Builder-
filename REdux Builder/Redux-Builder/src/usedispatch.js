import { useContext } from 'react';
import { StoreContext } from './index';

export const useDispatch = () => {
  const { dispatch } = useContext(StoreContext);
  return dispatch;
};
