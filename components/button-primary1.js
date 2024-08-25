import Button2 from "./button2";
import PropTypes from "prop-types";

const ButtonPrimary1 = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start text-left text-sm text-black font-captions ${className}`}
    >
      <Button2 />
    </div>
  );
};

ButtonPrimary1.propTypes = {
  className: PropTypes.string,
};

export default ButtonPrimary1;
