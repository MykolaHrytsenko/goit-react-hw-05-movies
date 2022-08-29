import { useState } from 'react';
import style from './SearchForm.module.css';

import PropTypes from 'prop-types';

function SearchForm({ onSubmit, query }) {
  const [searchQuery, setSearchQuery] = useState(query || '');

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return;
    }
    onSubmit(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={searchQuery}
        onChange={handleChange}
        className={style.input}
      />
      <button type="submit" className={style.button}>
        <span>Search</span>
      </button>
    </form>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
