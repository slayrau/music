import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setQueryTerm, resetSearchData } from 'src/slices/search';

import IconType from 'src/utils/constants/icon-type';
import Icon from 'src/components/icon';

import { SearchWrapper, Label, Input, ClearButton, CancelButton } from './style';

const SearchField = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState('');
  const [searchValue, setValue] = useState('');
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
    const timeout = setTimeout(() => {
      if (isActive) {
        dispatch(setQueryTerm(searchValue));
      }
    }, 500);

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

        <Icon className="search-icon" icon={IconType.search} />

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
