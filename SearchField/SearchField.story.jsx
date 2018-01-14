import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { muiTheme } from "storybook-addon-material-ui";
import SearchField from "./SearchField";
import { CenterDecorator } from "../../../.storybook/decorators";

storiesOf("SearchField", module)
  .addDecorator(CenterDecorator)
  .addDecorator(muiTheme())
  .add("simplest", () => (
    <div style={{ background: "teal", padding: "15px" }}>
      <SearchField
        loading={boolean("loading", false)}
        onClear={action("onClear")}
        onChange={action("onChange")}
      />
    </div>
  ));
