import React from "react";
import { storiesOf } from "@storybook/react";
import { muiTheme } from "storybook-addon-material-ui";
import FontIcon from "material-ui/FontIcon";
import { ListItem } from "material-ui/List";
import faker from "faker";
import { TableRowColumn } from "material-ui/Table";
import Accordion from "./Accordion";
import Collapsible from "../Collapsible/Collapsible";
import { CollapsibleListItem, CollapsibleTableRow } from "../Collapsible";

const Header = ({ title, toggle, expanded }) => (
  <div
    style={{
      width: "100%",
      backgroundColor: "teal",
      padding: "20px 0px",
      cursor: "pointer"
    }}
    role="button"
    tabIndex="0"
    onClick={toggle}
    onKeyPress={toggle}
  >
    {title}
    <FontIcon className="material-icons" style={{ float: "right" }}>
      {expanded ? "keyboard_arrow_down" : "keyboard_arrow_up"}
    </FontIcon>
  </div>
);

const data = [
  {
    col1: faker.name.findName(),
    col2: faker.address.city(),
    col3: faker.commerce.department()
  },
  {
    col1: faker.name.findName(),
    col2: faker.address.city(),
    col3: faker.commerce.department()
  },
  {
    col1: faker.name.findName(),
    col2: faker.address.city(),
    col3: faker.commerce.department()
  },
  {
    col1: faker.name.findName(),
    col2: faker.address.city(),
    col3: faker.commerce.department()
  }
];

const details = faker.lorem.paragraphs();

storiesOf("Accordion", module)
  .addDecorator(muiTheme())
  .add("Accordion with simple collapsible items", () => (
    <Accordion>
      <Collapsible item={<Header title="Some demo title" />}>
        <div>You can add here some text to be displayed!</div>
      </Collapsible>
      <Collapsible item={<Header title="Some demo title" />}>
        <div>You can add here some text to be displayed!</div>
      </Collapsible>
      <Collapsible item={<Header title="Some demo title" />}>
        <div>You can add here some text to be displayed!</div>
      </Collapsible>
    </Accordion>
  ))
  .add("Accordion with CollapsibleListItems", () => (
    <Accordion>
      <CollapsibleListItem title="Joe">
        <ListItem primaryText="Chelsea Otakan" insetChildren />
        <ListItem primaryText="Eric Hoffman" insetChildren />
        <ListItem primaryText="James Anderson" insetChildren />
      </CollapsibleListItem>
      <CollapsibleListItem title="John">
        <ListItem primaryText="Chelsea Otakan" insetChildren />
        <ListItem primaryText="Eric Hoffman" insetChildren />
        <ListItem primaryText="James Anderson" insetChildren />
      </CollapsibleListItem>
      <CollapsibleListItem title="Jane">
        <ListItem primaryText="Chelsea Otakan" insetChildren />
        <ListItem primaryText="Eric Hoffman" insetChildren />
        <ListItem primaryText="James Anderson" insetChildren />
      </CollapsibleListItem>
    </Accordion>
  ))
  .add("Accordion with CollapsibleListItems generated by map fn", () => (
    <Accordion>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
        <CollapsibleListItem key={i} title={`Joe ${i}`}>
          <ListItem primaryText="Chelsea Otakan" insetChildren />
          <ListItem primaryText="Eric Hoffman" insetChildren />
          <ListItem primaryText="James Anderson" insetChildren />
        </CollapsibleListItem>
      ))}
    </Accordion>
  ))
  .add("Accordion with CollapsibleTableRows", () => (
    <Accordion>
      {data.map(({ col1, col2, col3 }) => (
        <CollapsibleTableRow
          key={`${col1}--${col2}--${col3}`}
          content={<div>{details}</div>}
        >
          <TableRowColumn>{col1}</TableRowColumn>
          <TableRowColumn>{col2}</TableRowColumn>
          <TableRowColumn>{col2}</TableRowColumn>
          <TableRowColumn>{col1}</TableRowColumn>
          <TableRowColumn>{col2}</TableRowColumn>
          <TableRowColumn>{col2}</TableRowColumn>
        </CollapsibleTableRow>
      ))}
    </Accordion>
  ));
