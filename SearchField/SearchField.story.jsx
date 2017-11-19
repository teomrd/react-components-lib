import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { muiTheme } from "storybook-addon-material-ui";
import SearchField from "./SearchField";

storiesOf("SearchField", module)
  .addDecorator(muiTheme())
  .add("simplest", () => (
    <SearchField onClear={action("onClear")} onChange={action("onChange")} />
  ));
