import React from "react";
import FirebaseConfig from "../utilities/FirebaseConfig.js";
import { SmartTaskProvider } from "../hooks/useSmartTask";
import { AuthContext } from "../hooks/useAuth";

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <SmartTaskProvider>{children}</SmartTaskProvider>
    </AuthProvider>
  );
};
export default Provider;
