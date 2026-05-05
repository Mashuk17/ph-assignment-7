"use client";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addEntry = (type, name) => {
    toast.success(`${type} with ${name} successful`, {
      position: "top-center",
    });
    const newEntry = {
      type,
      name,
      date: new Date().toISOString(),
    };
    setTimeline([newEntry, ...timeline]);
  };
  return (
    <div>
      <TimelineContext.Provider value={{ timeline, addEntry }}>
        {children}
      </TimelineContext.Provider>
    </div>
  );
};

export default TimelineProvider;
