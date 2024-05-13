// import PropTypes from "prop-types";

// props => object
// const Child = ({ name }) => {
const Child = ({ link, children }) => {
  return (
    <div className="flex-1 text-center">
      {/* <p className="text-indigo-600">my name is {name}</p> */}
      <img src={link} alt="" className="w-[200px] mx-auto" />
      {children}
    </div>
  );
};

// Child.propTypes = {
//   name: PropTypes.string,
// };

export default Child;
