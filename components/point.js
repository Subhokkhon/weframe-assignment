import { useMemo } from "react";
import PropTypes from "prop-types";

const Point = ({
  className = "",
  propBackgroundColor,
  bestellprozess,
  propColor,
  propDisplay,
  propMinWidth,
  propTextDecoration,
  propFontWeight,
}) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const bestellprozessStyle = useMemo(() => {
    return {
      color: propColor,
      display: propDisplay,
      minWidth: propMinWidth,
      textDecoration: propTextDecoration,
      fontWeight: propFontWeight,
    };
  }, [
    propColor,
    propDisplay,
    propMinWidth,
    propTextDecoration,
    propFontWeight,
  ]);

  return (
    <div
      className={`flex flex-row items-start justify-start gap-1 text-left text-base text-white font-captions ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
        <div
          className="w-2.5 h-4 relative rounded-tl-2xl rounded-tr-none rounded-br-2xl rounded-bl-none bg-accent-blue"
          style={rectangleDivStyle}
        />
      </div>
      <div
        className="relative inline-block min-w-[64px]"
        style={bestellprozessStyle}
      >
        {bestellprozess}
      </div>
    </div>
  );
};

Point.propTypes = {
  className: PropTypes.string,
  bestellprozess: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propColor: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propFontWeight: PropTypes.any,
};

export default Point;
