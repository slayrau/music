import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import { authorize, selectAuth } from 'src/slices/auth';

const routes = {
  review: 'review',
  album: 'album',
  playlist: 'playlist',
  categories: 'categories',
  search: 'search',
  artist: 'artist',
};

const useAuthorization = () => {
  const history = useHistory();
  const match = useRouteMatch('/:route');
  const { pathname, search } = useLocation();
  const { accessToken, loading, error } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const initialUrl = match?.params?.route ? (pathname + search) : routes.review;
  const redirectUrlRef = useRef(initialUrl);

  useEffect(() => {
    dispatch(authorize());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
