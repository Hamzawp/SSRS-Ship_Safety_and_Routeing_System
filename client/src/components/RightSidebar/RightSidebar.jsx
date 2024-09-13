import React, { useState } from "react";
import { Slider } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { TimeInput } from "@nextui-org/react";
import { Time } from "@internationalized/date";

const RightSidebar = () => {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <div className="p-4">
      <h1 className="text-xl text-white">Select</h1>
      <div style={{ marginTop: "2em" }}>
        <Slider
          label="Temperature"
          step={0.01}
          maxValue={1}
          minValue={0}
          defaultValue={0.4}
          className="max-w-md text-white "
        />
      </div>

      <div style={{ marginTop: "2em" }}>
        <Slider
          label="Select a value"
          showTooltip={true}
          step={0.1}
          formatOptions={{ style: "percent" }}
          maxValue={1}
          minValue={0}
          marks={[
            {
              value: 0.2,
              label: "20%",
            },
            {
              value: 0.5,
              label: "50%",
            },
            {
              value: 0.8,
              label: "80%",
            },
          ]}
          defaultValue={0.2}
          className="max-w-md text-white"
        />
      </div>

      <div style={{ marginTop: "3em" }} >
        <h6 className="pb-2 text-white">Select Mode</h6>
        <Switch isSelected={isSelected} onValueChange={setIsSelected}>
          Mode
        </Switch>
      </div>

      <div className="flex flex-wrap gap-4" style={{ marginTop: "2em" }}>
        <TimeInput label="Event Time" />
        <TimeInput label="Event Time" defaultValue={new Time(11, 45)} />
      </div>
    </div>
  );
};

export default RightSidebar;
