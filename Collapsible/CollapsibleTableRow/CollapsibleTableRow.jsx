import React from "react";
import PropTypes from "prop-types";
import { TableRow, TableRowColumn } from "material-ui/Table";
import FontIcon from "material-ui/FontIcon";
import Collapsible from "../Collapsible";

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  borderSpacing: "0px",
  tableLayout: "fixed"
};

const CollapsibleTableRowHeader = ({ toggle, expanded, children }) => (
  <table style={tableStyle}>
    <TableRow onClick={toggle} style={{ cursor: "pointer" }}>
      <TableRowColumn
        style={{
          width: "24px"
        }}
      >
        <FontIcon
          className="material-icons"
          style={{
            float: "right",
            transform: `rotate(${expanded ? 90 : 0}deg)`
          }}
        >
          keyboard_arrow_right
        </FontIcon>
      </TableRowColumn>
      {children}
    </TableRow>
  </table>
);

CollapsibleTableRowHeader.propTypes = {
  toggle: PropTypes.func.isRequired,
  expanded: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired
};

CollapsibleTableRowHeader.defaultProps = {
  expanded: false
};

const CollapsibleTableRow = ({
  children,
  content,
  initiallyExpanded,
  ...props
}) => (
  <Collapsible
    {...props}
    initiallyExpanded={initiallyExpanded}
    item={<CollapsibleTableRowHeader>{children}</CollapsibleTableRowHeader>}
  >
    <table style={tableStyle}>
      <div
        style={{
          marginLet: "50px",
          padding: "10px",
          paddingLeft: "35px",
          position: "relative",
          borderBottom: "1px solid rgb(224, 224, 224)"
        }}
      >
        {content}
      </div>
    </table>
  </Collapsible>
);

CollapsibleTableRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  content: PropTypes.oneOf([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
    .isRequired,
  initiallyExpanded: PropTypes.bool
};

CollapsibleTableRow.defaultProps = {
  initiallyExpanded: false
};

export default CollapsibleTableRow;
