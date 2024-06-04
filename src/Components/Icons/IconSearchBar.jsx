import PropTypes from 'prop-types';
import './IconSearchBar.css'

const IconSearchBar = props => {
  const { title, onSearch } = props;

  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className='input-wrapper' title={title}>
      <button className='icon'> 
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' height='20px' width='20px'>
          <path strokeLinejoin='round' strokeLinecap='round' strokeWidth='1.5' stroke='#fff' d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'></path>
          <path strokeLinejoin='round' strokeLinecap='round' strokeWidth='1.5' stroke='#fff' d='M22 22L20 20'></path>
        </svg>
      </button>
      <input 
        onChange={handleChange} 
        className='input' 
        placeholder='Search..' 
        name='text' 
        type="text"
      />
    </div>
  );
};

IconSearchBar.propTypes = {
  title: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default IconSearchBar;