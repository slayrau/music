import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setQueryTerm, resetSearchData, selectSearch } from 'src/slices/search';
import { useQuery } from 'src/hooks';

import IconType from 'src/utils/constants/icon-type';
import Icon from 'src/components/icon';
import PulseSpinner from 'src/components/pulse-spinner';

import { SearchWrapper, IconWrapper, Label, Input, ClearButton, CancelButton } from './style';

const SearchField = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const { loading } = useSelector(selectSearch);

  const term = query.get('term') || '';

  const [searchValue, setValue] = useState(term);
  const [isActive, setIsActive] = useState(!!term);
  const inputRef = useRef();

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    if (searchValue) return;
    setIsActive(false);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);

    if (!value) {
      dispatch(resetSearchData());
      dispatch(setQueryTerm(''));
    }
  };

  const handleClear = () => {
    setValue('');
    dispatch(resetSearchData());
    dispatch(setQueryTerm(''));
    inputRef.current.focus();
  };

  const handleCancel = () => {
    setValue('');
    setIsActive(false);
    dispatch(resetSearchData());
    dispatch(setQueryTerm(''));
  };

  useEffect(() => {
    let timeout;

    if (isActive && searchValue) {
      timeout = setTimeout(() => {
        dispatch(setQueryTerm(searchValue));
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch, isActive, searchValue]);

  return (
    <SearchWrapper>
      <Label>
        <Input
          name="search"
          autoComplete="off"
          spellCheck="false"
          placeholder="Search"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          value={searchValue}
          ref={inputRef}
        />

        <IconWrapper>
          {loading
            ? (
              <PulseSpinner size="small" />
            ) : (
              <Icon className="search-icon" icon={IconType.search} />
            )}
        </IconWrapper>

        {searchValue && (
          <ClearButton
            type="button"
            onClick={handleClear}
            aria-label="Clear search field"
          >
            <Icon icon={IconType.xmarkCircleFill} />
          </ClearButton>
        )}
      </Label>

      {isActive && (
        <CancelButton
          onClick={handleCancel}
          type="button"
        >
          Cancel
        </CancelButton>
      )}
    </SearchWrapper>
  );
};

export default SearchField;
