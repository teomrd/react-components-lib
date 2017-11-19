import React from "react";
import { storiesOf, action } from "@storybook/react";
import { muiTheme } from "storybook-addon-material-ui";
import RatingStars from "./RatingStars";

storiesOf("RatingStars", module)
  .addDecorator(muiTheme())
  .add("simplest", () => (
    <RatingStars
      topRating={7}
      score={3}
      handleRating={action("handleRating")}
    />
  ));
