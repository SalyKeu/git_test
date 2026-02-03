import React from "react";
import FirebaseConfig from "../utilities/FirebaseConfig.js";
import { SmartTaskProvider } from "../hooks/useSmartTask";
import { AuthContext } from "../hooks/useAuth";
import { FocusProvider } from "../hooks/useFocus.jsx";

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <FocusProvider>
        <SmartTaskProvider>{children}</SmartTaskProvider>
      </FocusProvider>
    </AuthProvider>
  );
};
export default Provider;
