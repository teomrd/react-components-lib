import React from "react";
import { storiesOf } from "@storybook/react";
import { muiTheme } from "storybook-addon-material-ui";
import { Table, TableBody, TableRowColumn } from "material-ui/Table";
import faker from "faker";
import { CollapsibleTableRow } from "../../Collapsible";
import "../../../App.css";

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

storiesOf("Collapsibles/CollapsibleTableRow", module)
  .addDecorator(muiTheme())
  .add("CollapsibleTableRow with some details", () =>
    data.map(dato => (
      <CollapsibleTableRow
        key={`${dato.col1}--${dato.col2}--${dato.col3}`}
        content={<div>{details}</div>}
      >
        <TableRowColumn>{dato.col1}</TableRowColumn>
        <TableRowColumn>{dato.col2}</TableRowColumn>
        <TableRowColumn>{dato.col2}</TableRowColumn>
        <TableRowColumn>{dato.col1}</TableRowColumn>
        <TableRowColumn>{dato.col2}</TableRowColumn>
        <TableRowColumn>{dato.col2}</TableRowColumn>
      </CollapsibleTableRow>
    ))
  );
