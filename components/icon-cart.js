import PropTypes from "prop-types";

const IconCart = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[30px] relative text-left text-xs text-accent-blue font-sf-pro-display ${className}`}
    >
      <div className="absolute top-[7px] left-[18px] rounded-3xl bg-secondary-30 overflow-hidden flex flex-row items-start justify-start pt-0.5 px-1.5 pb-[1.7px]">
        <div className="relative font-medium inline-block min-w-[6px]">1</div>
      </div>
      <img
        className="absolute h-[70%] w-[62.22%] top-[13.33%] right-[33.33%] bottom-[16.67%] left-[4.44%] max-w-full overflow-hidden max-h-full z-[1]"
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
    </div>
  );
};

IconCart.propTypes = {
  className: PropTypes.string,
};

export default IconCart;
