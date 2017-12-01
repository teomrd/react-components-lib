import React from "react";
import PropTypes from "prop-types";
import { SwatchesPicker } from "react-color";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import Spot from "../Spot/Spot";

const styles = {
  color: {
    width: "36px",
    height: "14px",
    borderRadius: "2px"
  },
  swatch: {
    padding: "5px",
    background: "#fff",
    borderRadius: "1px",
    boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
    display: "inline-block",
    cursor: "pointer"
  },
  popover: {
    position: "absolute",
    zIndex: "2"
  },
  cover: {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px"
  }
};

class MaterialColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
      displayColorPicker: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  }

  handleClose() {
    this.setState({ displayColorPicker: false });
  }

  handleChange({ hex = "" } = {}) {
    this.setState({ displayColorPicker: false, color: hex });
    this.props.onColorChange(hex);
  }

  handleRemove() {
    this.setState({ displayColorPicker: false, color: "" });
    this.props.onColorChange("");
  }

  render() {
    const { color } = this.state;
    return (
      <div
        style={{
          margin: "10px 0"
        }}
      >
        <div
          style={styles.swatch}
          onClick={this.handleClick}
          onKeyPress={this.handleClick}
          role="button"
          tabIndex={0}
        >
          {color ? (
            <Spot color={color} />
          ) : (
            <FontIcon className="material-icons">not_interested</FontIcon>
          )}
        </div>
        {this.state.displayColorPicker && (
          <div style={styles.popover}>
            <div
              style={styles.cover}
              onClick={this.handleClose}
              onKeyPress={this.handleClick}
              role="button"
              tabIndex={0}
            />
            <SwatchesPicker
              onChangeComplete={this.handleChange}
              color={color}
            />
          </div>
        )}
        {this.state.color && (
          <IconButton
            iconClassName="material-icons"
            tooltip="Remove color tag"
            tooltipPosition="top-center"
            onClick={this.handleRemove}
          >
            close
          </IconButton>
        )}
      </div>
    );
  }
}

MaterialColorPicker.propTypes = {
  color: PropTypes.string,
  onColorChange: PropTypes.func.isRequired
};

MaterialColorPicker.defaultProps = {
  color: ""
};

export default MaterialColorPicker;
