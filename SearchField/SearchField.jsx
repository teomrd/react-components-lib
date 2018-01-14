import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import FontIcon from "material-ui/FontIcon";
import IconButton from "material-ui/IconButton";
import CircularProgress from "material-ui/CircularProgress";
import common from "material-ui-next/colors/common";

const { lightWhite, darkWhite, minBlack, faintBlack } = common;

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
    this.handleClear = this.handleClear.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClear() {
    this.setState({
      value: ""
    });
    this.props.onClear();
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.props.onChange(this.state.value);
    }
  }

  render() {
    const { loading } = this.props;
    const { value } = this.state;
    return (
      <div
        className="search"
        style={{
          backgroundColor: `${minBlack}`,
          borderRadius: "3px",
          border: `0px solid ${faintBlack}`,
          display: "flex"
        }}
      >
        {loading ? (
          <CircularProgress
            style={{
              verticalAlign: "middle",
              padding: "10px"
            }}
            size={28}
            color={darkWhite}
          />
        ) : (
          <FontIcon
            className="material-icons"
            color={darkWhite}
            style={{
              verticalAlign: "middle",
              padding: "10px",
              width: "28px",
              height: "28px"
            }}
          >
            search
          </FontIcon>
        )}
        <TextField
          underlineShow={false}
          hintText="Search..."
          hintStyle={{
            color: `${lightWhite}`
          }}
          inputStyle={{
            color: `${darkWhite}`
          }}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
          value={value}
          fullWidth
        />
        <IconButton
          style={{
            verticalAlign: "middle",
            opacity: `${value.length ? "1" : "0"}`,
            float: "right"
          }}
          iconStyle={{
            color: `${darkWhite}`
          }}
          onClick={this.handleClear}
        >
          <FontIcon
            className="material-icons"
            style={{
              fontSize: "35px"
            }}
          >
            close
          </FontIcon>
        </IconButton>
      </div>
    );
  }
}

SearchField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

SearchField.defaultProps = {
  value: "",
  loading: false
};

export default SearchField;
