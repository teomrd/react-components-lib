import React from "react";
import PropTypes from "prop-types";
import { SwatchesPicker } from "react-color";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import { Spot } from "lib";

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
      displayColorPicker: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  }

  handleClose() {
    this.setState({ displayColorPicker: false });
  }

  handleChange(e) {
    this.props.onColorChange(e.hex);
  }

  handleRemove() {
    this.props.onColorChange("");
  }

  render() {
    const { color } = this.props;
    return (
      <div
        style={{
          margin: "10px 0"
        }}
      >
        <div style={styles.swatch} onClick={this.handleClick}>
          {color ? (
            <Spot color={color} />
          ) : (
            <FontIcon className="material-icons">not_interested</FontIcon>
          )}
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SwatchesPicker
              onChangeComplete={e => this.handleChange(e)}
              color={color}
            />
          </div>
        ) : null}
        {color ? (
          <IconButton
            iconClassName="material-icons"
            tooltip="Remove color tag"
            tooltipPosition="top-center"
            onClick={this.handleRemove}
          >
            close
          </IconButton>
        ) : null}
      </div>
    );
  }
}

MaterialColorPicker.propTypes = {
  color: PropTypes.string,
  onColorChange: PropTypes.func.isRequired
};

MaterialColorPicker.defaultProps = {
  color: null
};

export default MaterialColorPicker;
