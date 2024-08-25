import PropTypes from "prop-types";

const H = ({ className = "" }) => {
  return (
    <div
      className={`w-40 flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border gap-3 text-left text-17xl text-black1 font-captions ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
        <div className="w-5 h-[26px] relative rounded-tl-xl rounded-tr-none rounded-br-xl rounded-bl-none bg-accent-blue" />
      </div>
      <h1 className="m-0 flex-1 relative text-inherit font-semibold font-[inherit] mq900:text-10xl mq450:text-3xl">
        {" "}
        Blüten
      </h1>
    </div>
  );
};

H.propTypes = {
  className: PropTypes.string,
};

export default H;
