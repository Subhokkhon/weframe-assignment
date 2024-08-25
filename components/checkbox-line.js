import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const CheckboxLine = ({ className = "", aDREXpharma }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start gap-2.5 text-left text-base text-secondary-text1 font-captions ${className}`}
    >
      <Form.Check className="h-4 w-4 relative" />
      <div className="flex-1 relative">{aDREXpharma}</div>
    </div>
  );
};

CheckboxLine.propTypes = {
  className: PropTypes.string,
  aDREXpharma: PropTypes.string,
};

export default CheckboxLine;
