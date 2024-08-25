import PropTypes from "prop-types";

const Breadcrumbs = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-5 text-left text-base text-primary font-captions mq900:flex-wrap ${className}`}
    >
      <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[49px]">
        Home
      </a>
      <img
        className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
        loading="lazy"
        alt=""
        src="/checkboxiconarrowright.svg"
      />
      <div className="relative inline-block min-w-[99px]">Livebestand</div>
      <img
        className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
        alt=""
        src="/checkboxiconarrowright.svg"
      />
      <b className="relative text-black">Cannabis Blüten</b>
    </div>
  );
};

Breadcrumbs.propTypes = {
  className: PropTypes.string,
};

export default Breadcrumbs;
