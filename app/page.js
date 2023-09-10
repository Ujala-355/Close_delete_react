"use client"
import React, { useState } from "react";
import FirstBox from "./firstBox";
import SecondBox from "./secondBox";

const people = {
  "10": {
    "log_level": "action",
    "log": "Bot 1 dispatched to station1",
    "created_at": "2022-12-26 11:56:00",
    "fleet": "test1"
  },
  "11": {
    "log_level": "info",
    "log": "Bot 3 has low battery",
    "created_at": "2023-12-26 11:56:02",
    "fleet": "test1"
  },
  "12": {
    "log_level": "action",
    "log": "Bot 2 started the trip",
    "created_at": "2023-12-26 11:56:00",
    "fleet": "test1"
  },
  "type": "notifications"
};

const Page = () => {
    const [isSecondBoxOpen, setSecondBoxOpen] = useState(false);
    const [filteredData, setFilteredData] = useState([]);

    const openSecondBox = () => {
        const actionLogs = Object.values(people).filter(
           (entry) => entry.fleet === "test1"
        );

        setFilteredData(actionLogs);
        setSecondBoxOpen(true);
    };

    const closeSecondBox = () => {
       setSecondBoxOpen(false);
    };
    const clearData = () => {
       setFilteredData([]);
    };
    return (
        <>
            <div className="page">
                <FirstBox openSecondBox={openSecondBox} />
                <SecondBox
                  isOpen={isSecondBoxOpen}
                  onClose={closeSecondBox}
                  onClear={clearData}
                  filteredData={filteredData}
                />
            </div>
        </>
    );
};

export default Page;

