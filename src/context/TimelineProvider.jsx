"use client";
import { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addEntry = (type, name) => {
    const newEntry = {
      type,
      name,
      date: new Date().toLocaleDateString(),
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
