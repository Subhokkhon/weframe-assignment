import { useMemo } from "react";
import PropTypes from "prop-types";

const CheckboxTag = ({
  className = "",
  propBackgroundColor,
  propFlex,
  tHC24,
  propMinWidth,
  propColor,
}) => {
  const checkboxTagStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      flex: propFlex,
    };
  }, [propBackgroundColor, propFlex]);

  const tHC24Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
      color: propColor,
    };
  }, [propMinWidth, propColor]);

  return (
    <div
      className={`flex-1 rounded bg-primary flex flex-row items-center justify-center py-1 px-3.5 text-left text-base text-gray-100 font-captions ${className}`}
      style={checkboxTagStyle}
    >
      <div className="relative inline-block min-w-[51px]" style={tHC24Style}>
        {tHC24}
      </div>
    </div>
  );
};

CheckboxTag.propTypes = {
  className: PropTypes.string,
  tHC24: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propColor: PropTypes.any,
};

export default CheckboxTag;
