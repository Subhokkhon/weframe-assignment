import PropTypes from "prop-types";

const Pagination = ({ className = "" }) => {
  return (
    <div
      className={`w-[262px] flex flex-row items-start justify-start gap-[30px] text-left text-lg text-black font-captions ${className}`}
    >
      <img
        className="h-5 w-5 relative overflow-hidden shrink-0 object-contain"
        alt=""
        src="/checkboxiconarrowright-2.svg"
      />
      <div className="flex-1 flex flex-row items-start justify-between gap-5">
        <div className="relative font-semibold inline-block min-w-[8px]">1</div>
        <div className="relative font-semibold inline-block min-w-[12px]">
          2
        </div>
        <div className="relative font-semibold inline-block min-w-[12px]">
          3
        </div>
        <div className="relative font-semibold inline-block min-w-[15px]">
          ...
        </div>
        <div className="relative font-semibold inline-block min-w-[19px]">
          12
        </div>
      </div>
      <img
        className="h-5 w-5 relative overflow-hidden shrink-0"
        alt=""
        src="/checkboxiconarrowright.svg"
      />
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
};

export default Pagination;
