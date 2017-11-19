import React from "react";
import PropTypes from "prop-types";
import SvgIcon from "material-ui/SvgIcon";

const Spot = ({ size, color, style }) => (
  <SvgIcon
    viewBox={`0 0 ${size} ${size}`}
    style={{
      ...style,
      width: `${size}px`,
      height: `${size}px`
    }}
  >
    <circle cx={size / 2} cy={size / 2} r={size / 4} fill={color} />
  </SvgIcon>
);

Spot.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.object
};

Spot.defaultProps = {
  size: 24,
  color: "white",
  style: {}
};

export default Spot;
