import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { useCallback, useContext, useState } from "react";
import AlertContext from "src/contexts/alertContext";

function ErrorAlert(): JSX.Element {
    const { alertActive, setAlertActive, alertMessage } =
        useContext(AlertContext);

    const handleClose = () => {
        setAlertActive(false);
    };

    return (
        <Snackbar
            open={alertActive}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <Alert severity="error" variant="filled" onClose={handleClose}>
                <AlertTitle>{alertMessage}</AlertTitle>
            </Alert>
        </Snackbar>
    );
}

interface AlertProviderProps {
    children: React.ReactNode; // Дочерние элементы, к котрорым будет добавлен Alert
    defaultMessage: string; // Начальное значение alertMessage
}

const AlertProvider: React.FC<AlertProviderProps> = ({
    children,
    defaultMessage,
}) => {
    const [alertActive, setAlertActive] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] =
        useState<string>(defaultMessage);

    const showAlert = useCallback((message: string) => {
        setAlertMessage(message);
        setAlertActive(true);
    }, []);

    const hideAlert = useCallback(() => {
        setAlertActive(false);
    }, []);

    return (
        <AlertContext.Provider
            value={{
                alertActive,
                setAlertActive,
                alertMessage,
                showAlert,
                hideAlert,
            }}
        >
            {children}
            <ErrorAlert />
        </AlertContext.Provider>
    );
};

export default AlertProvider;
