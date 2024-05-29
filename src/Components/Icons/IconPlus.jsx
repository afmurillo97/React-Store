import PropTypes from 'prop-types';

const IconPlus = props => {
  const { title } = props;

  return (
    <button
      title={ title }
      className="group cursor-pointer outline-none hover:rotate-90 duration-300"

    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        className="size-8 stroke-red-400 fill-none group-hover:stroke-white group-hover:fill-red-400 group-active:stroke-red-200 group-active:fill-red-600 group-active:duration-0 duration-300"
      >
        <path
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          strokeWidth="1.5"
        ></path>
        <path d="M8 12H16" strokeWidth="1.5"></path>
        <path d="M12 16V8" strokeWidth="1.5"></path>
      </svg>
    </button>
  );
};

IconPlus.propTypes = {
  title: PropTypes.string.isRequired

};

export default IconPlus;