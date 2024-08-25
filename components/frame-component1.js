import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "", genetik, indica, propMinWidth }) => {
  const indicaStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-baseline justify-start gap-2 text-left text-base text-secondary-text1 font-captions ${className}`}
    >
      <div className="relative inline-block min-w-[65px]">{genetik}</div>
      <div className="h-px flex-1 relative border-secondary-30 border-t-[1px] border-dashed box-border" />
      <div className="relative inline-block min-w-[56px]" style={indicaStyle}>
        {indica}
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  genetik: PropTypes.string,
  indica: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default FrameComponent1;
