import { useMemo } from "react";
import PropTypes from "prop-types";

const FilterNames = ({
  className = "",
  preis,
  prop,
  propMinWidth,
  prop1,
  propMinWidth1,
}) => {
  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`self-stretch border-secondary-30 border-b-[1px] border-solid flex flex-col items-start justify-start pt-0 px-0 pb-7 gap-5 text-center text-lg text-secondary-text1 font-captions ${className}`}
    >
      <div className="self-stretch relative font-semibold">{preis}</div>
      <div className="self-stretch flex flex-col items-start justify-start gap-2 text-left text-base">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="h-5 flex-1 relative">
            <div className="absolute top-[7px] left-[0px] rounded-3xs bg-secondary-30 w-[250px] h-[7px]">
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-secondary-30 w-full h-full hidden" />
              <div className="absolute top-[0px] left-[41px] rounded-3xs bg-primary w-[69px] h-[7px] z-[1]" />
            </div>
            <div className="absolute top-[0px] left-[37.3px] rounded-tl-[15.38px] rounded-tr-none rounded-br-[15.38px] rounded-bl-none bg-primary w-[15.4px] h-5 z-[2]" />
            <div className="absolute top-[0px] left-[102px] rounded-tl-[15.38px] rounded-tr-none rounded-br-[15.38px] rounded-bl-none bg-primary w-[15.4px] h-5 z-[2]" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-1">
          <div className="flex-1 rounded-xl bg-mid-gray-transparent-10 flex flex-row items-start justify-start py-0.5 px-2.5 whitespace-nowrap">
            <div
              className="relative inline-block min-w-[25px]"
              style={divStyle}
            >
              {prop}
            </div>
          </div>
          <div className="relative text-lg font-sf-pro-display text-secondary-text inline-block min-w-[10px]">
            –
          </div>
          <div className="flex-1 rounded-xl bg-mid-gray-transparent-10 flex flex-row items-start justify-start py-0.5 px-2.5 whitespace-nowrap">
            <div
              className="relative inline-block min-w-[34px]"
              style={div1Style}
            >
              {prop1}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FilterNames.propTypes = {
  className: PropTypes.string,
  preis: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default FilterNames;
