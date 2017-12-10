import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "material-ui/List";
import FontIcon from "material-ui/FontIcon";
import Collapsible from "../Collapsible";

const CollapsibleListHeader = ({ title, toggle, expanded }) => (
  <ListItem
    onClick={toggle}
    primaryText={title}
    leftIcon={
      <FontIcon
        className="material-icons"
        style={{
          float: "right",
          transform: `rotate(${expanded ? 90 : 0}deg)`
        }}
      >
        keyboard_arrow_right
      </FontIcon>
    }
  />
);

CollapsibleListHeader.propTypes = {
  title: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  expanded: PropTypes.bool
};

CollapsibleListHeader.defaultProps = {
  expanded: false
};

const CollapsibleListItem = ({ title, children, ...props }) => (
  <Collapsible {...props} item={<CollapsibleListHeader title={title} />}>
    {children}
  </Collapsible>
);

CollapsibleListItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  expanded: PropTypes.bool
};

CollapsibleListItem.defaultProps = {
  expanded: undefined
};

export default CollapsibleListItem;
