// React
import React, { useState } from 'react';

// React Router
import { useHistory } from 'react-router';

// Styles
import { SearchBoxStyled } from './Styles';

// Antd Icons
import { SearchOutlined } from '@ant-design/icons';

// Components
import Button from '../button/Button';

interface Props {}

const SearchBox: React.FC<Props> = () => {
  // History
  const history = useHistory();

  const [keyword, setKeyword] = useState('');

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <SearchBoxStyled>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search Products..."
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <Button>
          <SearchOutlined />
        </Button>
      </form>
    </SearchBoxStyled>
  );
};

export default SearchBox;
