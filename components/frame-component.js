import { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Availability from "./availability";
import CheckboxTag from "./checkbox-tag";
import FrameComponent1 from "./frame-component1";
import ButtonPrimary from "./button-primary";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  propBorder,
  propBoxShadow,
  propGap,
  availability,
  propAlignSelf,
  propWidth,
  sofortLieferbar,
  propAlignSelf1,
  propWidth1,
  propMinWidth1,
  img,
  propBorder1,
  navcoraTHCSpotlightPortoMast,
  nichtLieferbar,
  propBackgroundColor,
  propBackgroundColor1,
  propColor,
  propMinWidth,
  tHC24,
  tHC241,
  propBackgroundColor2,
  propBackgroundColor3,
  propFlex,
  propFlex1,
  propMinWidth2,
  propMinWidth3,
  propColor1,
  propColor2,
  genetik,
  genetik1,
  indica,
  indica1,
  propMinWidth4,
  propMinWidth5,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      border: propBorder,
      boxShadow: propBoxShadow,
    };
  }, [propBorder, propBoxShadow]);

  const frameDiv1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const availability1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const sofortLieferbarStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth1,
      minWidth: propMinWidth1,
    };
  }, [propAlignSelf1, propWidth1, propMinWidth1]);

  const bodyStyle = useMemo(() => {
    return {
      border: propBorder1,
    };
  }, [propBorder1]);

  return (
    <div
      className={`w-[310px] rounded-tl-11xl rounded-tr-none rounded-br-11xl rounded-bl-none bg-white border-accent-blue border-[2px] border-solid box-border flex flex-col items-start justify-start gap-3 text-left text-xs text-red font-captions ${className}`}
      style={frameDivStyle}
    >
      <div
        className="self-stretch flex flex-row items-start justify-start pt-5 px-5 pb-0"
        style={frameDiv1Style}
      >
        <Availability
          propBackgroundColor={propBackgroundColor}
          propBackgroundColor1={propBackgroundColor1}
          nichtLieferbar={nichtLieferbar}
          propColor={propColor}
          propMinWidth={propMinWidth}
        />
        {!availability && (
          <div
            className="self-stretch w-[50px] rounded-11xl bg-secondary-10 flex-row items-center justify-start py-[3px] px-3 box-border gap-1 text-black1"
            style={availability1Style}
          >
            <div className="h-1 w-1 relative rounded-[50%] bg-green hidden" />
            {!sofortLieferbar && (
              <div
                className="self-stretch w-[26px] relative tracking-[0.01em] font-light"
                style={sofortLieferbarStyle}
              >
                Neu
              </div>
            )}
          </div>
        )}
      </div>
      <img
        className="self-stretch h-[150px] relative max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={img}
      />
      <div
        className="self-stretch shadow-[0px_0px_10px_rgba(7,_64,_64,_0.1)] rounded-t-none rounded-br-11xl rounded-bl-none bg-secondary-30 border-accent-blue border-[2px] border-solid flex flex-col items-start justify-start py-[21px] px-[22px] gap-[30px] text-base text-secondary-text1 mq450:gap-[15px]"
        style={bodyStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-6">
          <div className="self-stretch flex flex-col items-start justify-start gap-5">
            <div className="self-stretch flex flex-col items-start justify-start gap-4">
              <div className="rounded bg-secondary-30 flex flex-row items-center justify-center py-0.5 px-[9px]">
                <div className="relative tracking-[0.01em] font-semibold inline-block min-w-[55px]">
                  Canify
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center gap-2">
                <CheckboxTag
                  propBackgroundColor={propBackgroundColor2}
                  propFlex={propFlex}
                  tHC24={tHC24}
                  propMinWidth={propMinWidth2}
                  propColor={propColor1}
                />
                <Button
                  className="flex-1 whitespace-nowrap"
                  variant="primary"
                />
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/iconbestrahlt.svg"
                />
              </div>
            </div>
            <div className="self-stretch h-[54px] relative text-lg tracking-[0.01em] font-semibold text-black1 inline-block shrink-0">
              {navcoraTHCSpotlightPortoMast}
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <FrameComponent1
              genetik={genetik}
              indica={indica}
              propMinWidth={propMinWidth4}
            />
            <FrameComponent1
              genetik={genetik1}
              indica={indica1}
              propMinWidth={propMinWidth5}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between gap-[7px] text-5xl text-primary">
          <div className="flex flex-col items-start justify-start gap-0.5">
            <div className="flex flex-row items-start justify-start gap-1">
              <h3 className="m-0 relative text-inherit tracking-[0.01em] font-extrabold font-[inherit] inline-block min-w-[18px] mq450:text-lgi">
                €
              </h3>
              <div className="flex flex-row items-center justify-start gap-0.5 text-black1">
                <div className="relative tracking-[0.01em] font-extrabold inline-block min-w-[62px] mq450:text-lgi">
                  11,66
                </div>
                <div className="relative text-xl tracking-[0.01em] font-sf-pro-display text-secondary-text1 inline-block min-w-[5px] mq450:text-base">
                  1
                </div>
              </div>
            </div>
            <div className="relative text-xs tracking-[0.01em] font-light text-secondary-text1 inline-block min-w-[70px]">
              pro Gramm
            </div>
          </div>
          <ButtonPrimary />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  availability: PropTypes.bool,
  sofortLieferbar: PropTypes.bool,
  img: PropTypes.string,
  navcoraTHCSpotlightPortoMast: PropTypes.string,
  nichtLieferbar: PropTypes.string,
  propBackgroundColor: PropTypes.string,
  propBackgroundColor1: PropTypes.string,
  propColor: PropTypes.string,
  propMinWidth: PropTypes.string,
  tHC24: PropTypes.string,
  tHC241: PropTypes.string,
  propBackgroundColor2: PropTypes.string,
  propBackgroundColor3: PropTypes.string,
  propFlex: PropTypes.string,
  propFlex1: PropTypes.string,
  propMinWidth2: PropTypes.string,
  propMinWidth3: PropTypes.string,
  propColor1: PropTypes.string,
  propColor2: PropTypes.string,
  genetik: PropTypes.string,
  genetik1: PropTypes.string,
  indica: PropTypes.string,
  indica1: PropTypes.string,
  propMinWidth4: PropTypes.string,
  propMinWidth5: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
  propBoxShadow: PropTypes.any,
  propGap: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propWidth1: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propBorder1: PropTypes.any,
};

export default FrameComponent;
