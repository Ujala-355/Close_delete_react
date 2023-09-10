import React from "react";
const SecondBox=({isOpen,onClose,onClear,filteredData})=>{
    if  (!isOpen)
        return null;
    const handleClose=()=>{
        onClose();
    }
    const handleClearData=()=>{
        onClear();
    }
    return(
        <div className="data">
            {filteredData.map((entry) => (
                <div className="entry-box" key={entry.id}>
                <div className="box">
                    <p>{entry.log}</p>
                </div>
        </div>
      ))}
            <button className="Closebutton" onClick={handleClose}>Close</button>
            <button className="Clearbutton" onClick={handleClearData}>Clear Data</button>
        </div>
    );
};
export default SecondBox;











