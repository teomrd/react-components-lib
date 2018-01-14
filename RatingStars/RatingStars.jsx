import React from "react";
import PropTypes from "prop-types";
import IconButton from "material-ui/IconButton";
import yellow from "material-ui-next/colors/yellow";
import "./styles.css";

const yellow700 = yellow["700"];

const styles = {
  smallIcon: {
    width: 36,
    height: 36,
    fontSize: 36
  },
  mediumIcon: {
    width: 48,
    height: 48,
    fontSize: 48
  },
  largeIcon: {
    width: 60,
    height: 60,
    fontSize: 60
  },
  small: {
    width: 72,
    height: 72,
    padding: 16
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24
  },
  large: {
    width: 120,
    height: 120,
    padding: 30
  }
};

const RatingStars = ({ handleRating, score, topRating, iconColor }) => (
  <div>
    {[...Array(topRating)].map((x, i) => (
      <IconButton
        className="rating-star"
        key={`score${i}`}
        touch
        iconClassName="material-icons"
        onClick={() => handleRating(i + 1)}
        iconStyle={{
          ...styles.mediumIcon,
          color: iconColor
        }}
        style={styles.medium}
      >
        {score > i ? "star" : "star_border"}
      </IconButton>
    ))}
  </div>
);

RatingStars.propTypes = {
  handleRating: PropTypes.func.isRequired,
  score: PropTypes.number,
  topRating: PropTypes.number,
  iconColor: PropTypes.string
};

RatingStars.defaultProps = {
  score: 0,
  topRating: 5,
  iconColor: yellow700
};

export default RatingStars;
