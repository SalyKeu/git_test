import React from "react";
import { useFocus } from "../hooks/useFocus";

function ModeSelect() {
  const { modeSelect, handleIsModeSelect } = useFocus();
  return (
    <div>
      <h1>Mode Select</h1>
    </div>
  );
}

export default ModeSelect;
