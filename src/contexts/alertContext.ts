import React from "react";

const AlertContext = React.createContext<{
    alertActive: boolean;
    setAlertActive: (active: boolean) => void;
    alertMessage: string;
    showAlert: (message: string) => void;
    hideAlert: () => void;
}>({
    alertActive: false,
    setAlertActive: () => {},
    alertMessage: "Internal error",
    showAlert: () => {},
    hideAlert: () => {},
});

export default AlertContext;
