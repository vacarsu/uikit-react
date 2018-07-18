import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./../src/components/Button/Button";
import { wInfo } from "../.storybook/utils";

storiesOf("Components/Button", module).addWithJSX(
  "basic Button",
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <Button
    type='primary'
    onClick={() => alert('hello there')}
  >Click</Button>
  ~~~`)(() => (
    <Button type="primary" size="small" onClick={() => alert("hello there")}>
      Click
    </Button>
  ))
);
