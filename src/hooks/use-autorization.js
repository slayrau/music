import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { authorize, selectAuth } from 'src/slices/auth';

const useAuthorization = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const redirectUrlRef = useRef(location.pathname + location.search);
  const { accessToken, loading, error } = useSelector(selectAuth);

  useEffect(() => {
    dispatch(authorize());
  }, []);

  useEffect(() => {
    if (accessToken) {
      history.replace(redirectUrlRef.current);
    }
  }, [history, redirectUrlRef, accessToken, loading]);

  return {
    loading,
    error,
  };
};

export default useAuthorization;
