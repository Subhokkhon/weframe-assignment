import Point from "./point";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch shadow-[0px_0px_20px_rgba(7,_64,_64,_0.05)] rounded-t-11xl rounded-b-none bg-darkcyan flex flex-row items-start justify-start py-10 px-[310px] box-border gap-[71px] max-w-full text-left text-xs text-gray-200 font-captions mq900:gap-[35px] mq900:pl-[77px] mq900:pr-[77px] mq900:box-border mq450:gap-[18px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1350:pl-[155px] mq1350:pr-[155px] mq1350:box-border mq1800:flex-wrap mq1800:justify-center ${className}`}
    >
      <div className="w-[149px] flex flex-col items-start justify-start pt-[49px] px-0 pb-0 box-border">
        <div className="flex flex-col items-start justify-start gap-3">
          <div className="relative tracking-[0.01em] font-light inline-block min-w-[28px]">
            AGB
          </div>
          <div className="relative tracking-[0.01em] font-light inline-block min-w-[69px]">
            Impressum
          </div>
          <div className="relative tracking-[0.01em] font-light inline-block min-w-[78px]">
            Datenschutz
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[25px] max-w-full text-base text-white">
        <div className="flex flex-row items-start justify-start gap-[30px]">
          <Point
            propBackgroundColor="#28e3e9"
            bestellprozess="Rezept einlösen"
            propColor="#fff"
            propDisplay="inline-block"
            propMinWidth="129px"
            propTextDecoration="unset"
            propFontWeight="unset"
          />
          <Point
            propBackgroundColor="#28e3e9"
            bestellprozess="Live Bestand"
            propColor="#fff"
            propDisplay="inline-block"
            propMinWidth="103px"
            propTextDecoration="unset"
            propFontWeight="unset"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[30px] mq900:flex-wrap">
          <Point
            propBackgroundColor="#28e3e9"
            bestellprozess="Videosprechstunde"
            propColor="#fff"
            propDisplay="unset"
            propMinWidth="unset"
            propTextDecoration="unset"
            propFontWeight="unset"
          />
          <Point
            propBackgroundColor="#28e3e9"
            bestellprozess="FAQs"
            propColor="#fff"
            propDisplay="inline-block"
            propMinWidth="43px"
            propTextDecoration="unset"
            propFontWeight="unset"
          />
          <Point bestellprozess="Kontakt" />
        </div>
      </div>
      <div className="w-[369px] flex flex-row items-start justify-between py-0 pl-0 pr-[35px] box-border max-w-full gap-5 mq900:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-3">
          <div className="relative tracking-[0.01em] font-light inline-block min-w-[56px]">
            Standort
          </div>
          <div className="relative text-base font-extrabold font-manrope text-white">
            <p className="m-0">Bergstraße 49 - 57</p>
            <p className="m-0">69469 Weinheim</p>
            <p className="m-0">(3 Glocken Quartier)</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-3">
          <div className="relative tracking-[0.01em] font-light inline-block min-w-[46px]">
            Telefon
          </div>
          <div className="relative text-base font-extrabold font-manrope text-white inline-block min-w-[114px]">
            0223 545 5250
          </div>
        </div>
      </div>
      <img
        className="h-11 w-[107.7px] relative overflow-hidden shrink-0 hidden"
        alt=""
        src="/logo1.svg"
      />
      <div className="flex flex-col items-start justify-start gap-3">
        <div className="relative tracking-[0.01em] font-light inline-block min-w-[95px]">
          Öffnungszeiten
        </div>
        <div className="flex flex-col items-start justify-start gap-1">
          <div className="relative tracking-[0.01em] font-light inline-block min-w-[37px]">
            Mo-Fr
          </div>
          <div className="relative text-base font-extrabold font-manrope text-white whitespace-nowrap">
            09:00 – 18:00 Uhr
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-1">
          <div className="relative tracking-[0.01em] font-light inline-block min-w-[16px]">
            Sa
          </div>
          <div className="relative text-base font-extrabold font-manrope text-white whitespace-nowrap">
            09:00 – 14:00 Uhr
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
