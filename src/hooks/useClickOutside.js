import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hideModal } from '../actions/modals';

export const useClickOutside = (ref) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        dispatch(hideModal());
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};
