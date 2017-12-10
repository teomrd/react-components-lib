import React, { Component } from "react";
import PropTypes from "prop-types";

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true
    };
    this.toggle = this.toggle.bind(this);
    this.expand = this.expand.bind(this);
    this.collapse = this.collapse.bind(this);
  }

  componentWillMount() {
    this.setState({
      expanded: this.props.initiallyExpanded
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.expanded !== undefined) {
      this.setState({
        expanded: nextProps.expanded
      });
    }
  }

  expand() {
    this.setState({
      expanded: true
    });
  }

  collapse() {
    this.setState({
      expanded: false
    });
  }

  toggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const Item = React.cloneElement(this.props.item, {
      key: "header",
      expand: this.props.expand || this.expand,
      collapse: this.props.collapse || this.collapse,
      toggle: this.props.toggle || this.toggle,
      expanded: this.state.expanded
    });
    const ChildrenWithProps = React.Children.map(this.props.children, child => {
      const additionalProps = child.props.collapsible
        ? { collapse: this.collapse }
        : {};
      return React.cloneElement(child, additionalProps);
    });
    return [Item, this.state.expanded && ChildrenWithProps];
  }
}

Collapsible.propTypes = {
  toggle: PropTypes.func,
  expand: PropTypes.func,
  collapse: PropTypes.func,
  expanded: PropTypes.bool,
  item: PropTypes.element.isRequired,
  initiallyExpanded: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired
};

Collapsible.defaultProps = {
  expanded: undefined,
  initiallyExpanded: false
};

export default Collapsible;
