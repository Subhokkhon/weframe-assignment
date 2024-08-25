import PropTypes from "prop-types";

const Checkbox = ({ className = "" }) => {
  return (
    <div className={`h-4 w-4 relative ${className}`}>
      <div className="absolute top-[0px] left-[0px] rounded-[5.33px] bg-secondary-10 w-full h-full" />
      <img
        className="absolute h-[57.5%] w-9/12 top-[25%] right-[12.5%] bottom-[17.5%] left-[12.5%] max-w-full overflow-hidden max-h-full z-[1]"
        alt=""
        src="/vector-1.svg"
      />
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
};

export default Checkbox;
