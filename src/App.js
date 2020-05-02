import React from "react";

import { Radio } from "dnb-ui-lib";
import "dnb-ui-lib/style";

export default function App() {
  const [currentValueForGorup, setValueForGorup] = React.useState("first");

  return (
    <div className="App">
      <Radio.Group
        label="Don't works:"
        value="first"
        on_change={({ value }) => {
          console.log("on_change", value);
        }}
      >
        <Radio label="First" value="first" />
        <Radio label="Second" value="second" />
        <Radio label="Third" value="third" />
      </Radio.Group>
      <br />
      <Radio.Group
        top="large"
        label="Works (with state):"
        label_direction="vertical"
        value={currentValueForGorup}
        on_change={({ value }) => {
          console.log("on_change", value);
          setValueForGorup(value);
        }}
      >
        <Radio label="First" value="first" />
        <Radio label="Second" value="second" />
        <Radio label="Third" value="third" />
      </Radio.Group>
    </div>
  );
}
