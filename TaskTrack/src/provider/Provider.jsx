import React from "react";
import { SmartTaskProvider } from "../hooks/useSmartTask";

const Provider = ({ children }) => {
  return <SmartTaskProvider>{children}</SmartTaskProvider>;
};
export default Provider;
