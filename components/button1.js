import { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Button1 = ({ className = "", propBorder, bestellprozess }) => {
  const button2Style = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return <Button variant="primary" style={button2Style} />;
};

Button1.propTypes = {
  className: PropTypes.string,
  bestellprozess: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
};

export default Button1;
