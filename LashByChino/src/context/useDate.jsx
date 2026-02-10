import { createContext, useContext, useState } from "react";

const DateContext = createContext(null);

export const DateProvider = ({ children }) => {
    const [appointment, setAppointment] = useState([]);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);

    return (
        <DateContext.Provider value={{ date, setDate, time, setTime }}>
            {children}
        </DateContext.Provider>
    );
};

export const useDate = () => {
    const context = useContext(DateContext);
    if (!context) {
        throw new Error("useDate must be used within a DateProvider");
    }
    return context;
};