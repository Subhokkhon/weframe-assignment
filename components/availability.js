import { useMemo } from "react";
import PropTypes from "prop-types";

const Availability = ({
  className = "",
  propBackgroundColor,
  propBackgroundColor1,
  nichtLieferbar,
  propColor,
  propMinWidth,
}) => {
  const availabilityStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const ellipseDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const nichtLieferbarStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  return (
    <div
      className={`rounded-11xl bg-red-5 flex flex-row items-start justify-start py-[3px] px-3 gap-1 text-left text-xs text-red font-captions ${className}`}
      style={availabilityStyle}
    >
      <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
        <div
          className="w-1 h-1 relative rounded-[50%] bg-red"
          style={ellipseDivStyle}
        />
      </div>
      <div
        className="relative tracking-[0.01em] font-light inline-block min-w-[87px]"
        style={nichtLieferbarStyle}
      >
        {nichtLieferbar}
      </div>
    </div>
  );
};

Availability.propTypes = {
  className: PropTypes.string,
  nichtLieferbar: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propColor: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Availability;
