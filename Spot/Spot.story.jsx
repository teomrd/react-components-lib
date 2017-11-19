import React from "react";
import { storiesOf } from "@storybook/react";
import { muiTheme } from "storybook-addon-material-ui";
import Spot from "./Spot";

storiesOf("Spot", module)
  .addDecorator(muiTheme())
  .add("of size 40 with a magenta color", () => (
    <Spot size={40} color="magenta" />
  ));
