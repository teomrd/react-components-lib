import React from "react";
import { storiesOf } from "@storybook/react";
import { muiTheme } from "storybook-addon-material-ui";
import { List, ListItem } from "material-ui/List";
import { CollapsibleListItem } from "../../Collapsible";
import "../../../App.css";

storiesOf("Collapsibles/CollapsibleListItem", module)
  .addDecorator(muiTheme())
  .add("List with Collapsible ListItems", () => (
    <List>
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
    </List>
  ));
