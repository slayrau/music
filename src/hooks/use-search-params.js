import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { selectSearch, setQueryTerm, setQueryType, resetSearch } from 'src/slices/search';

const useSearchParams = () => {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const { queryTerm, queryType } = useSelector(selectSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    const term = query.get('term') || '';
    const type = query.get('type') || '';

    dispatch(setQueryTerm(term));
    dispatch(setQueryType(type));
  }, []);

  useEffect(() => {
    if (queryTerm) {
      query.set('term', queryTerm);
    } else {
      query.delete('term');
    }

    if (queryType) {
      query.set('type', queryType);
    } else {
      query.delete('type');
    }

    history.push({ search: query.toString() });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryTerm, queryType]);

  useEffect(() => {
    if (!location.search) {
      dispatch(resetSearch());
    }
  }, [dispatch, location.search]);
};

export default useSearchParams;
