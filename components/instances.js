import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, ButtonGroup, Form } from "react-bootstrap";
import HeaderDesktop from "./header-desktop";
import Breadcrumbs from "./breadcrumbs";
import H from "./h";
import Button1 from "./button1";
import FilterNames from "./filter-names";
import CheckboxLine from "./checkbox-line";
import Checkbox from "./checkbox";
import CheckboxTag from "./checkbox-tag";
import FrameComponent from "./frame-component";
import Pagination from "./pagination";
import PropTypes from "prop-types";

const Instances = ({ className = "" }) => {
  return (
    <section
      className={`w-[1304px] flex flex-col items-start justify-start gap-[90px] max-w-full text-left text-base text-primary font-captions mq900:gap-[45px] mq450:gap-[22px] ${className}`}
    >
      <HeaderDesktop />
      <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full mq900:gap-[30px]">
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-5 max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-20 box-border gap-20 min-w-[315px] max-w-full mq900:gap-10 mq900:pr-10 mq900:box-border">
            <Breadcrumbs />
            <H />
          </div>
          <div className="w-[340px] flex flex-col items-start justify-start pt-[108px] px-0 pb-0 box-border max-w-full font-sf-pro-display">
            <div className="self-stretch rounded-11xl bg-mid-gray-transparent-10 flex flex-row items-start justify-between pt-1.5 px-4 pb-2 gap-5">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative inline-block min-w-[52px]">Suchen</div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src="/iconsearch.svg"
              />
            </div>
          </div>
          <div className="w-[438px] flex flex-col items-end justify-start gap-[45px] max-w-full text-center text-sm text-secondary-text1 mq450:gap-[22px]">
            <div className="w-[227px] flex flex-row items-start justify-end py-0 px-0.5 box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-3">
                <div className="self-stretch relative tracking-[0.01em]">
                  GKV mit Kostenübernahme?
                </div>
                <Button1 propBorder="unset" />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-5 mq450:flex-wrap">
              <DropdownButton
                className="flex-1 min-w-[112px]"
                as={ButtonGroup}
                style={{
                  width: "173",
                  height: "34",
                  backgroundColor: "rgba(98, 195, 198, 0.3)",
                  borderRadius: "4px",
                }}
              >{` `}</DropdownButton>
              <DropdownButton
                className="flex-1 min-w-[115px]"
                as={ButtonGroup}
                style={{
                  width: "177",
                  height: "34",
                  backgroundColor: "rgba(98, 195, 198, 0.3)",
                  borderRadius: "4px",
                }}
              >{` `}</DropdownButton>
              <div className="h-[34px] rounded bg-secondary-30 flex flex-row items-center justify-center py-0.5 px-3 box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/iconlistview.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-20 max-w-full text-5xl text-black mq900:gap-10 mq450:gap-5">
          <div className="w-[250px] flex flex-col items-start justify-start gap-11 mq900:hidden mq450:gap-[22px]">
            <div className="self-stretch rounded bg-secondary-10 flex flex-row items-start justify-center py-0.5 px-5">
              <h3 className="m-0 relative text-inherit tracking-[0.01em] font-semibold font-[inherit] inline-block min-w-[65px] mq450:text-lgi">
                Filter
              </h3>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-10 text-center text-lg text-secondary-text1 mq450:gap-5">
              <FilterNames preis="Preis" prop="5 €" prop1="10 €" />
              <div className="self-stretch border-secondary-30 border-b-[1px] border-solid flex flex-col items-start justify-start pt-0 px-0 pb-7 gap-5">
                <div className="self-stretch flex flex-col items-start justify-start gap-5">
                  <div className="self-stretch flex flex-row items-center justify-between gap-0 [row-gap:20px]">
                    <div className="w-[234px] flex flex-col items-start justify-start">
                      <div className="self-stretch relative font-semibold">
                        Hersteller
                      </div>
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 object-contain"
                      alt=""
                      src="/iconarrow-down-1.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-4 text-left text-base">
                    <CheckboxLine aDREXpharma="ADREXpharma" />
                    <CheckboxLine aDREXpharma="Aurora" />
                    <div className="self-stretch flex flex-row items-center justify-start gap-2.5">
                      <Checkbox />
                      <div className="flex-1 relative">Avaay</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-2.5">
                      <Checkbox />
                      <div className="flex-1 relative">Bedrocan</div>
                    </div>
                    <CheckboxLine aDREXpharma="Cannamedical" />
                  </div>
                </div>
                <Button1 />
              </div>
              <FilterNames
                preis="THC Gehalt"
                prop="11%"
                propMinWidth="28px"
                prop1="18%"
                propMinWidth1="31px"
              />
              <FilterNames
                preis="CBD Gehalt"
                prop="1%"
                propMinWidth="21px"
                prop1="5%"
                propMinWidth1="24px"
              />
              <div className="self-stretch border-secondary-30 border-b-[1px] border-solid flex flex-col items-start justify-start pt-0 px-0 pb-7 gap-5">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative font-semibold">
                    Genetik
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-1 text-left text-base text-gray-100">
                  <CheckboxTag tHC24="Indica" />
                  <CheckboxTag
                    propBackgroundColor="rgba(98, 195, 198, 0.3)"
                    propFlex="1"
                    tHC24="Sativa"
                    propMinWidth="51px"
                    propColor="#045a5c"
                  />
                  <CheckboxTag
                    propBackgroundColor="rgba(98, 195, 198, 0.3)"
                    propFlex="unset"
                    tHC24="Hybrid"
                    propMinWidth="56px"
                    propColor="#045a5c"
                  />
                </div>
              </div>
              <div className="self-stretch border-secondary-30 border-b-[1px] border-solid flex flex-col items-start justify-start pt-0 px-0 pb-7 gap-5">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative font-semibold">
                    Bestrahltung
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-1">
                  <CheckboxTag propBackgroundColor="unset" propFlex="unset" />
                  <CheckboxTag
                    propBackgroundColor="rgba(98, 195, 198, 0.3)"
                    propFlex="unset"
                    tHC24="nicht bestrahlt"
                    propMinWidth="120px"
                    propColor="#045a5c"
                  />
                </div>
              </div>
              <div className="self-stretch border-secondary-30 border-b-[1px] border-solid flex flex-col items-start justify-start pt-0 px-0 pb-7">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <Form.Select className="self-stretch font-captions font-semibold text-lg text-secondary-text1 gap-0 [row-gap:20px]" />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[25px] text-left text-base text-black2">
                <div className="flex-1 flex flex-row items-start justify-start gap-1">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <img
                      className="w-3 h-3 relative overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/iconclose@2x.png"
                    />
                  </div>
                  <div className="relative">alle Filter zurücksetzen</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-10 max-w-[calc(100%_-_330px)] text-xs text-red mq900:gap-5 mq900:max-w-full">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-1 box-border max-w-full">
              <div className="w-[970px] flex flex-row items-start justify-start flex-wrap content-start gap-x-5 gap-y-[18px] min-h-[1702px] max-w-full">
                <FrameComponent
                  propBorder="2px solid #28e3e9"
                  propBoxShadow="unset"
                  propGap="unset"
                  availability={false}
                  propAlignSelf="stretch"
                  propWidth="50px"
                  sofortLieferbar={false}
                  propAlignSelf1="stretch"
                  propWidth1="26px"
                  propMinWidth1="unset"
                  img="/img@2x.png"
                  propBorder1="2px solid #28e3e9"
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
                  nichtLieferbar="nicht lieferbar"
                  propBackgroundColor="rgba(161, 11, 11, 0.05)"
                  propBackgroundColor1="#a10b0b"
                  propColor="#a10b0b"
                  propMinWidth="87px"
                  tHC24="THC 18% "
                  tHC241={`CBD <1%`}
                  propBackgroundColor2="#fcfcfa"
                  propFlex="1"
                  propMinWidth2="70px"
                  propColor1="#116a6c"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Mango"
                  indica1="Hybrid"
                  propMinWidth4="56px"
                  propMinWidth5="56px"
                />
                <FrameComponent
                  propBorder="2px solid #28e3e9"
                  propBoxShadow="unset"
                  propGap="unset"
                  availability={false}
                  propAlignSelf="stretch"
                  propWidth="50px"
                  sofortLieferbar={false}
                  propAlignSelf1="stretch"
                  propWidth1="26px"
                  propMinWidth1="unset"
                  img="/img@2x.png"
                  propBorder1="2px solid #28e3e9"
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
                  nichtLieferbar="nicht lieferbar"
                  propBackgroundColor="rgba(161, 11, 11, 0.05)"
                  propBackgroundColor1="#a10b0b"
                  propColor="#a10b0b"
                  propMinWidth="87px"
                  tHC24="THC 18% "
                  tHC241={`CBD <1%`}
                  propBackgroundColor2="#fcfcfa"
                  propFlex="1"
                  propMinWidth2="70px"
                  propColor1="#116a6c"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Mango"
                  indica1="Hybrid"
                  propMinWidth4="56px"
                  propMinWidth5="56px"
                />
                <FrameComponent
                  propBorder="2px solid #28e3e9"
                  propBoxShadow="unset"
                  propGap="unset"
                  availability={false}
                  propAlignSelf="stretch"
                  propWidth="50px"
                  sofortLieferbar={false}
                  propAlignSelf1="stretch"
                  propWidth1="26px"
                  propMinWidth1="unset"
                  img="/img@2x.png"
                  propBorder1="2px solid #28e3e9"
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
                  nichtLieferbar="nicht lieferbar"
                  propBackgroundColor="rgba(161, 11, 11, 0.05)"
                  propBackgroundColor1="#a10b0b"
                  propColor="#a10b0b"
                  propMinWidth="87px"
                  tHC24="THC 18% "
                  tHC241={`CBD <1%`}
                  propBackgroundColor2="#fcfcfa"
                  propFlex="1"
                  propMinWidth2="70px"
                  propColor1="#116a6c"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Mango"
                  indica1="Hybrid"
                  propMinWidth4="56px"
                  propMinWidth5="56px"
                />
                <FrameComponent
                  propBorder="unset"
                  propBoxShadow="0px 0px 20px rgba(7, 64, 64, 0.05)"
                  propGap="20px"
                  availability
                  propAlignSelf="unset"
                  propWidth="unset"
                  sofortLieferbar
                  propAlignSelf1="unset"
                  propWidth1="unset"
                  propMinWidth1="26px"
                  img="/img@2x.png"
                  propBorder1="unset"
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify"
                  nichtLieferbar="sofort lieferbar"
                  propBackgroundColor="rgba(13, 112, 82, 0.05)"
                  propBackgroundColor1="#0d7052"
                  propColor="#0d7052"
                  propMinWidth="93px"
                  tHC24="THC 25% "
                  tHC241={`CBD <1%`}
                  propBackgroundColor2="#fcfcfa"
                  propFlex="1"
                  propMinWidth2="73px"
                  propColor1="#116a6c"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Pink Kush"
                  indica1="Hybrid"
                  propMinWidth4="78px"
                  propMinWidth5="56px"
                />
                <FrameComponent
                  propBorder="unset"
                  propBoxShadow="0px 0px 20px rgba(7, 64, 64, 0.05)"
                  propGap="20px"
                  availability
                  propAlignSelf="unset"
                  propWidth="unset"
                  sofortLieferbar
                  propAlignSelf1="unset"
                  propWidth1="unset"
                  propMinWidth1="26px"
                  img="/img@2x.png"
                  propBorder1="unset"
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify"
                  nichtLieferbar="sofort lieferbar"
                  propBackgroundColor="rgba(13, 112, 82, 0.05)"
                  propBackgroundColor1="#0d7052"
                  propColor="#0d7052"
                  propMinWidth="93px"
                  tHC24="THC 25% "
                  tHC241={`CBD <1%`}
                  propBackgroundColor2="#fcfcfa"
                  propFlex="1"
                  propMinWidth2="73px"
                  propColor1="#116a6c"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Pink Kush"
                  indica1="Hybrid"
                  propMinWidth4="78px"
                  propMinWidth5="56px"
                />
                <FrameComponent
                  propBorder="unset"
                  propBoxShadow="0px 0px 20px rgba(7, 64, 64, 0.05)"
                  propGap="20px"
                  availability
                  propAlignSelf="unset"
                  propWidth="unset"
                  sofortLieferbar
                  propAlignSelf1="unset"
                  propWidth1="unset"
                  propMinWidth1="26px"
                  img="/img@2x.png"
                  propBorder1="unset"
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify"
                  nichtLieferbar="sofort lieferbar"
                  propBackgroundColor="rgba(13, 112, 82, 0.05)"
                  propBackgroundColor1="#0d7052"
                  propColor="#0d7052"
                  propMinWidth="93px"
                  tHC24="THC 25% "
                  tHC241={`CBD <1%`}
                  propBackgroundColor2="#fcfcfa"
                  propFlex="1"
                  propMinWidth2="73px"
                  propColor1="#116a6c"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Pink Kush"
                  indica1="Hybrid"
                  propMinWidth4="78px"
                  propMinWidth5="56px"
                />
                <FrameComponent
                  propBorder="2px solid #28e3e9"
                  propBoxShadow="unset"
                  propGap="unset"
                  availability={false}
                  propAlignSelf="stretch"
                  propWidth="50px"
                  sofortLieferbar={false}
                  propAlignSelf1="stretch"
                  propWidth1="26px"
                  propMinWidth1="unset"
                  img="/img@2x.png"
                  propBorder1="2px solid #28e3e9"
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
                  nichtLieferbar="nicht lieferbar"
                  propBackgroundColor="rgba(161, 11, 11, 0.05)"
                  propBackgroundColor1="#a10b0b"
                  propColor="#a10b0b"
                  propMinWidth="87px"
                  tHC24="THC 18% "
                  tHC241={`CBD <1%`}
                  propBackgroundColor2="#fcfcfa"
                  propFlex="1"
                  propMinWidth2="70px"
                  propColor1="#116a6c"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Mango"
                  indica1="Hybrid"
                  propMinWidth4="56px"
                  propMinWidth5="56px"
                />
                <FrameComponent
                  propBorder="2px solid #28e3e9"
                  propBoxShadow="unset"
                  propGap="unset"
                  availability={false}
                  propAlignSelf="stretch"
                  propWidth="50px"
                  sofortLieferbar={false}
                  propAlignSelf1="stretch"
                  propWidth1="26px"
                  propMinWidth1="unset"
                  img="/img@2x.png"
                  propBorder1="2px solid #28e3e9"
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
                  nichtLieferbar="nicht lieferbar"
                  propBackgroundColor="rgba(161, 11, 11, 0.05)"
                  propBackgroundColor1="#a10b0b"
                  propColor="#a10b0b"
                  propMinWidth="87px"
                  tHC24="THC 18% "
                  tHC241={`CBD <1%`}
                  propBackgroundColor2="#fcfcfa"
                  propFlex="1"
                  propMinWidth2="70px"
                  propColor1="#116a6c"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Mango"
                  indica1="Hybrid"
                  propMinWidth4="56px"
                  propMinWidth5="56px"
                />
                <FrameComponent
                  availability
                  sofortLieferbar
                  img="/img@2x.png"
                  navcoraTHCSpotlightPortoMast="Cannabis Flos 18/1 PT Mango"
                  nichtLieferbar="nicht lieferbar"
                  tHC24="THC 18% "
                  tHC241={`CBD <1%`}
                  propBackgroundColor2="#fcfcfa"
                  propBackgroundColor3="#62c3c6"
                  propFlex="1"
                  propFlex1="1"
                  propMinWidth2="70px"
                  propMinWidth3="70px"
                  propColor1="#116a6c"
                  propColor2="#fcfcfa"
                  genetik="Kultivar"
                  genetik1="Genetik"
                  indica="Mango"
                  indica1="Hybrid"
                  propMinWidth4="56px"
                />
              </div>
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

Instances.propTypes = {
  className: PropTypes.string,
};

export default Instances;
