import React from "react";
import { storiesOf } from "@storybook/react";
import { muiTheme } from "storybook-addon-material-ui";
import AppBar from "material-ui/AppBar";
import FontIcon from "material-ui/FontIcon";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Subheader from "material-ui/Subheader";
import Button from "material-ui-next/Button";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import faker from "faker";
import Collapsible from "../Collapsible";
import "../../App.css";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: "auto"
  }
};

const tilesData = [
  {
    img: faker.image.cats(),
    title: "Breakfast",
    author: "jill111"
  },
  {
    img: faker.image.animals(),
    title: "Tasty burger",
    author: "pashminu"
  },
  {
    img: faker.image.city(),
    title: "Camera",
    author: "Danson67"
  },
  {
    img: faker.image.food(),
    title: "Morning",
    author: "fancycrave1"
  }
];

const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList cellHeight={180} style={styles.gridList}>
      <Subheader>December</Subheader>
      {tilesData.map((tile, index) => (
        <GridTile
          key={`tile.img  ${index}`}
          title={tile.title}
          subtitle={
            <span>
              by <b>{tile.author}</b>
            </span>
          }
          actionIcon={
            <IconButton>
              <StarBorder color="white" />
            </IconButton>
          }
        >
          <img src={tile.img} alt="alt-demo" />
        </GridTile>
      ))}
    </GridList>
  </div>
);

const Header = ({ toggle, expanded }) => (
  <div
    style={{
      width: "100%",
      backgroundColor: "teal",
      padding: "20px 0px"
    }}
    role="button"
    tabIndex="0"
    onClick={toggle}
    onKeyPress={toggle}
  >
    This is a title
    <FontIcon className="material-icons" style={{ float: "right" }}>
      {expanded ? "keyboard_arrow_down" : "keyboard_arrow_up"}
    </FontIcon>
  </div>
);

const AppBarExample = ({ toggle, expanded }) => (
  <AppBar
    title="Title"
    iconElementRight={<Button label={expanded ? "Collapse" : "Expand"} />}
    onRightIconButtonTouchTap={toggle}
  />
);

storiesOf("Collapsibles/Collapsible", module)
  .addDecorator(muiTheme())
  .add("with an icon", () => (
    <Collapsible initiallyExpanded item={<Header />}>
      <div>Hey you!!!!</div>
    </Collapsible>
  ))
  .add("with an AppBar component as header", () => (
    <Collapsible initiallyExpanded item={<AppBarExample />}>
      <GridListExampleSimple />
    </Collapsible>
  ));
