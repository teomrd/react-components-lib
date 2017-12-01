import React from "react";
import { storiesOf, action } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { muiTheme } from "storybook-addon-material-ui";
import { CenterDecorator } from "../../../.storybook/decorators";
import MaterialColorPicker from "./MaterialColorPicker";

storiesOf("MaterialColorPicker", module)
  .addDecorator(CenterDecorator)
  .addDecorator(muiTheme())
  .add(
    "simple configuration",
    withInfo()(() => (
      <MaterialColorPicker onColorChange={action("onColorChange")} />
    ))
  );
