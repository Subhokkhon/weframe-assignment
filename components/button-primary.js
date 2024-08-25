import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ButtonPrimary = ({ className = "" }) => {
  return <Button variant="primary" />;
};

ButtonPrimary.propTypes = {
  className: PropTypes.string,
};

export default ButtonPrimary;
