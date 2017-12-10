import React, { Component } from "react";
import PropTypes from "prop-types";
import Collapsible, {
  CollapsibleListItem,
  CollapsibleTableRow
} from "../Collapsible";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: undefined
    };

    this.handleExpand = this.handleExpand.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleExpand(index) {
    this.setState({
      expanded: index
    });
  }

  handleCollapse() {
    this.setState({
      expanded: undefined
    });
  }

  handleToggle(index) {
    this.setState({
      expanded: index === this.state.expanded ? undefined : index
    });
  }

  render() {
    return this.props.children.map((child, index) =>
      React.cloneElement(child, {
        key: index, // eslint-disable-line
        toggle: () => this.handleToggle(index),
        expand: () => this.handleExpand(index),
        collapse: this.handleCollapse,
        expanded: index === this.state.expanded
      })
    );
  }
}

Accordion.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(Collapsible)),
    PropTypes.arrayOf(PropTypes.instanceOf(CollapsibleListItem)),
    PropTypes.arrayOf(PropTypes.instanceOf(CollapsibleTableRow))
  ]).isRequired
};

export default Accordion;
