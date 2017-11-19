import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import momentLocalizer from "react-widgets-moment";
import "react-widgets/dist/css/react-widgets.css";
import { DateTimePicker } from "react-widgets";
import "./materializeDateTimePicker.css";

Moment.locale("en");
momentLocalizer();

const MaterialDateTimePicker = ({ value, onChange, min, showTime }) => (
  <DateTimePicker
    value={value}
    editFormat={showTime ? "DD/MM/YYYY HH:mm" : "DD/MM/YYYY"}
    format={showTime ? "DD/MM/YYYY HH:mm" : "DD/MM/YYYY"}
    onChange={e =>
      showTime
        ? onChange(e)
        : onChange(
            new Date(
              Moment(e)
                .startOf("day")
                .format()
            )
          )
    }
    min={min}
    time={showTime}
  />
);

MaterialDateTimePicker.propTypes = {
  value: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  showTime: PropTypes.bool
};

MaterialDateTimePicker.defaultProps = {
  value: new Date(),
  min: new Date(1900, 0, 1),
  showTime: false
};

export default MaterialDateTimePicker;
