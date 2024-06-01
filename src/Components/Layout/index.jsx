import PropTypes from 'prop-types';

const Layout = ({ children }) => {

  return (
    <div className="flex flex-col items-center min-h-screen mt-20">
      { children }
    </div>
  );

};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;